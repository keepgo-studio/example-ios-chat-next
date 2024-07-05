"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeContext";
import type { ChatMessage } from "ios-chat";
import { openDB } from "idb";
import { base64ToBlob, blobToBase64 } from "@/lib/utils";

type DBChatMessage = ChatMessage & {
  decodeNeeded: boolean;
  mimeType?: string;
};

export default function Chatbot() {
  const CHAT_ID = "chat";

  const [unreadCnt, setUnreadCnt] = useState(0);
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const { theme } = useTheme();

  useEffect(() => {
    openDB("chat-db", 1, {
      upgrade(db) {
        db.createObjectStore("chat-messages");
      },
    }).then((db) => {
      import("ios-chat").then(({ initChat, addRoomListener }) => {
        let messages: DBChatMessage[] = [];

        addRoomListener(CHAT_ID, async (msg) => {
          let contentData = msg.content;
          let decodeNeeded = false;
          let mimeType;

          if (msg.type === "audio" || msg.type === "img") {
            try {
              contentData = await fetch(msg.content)
                .then((res) => {
                  mimeType = res.headers.get("Content-Type");
                  return res.blob();
                })
                .then((blob) => blobToBase64(blob));

              decodeNeeded = true;
            } catch {
              contentData = msg.content;
            }
          }

          messages.push({
            ...msg,
            content: contentData,
            decodeNeeded,
            mimeType,
          });

          const tx = db.transaction("chat-messages", "readwrite");
          const store = tx.objectStore("chat-messages");
          await store.put(messages, CHAT_ID);
          tx.done;

          if (!openRef.current) {
            setUnreadCnt((prev) => prev + 1);
          }
        });

        (async () => {
          const tx = db.transaction("chat-messages", "readonly");
          const store = tx.objectStore("chat-messages");
          const val: DBChatMessage[] = (await store.get(CHAT_ID)) || [];
          tx.done;

          messages = val;

          const tempMessages = val.map((_msg) => {
            let contentData;

            if (
              (_msg.type === "audio" || _msg.type === "img") &&
              _msg.decodeNeeded
            ) {
              const blob = base64ToBlob(_msg.content, _msg.mimeType!);
              const url = URL.createObjectURL(blob);

              contentData = url;
            } else {
              contentData = _msg.content;
            }

            return {
              ..._msg,
              content: contentData,
            };
          });

          initChat(CHAT_ID, tempMessages);
        })();
      });
    });
  }, []);

  const stId = useRef<ReturnType<typeof setTimeout>>();
  const ref = useRef(null);

  useEffect(() => {
    clearTimeout(stId.current);

    openRef.current = open;

    if (ref.current) {
      const chatContainer = ref.current as HTMLElement;

      if (!open) {
        chatContainer.style.top = "0px";
        chatContainer.style.opacity = "0";

        stId.current = setTimeout(() => {
          chatContainer.style.display = "none";
        }, 500);
      } else {
        chatContainer.style.display = "";

        stId.current = setTimeout(() => {
          chatContainer.style.top = "-16px";
          chatContainer.style.opacity = "1";
        });

        setUnreadCnt(0);
      }
    }
  }, [open]);

  return (
    <div className={`fixed right-4 bottom-4 z-50`}>
      <button
        className="bg-black p-4 rounded-2xl duration-300 hover:brightness-75 active:scale-90"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <Image
          className="aspect-square"
          src="./apple-logo.svg"
          alt="icon"
          width={32}
          height={32}
        />
      </button>

      <section
        ref={ref}
        className={`
        absolute right-0 border -translate-y-full rounded-3xl duration-500 overflow-hidden
        ${open ? "" : "opacity-0 top-0 select-none"}
      `}
      >
        <div className="w-80 h-[600px] bg-primary-bg-in py-2">
          <ios-chat room-id={CHAT_ID} dark={theme === "dark"}></ios-chat>
        </div>
      </section>

      {unreadCnt > 0 && (
        <section className="absolute bg-red-500 text-white top-0 right-0 rounded-full translate-x-1/3 -translate-y-1/3 px-2 py-[1px]">
          {unreadCnt}
        </section>
      )}
    </div>
  );
}
