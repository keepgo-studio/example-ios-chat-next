import dynamic from "next/dynamic";
import React, { useState } from "react";

/**
 * In Next js, you can also use dynamic import.
 * 
 * use this syntax if it is your preferred code style :)
 */

const ChatHostItem = dynamic(() => import("./ChatHostItem"), {
  ssr: false
});

const ChatItem = dynamic(() => import("./ChatItem"), {
  ssr: false
});

export default function ChatCreator() {
  const [chatList, setChatList] = useState<string[]>([]);

  return (
    <div>
      <section className="flex justify-between">
        <div>
          <p className="px-4 py-2">
            Create new chat room 
            <br/>
            <br/>
            send message to all chat rooms or sends to only one chat room.
          </p>

          <div className="h-6" />

          <button 
            className="ml-2 w-fit h-fit text-sm bg-blue-500 text-white py-[.5em] px-[1.2em] duration-150 rounded-full hover:brightness-90 active:scale-95"
            onClick={() => {
              setChatList(prev => [...prev, `room-${chatList.length}`]);
            }}
          >
            Create chat room
          </button>
        </div>

        <ChatHostItem clientIds={chatList} />
      </section>

      <div className="h-12"/>

      <ul className="flex flex-wrap gap-2 p-6 border rounded-2xl">
        {chatList.map((roomId, idx) => (
          <li
            key={idx}>
            <ChatItem roomId={roomId} />
          </li>
        ))}
      </ul>
    </div>
  );
}
