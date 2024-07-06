import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from './ThemeContext';
import { type ChatMessage, addRoomListener, answerChat, initChat, removeRoomListener } from 'ios-chat';

export default function ChatHostItem({
  clientIds
}: {
  clientIds: string[];
}) {
  const SERVER_CHAT_ID = "server";

  const { theme } = useTheme();
  const listenerId = useRef<string | null>(null);
  const [selectId, setSelectId] = useState<string | null>(null);

  const fireEcho = (sendMsg: ChatMessage) => {
    if (selectId === null) {
      clientIds.forEach(_id => {
        answerChat(_id, { ...sendMsg });
      });

      return;
    }

    answerChat(selectId, { ...sendMsg });
  };

  useEffect(() => {
    if (listenerId.current) {
      removeRoomListener(SERVER_CHAT_ID, listenerId.current);
      listenerId.current = null;
    }

    listenerId.current = addRoomListener(SERVER_CHAT_ID, (msg) => {
      if (msg.role === "sender") fireEcho(msg);
    });
  }, [clientIds, selectId])

  useEffect(() => {
    initChat(SERVER_CHAT_ID, [{
      id: "none",
      content: "Hello world!\nfor more information, visit\n https://github.com/keepgo-studio/ios-chat",
      createdDatetime: Date.now(),
      role: "receiver",
      type: "text"
    }]);
  }, []);

  return (
    <section className='flex gap-4'>
      <div className='w-24 h-full flex flex-col'>
        <h4 className='text-lg'>send To...</h4>
        <ul className='flex-1 border rounded-xl p-2 flex flex-col gap-2 text-center font-bold'>
          {clientIds.map((_id) => (
            <li 
              key={_id}
              className={`
                border rounded-md p-1 text-sm cursor-pointer
                ${selectId === _id && "bg-green-600 text-white"}
              `} 
              onClick={() => setSelectId(_id)}
            >{_id}</li>
          ))}

          <li 
            className={`
              border rounded-md p-1 text-sm cursor-pointer
              ${selectId === null && "bg-green-600"}
            `}
            onClick={() => setSelectId(null)}
          >All</li>
        </ul>
      </div>

      <div className='w-[400px] h-[400px] border py-4 rounded-2xl'>
        <ios-chat room-id={SERVER_CHAT_ID} dark={theme === "dark"}></ios-chat>
      </div>
    </section>
  );
}