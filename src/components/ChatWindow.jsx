import React, { useState, useRef, useEffect } from 'react'

export default function ChatWindow({ friend, messages = [], onSend }) {
  const [text, setText] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, friend])

  function submit(e) {
    e.preventDefault()
    if (!text.trim()) return
    onSend(text.trim())
    setText('')
  }

  if (!friend) {
    return <div className="h-full flex items-center justify-center text-gray-500">Select a friend to start chatting</div>
  }

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b flex items-center justify-between">
        <div className="font-semibold">{friend.name}</div>
        <div className="text-sm text-gray-500">Online</div>
      </div>

      <div ref={scrollRef} className="flex-1 p-6 overflow-auto space-y-3 bg-gradient-to-b from-white to-gray-50">
        {messages.length === 0 && <div className="text-gray-400">No messages yet. Say hello!</div>}
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[70%] p-2 rounded ${m.from === 'You' ? 'ml-auto bg-indigo-600 text-white' : 'bg-gray-200 text-gray-900'}`}>
            <div className="text-sm">{m.text}</div>
            <div className="text-[10px] text-gray-500 mt-1">{m.from}</div>
          </div>
        ))}
      </div>

      <form onSubmit={submit} className="p-4 border-t flex items-center gap-3">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder={`Message ${friend.name}`} className="flex-1 px-3 py-2 rounded border" />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
      </form>
    </div>
  )
}
