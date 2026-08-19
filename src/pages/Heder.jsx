import reactLogo from '../assets/logo.png'
import { Sun, Moon } from 'lucide-react'

function Header({ isDark, setIsDark }) {
  return (
    <header className={isDark ? "flex flex-row justify-between items-center p-4 gap-4 bg-gray-800 shadow-md rounded-lg mb-4" : "flex flex-row justify-between items-center p-4 gap-4 bg-white shadow-md rounded-lg mb-4"}>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded">
          <img src={reactLogo} alt="React Logo" className="w-10 h-10 justify-content" />
        </div>
        <h1 className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-black"}>Extension</h1>
      </div>
       <button
    onClick={() => setIsDark(!isDark)}
    className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-300 bg-transparent hover:bg-gray-100 transition-colors"
  >
    {isDark ? <Sun size={18} className="text-gray-600" /> : <Moon size={18} className="text-gray-600" />}
  </button>
    </header>
  )
}

export default Header