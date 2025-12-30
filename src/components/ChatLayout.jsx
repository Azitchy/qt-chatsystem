import React, { useState } from 'react'
import ChatWindow from './ChatWindow'
import FriendModal from './FriendModal'

export default function ChatLayout() {
  const [friends, setFriends] = useState([
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
  ])
  const [selectedId, setSelectedId] = useState(friends[0]?.id || null)
  const [messages, setMessages] = useState({
    '1': [{ from: 'Alice', text: 'Hey there!' }],
    '2': [{ from: 'Bob', text: 'Hi!' }],
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  function addFriend(name, qrData) {
    const id = String(Date.now())
    const newFriend = { id, name: name || `Friend-${id.slice(-4)}` }
    setFriends((s) => [...s, newFriend])
    setMessages((m) => ({ ...m, [id]: [] }))
    setSelectedId(id)
    setIsModalOpen(false)
  }

  function sendMessage(toId, text) {
    if (!toId) return
    setMessages((m) => ({
      ...m,
      [toId]: [...(m[toId] || []), { from: 'You', text }],
    }))
  }

  const selectedFriend = friends.find((f) => f.id === selectedId) || null

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <aside className="w-80 bg-gray-50 border-r p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">Q</div>
            <div className="ml-3 font-semibold">QT Chat</div>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="text-sm px-3 py-1 bg-indigo-600 text-white rounded">Add</button>
        </div>

        <div className="flex-1 overflow-auto">
          <input placeholder="Search" className="w-full mb-3 px-3 py-2 rounded border" />
          <ul>
            {friends.map((f) => (
              <li key={f.id}>
                <button
                  onClick={() => setSelectedId(f.id)}
                  className={`w-full text-left px-3 py-2 rounded mb-1 ${f.id === selectedId ? 'bg-indigo-100' : 'hover:bg-gray-100'}`}>
                  {f.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="flex-1 bg-white">
        <ChatWindow
          friend={selectedFriend}
          messages={messages[selectedId] || []}
          onSend={(text) => sendMessage(selectedId, text)}
        />
      </main>

      <FriendModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddFriend={addFriend} />
    </div>
  )
}
