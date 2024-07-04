import React, { useEffect } from 'react'
import { useTheme } from './ThemeContext'
import { addRoomListener, answerChat } from "ios-chat";

export default function ChatItem({ 
  roomId
}: { 
  roomId: string
}) {
  const { theme } = useTheme();

  useEffect(() => {
    addRoomListener(roomId, (msg) => {
      if (roomId !== "server") {
        answerChat("server", {
          type: "text",
          content: `from: ${roomId} \n------\n ${msg.content}`
        });
      }
    })
  }, []);

  return (
    <div className={`
      ${roomId === "server" ? "w-[400px] h-[400px]" : "w-[260px] h-[420px]"}
      border py-4 rounded-2xl
    `}>
      <ios-chat room-id={roomId} dark={theme === "dark"}></ios-chat>
    </div>
  )
}
