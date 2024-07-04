"use client";

import React from "react";
import Divider from "./Divider";
import Image from "next/image";
import { useTheme } from "./ThemeContext";
import { delay } from "@/lib/utils";
import ChatCreator from "./ChatCreator";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="px-3 h-12 bg-primary-bg-in flex items-center justify-between border-b-black border-b">
        <Image
          src={theme === "light" ? "/apple-logo.black.svg" : "/apple-logo.svg"}
          width={16}
          height={16}
          alt="nav-icon"
        />

        <p className="text-sm font-light">iOS Chat Example</p>
      </nav>

      <section className="max-w-screen-lg m-auto p-20">
        <h1 className="font-bold text-2xl">Example 1. Requesting</h1>

        <div className="h-6" />

        <article className="border rounded-3xl p-6 bg-primary-bg-in">
          <p>
            Answer to chat outside of component 
            <br/>
            <br/>
            If chat screen is off and the server sent response, you can check unread message counts will appear
          </p>

          <div className="h-4" />

          <div className="flex justify-end">
            <button
              className="text-sm bg-blue-500 text-white py-[.5em] px-[1.2em] duration-150 rounded-full hover:brightness-90 active:scale-95"
              onClick={async () => {
                const handler = await import("ios-chat");

                try {
                  handler.startAnswerLoading("chat");

                  // processing
                  await delay(2000);

                  await handler.endAnswerLoading("chat");

                  handler.answerChat("chat", {
                    type: "text",
                    content: "iPhone 15 Pro image - Apple",
                  });
                  handler.answerChat("chat", {
                    type: "img",
                    content:
                      "https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large.jpg",
                  });
                } catch {
                  alert("current chat room is blocked");
                }
              }}
            >
              Request data from Server
            </button>
          </div>
        </article>

        <div className="h-12" />
        <Divider />
        <div className="h-12" />

        <h1 className="font-bold text-2xl">Example 2. Darkmode</h1>

        <div className="h-6" />

        <article className="border rounded-3xl p-6 bg-primary-bg-in">
          <p>Toggle button to set theme</p>

          <div className="h-4" />

          <div className="flex justify-between items-center">
            <p className="text-sm mr-4">
              <span className="text-gray-400 mr-2">Current theme</span>
              <span className="py-[.5em] px-[1.2em] rounded-full border">
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </span>
            </p>

            <button
              className="text-sm bg-blue-500 text-white py-[.5em] px-[1.2em] duration-150 rounded-full hover:brightness-90 active:scale-95"
              onClick={() => toggleTheme()}
            >
              Change theme
            </button>
          </div>
        </article>

        <div className="h-12" />
        <Divider />
        <div className="h-12" />

        <h1 className="font-bold text-2xl">Example 3. Saving messages</h1>

        <div className="h-6" />

        <article className="border rounded-3xl p-6 bg-primary-bg-in">
          <p>Even though user reload the page, messages will remain</p>

          <div className="h-4" />

          <div className="flex justify-end items-center">
            <button
              className="text-sm bg-blue-500 text-white py-[.5em] px-[1.2em] duration-150 rounded-full hover:brightness-90 active:scale-95"
              onClick={() => location.reload()}
            >
              Reload
            </button>
          </div>
        </article>

        <div className="h-12" />
        <Divider />
        <div className="h-12" />

        <h1 className="font-bold text-2xl">Example 4. Dynamic import</h1>

        <div className="h-6" />

        <article className="border rounded-3xl p-6 bg-primary-bg-in">
          <ChatCreator />
        </article>
      </section>
    </>
  );
}
