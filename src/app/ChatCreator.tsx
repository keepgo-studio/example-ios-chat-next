import dynamic from "next/dynamic";
import React, { useState } from "react";

const ChatItem = dynamic(() => import("./ChatItem"), {
  ssr: false
});

export default function ChatCreator() {
  const [chatList, setChatList] = useState<string[]>([]);

  return (
    <div>
      <section className="flex justify-between">
        <div>
          <p>
            In <b>Next js</b>, you can also use dynamic import.
            <br />
            use this if it is your prefered code style
          </p>

          <div className="h-8" />

          <button 
            className="w-fit h-fit text-sm bg-blue-500 text-white py-[.5em] px-[1.2em] duration-150 rounded-full hover:brightness-90 active:scale-95"
            onClick={() => {
              setChatList(prev => [...prev, `room-${chatList.length}`]);
            }}
          >
            Create chat room
          </button>
        </div>

        <ChatItem roomId="server" />
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
