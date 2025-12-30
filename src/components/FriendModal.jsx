import React, { useState } from 'react'

export default function FriendModal({ isOpen, onClose, onAddFriend }) {
  const [name, setName] = useState('')
  const [qr, setQr] = useState('')

  if (!isOpen) return null

  function submit(e) {
    e.preventDefault()
    onAddFriend(name || null, qr || null)
    setName('')
    setQr('')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose}></div>

      <div className="bg-white rounded shadow-lg w-96 z-10 p-6">
        <h3 className="text-lg font-semibold mb-3">Add Friend</h3>
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="text-sm text-gray-700">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded" />
          </div>

          <div>
            <label className="text-sm text-gray-700">QR data (paste or simulate)</label>
            <input value={qr} onChange={(e) => setQr(e.target.value)} className="w-full mt-1 px-3 py-2 border rounded" placeholder="example: qr://friend/1234" />
          </div>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-3 py-1 border rounded">Cancel</button>
            <button type="submit" className="px-3 py-1 bg-indigo-600 text-white rounded">Add</button>
          </div>
        </form>

        <div className="mt-4 text-sm text-gray-500">
          Tip: To enable real QR scanning, install a QR library like <span className="font-mono">react-qr-reader</span> or <span className="font-mono">html5-qrcode</span> and replace this input with a camera preview.
        </div>
      </div>
    </div>
  )
}
