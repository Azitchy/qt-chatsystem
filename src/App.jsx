import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header className="bg-white shadow-sm">
		      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		        <div className="flex justify-between items-center h-16">
		          <div className="flex items-center">
		            <a href="/" className="flex items-center">
		              <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">Q</div>
		              <span className="ml-3 text-xl font-semibold text-gray-900">QT Chat</span>
		            </a>
		          </div>

		          <div className="flex items-center space-x-4">
		            <nav className="hidden md:flex space-x-4">
		              <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
		              <a href="#" className="text-gray-700 hover:text-indigo-600">Friend list</a>
		            </nav>

		            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Login</button>
		          </div>
		        </div>
		      </div>
		    </header>
    </>
  )

}

export default App
