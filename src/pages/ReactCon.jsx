import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { 
  Hash, Zap, Package, Puzzle, Pin, Code2, 
  Globe, List, MousePointerClick, Shuffle, GitBranch, Brain , Sun, Moon
} from 'lucide-react';
import Card from './Card'

function ReactCon() {
   const [checked, setChecked] = useState({})
   const [filter, setFilter] = useState('all')
   const [isDark, setIsDark] = useState(false)

const concepts = [
  { 
    id: 1, title: 'useState', 
    description: 'Lets a component remember information between renders, like a counter or input value.',
    icon: Hash, iconBg: 'bg-blue-500/15', iconColor: 'text-blue-500'
  },
  { 
    id: 2, title: 'useEffect', 
    description: 'Runs code after the component renders — perfect for fetching data or setting timers.',
    icon: Zap, iconBg: 'bg-purple-500/15', iconColor: 'text-purple-500'
  },
  { 
    id: 3, title: 'Props', 
    description: 'Short for properties — how you pass data from a parent component down to a child.',
    icon: Package, iconBg: 'bg-pink-500/15', iconColor: 'text-pink-500'
  },
  { 
    id: 4, title: 'Components', 
    description: 'Reusable building blocks of a React app — like custom HTML elements you define yourself.',
    icon: Puzzle, iconBg: 'bg-green-500/15', iconColor: 'text-green-500'
  },
  { 
    id: 5, title: 'useRef', 
    description: "Holds a value or a DOM reference that doesn't trigger a re-render when changed.",
    icon: Pin, iconBg: 'bg-orange-500/15', iconColor: 'text-orange-500'
  },
  { 
    id: 6, title: 'JSX', 
    description: 'A syntax that looks like HTML but lives inside JavaScript — React uses it to describe the UI.',
    icon: Code2, iconBg: 'bg-blue-500/15', iconColor: 'text-blue-500'
  },
  { 
    id: 7, title: 'useContext', 
    description: 'Share data across many components without passing props manually at every level.',
    icon: Globe, iconBg: 'bg-purple-500/15', iconColor: 'text-purple-500'
  },
  { 
    id: 8, title: 'Lists & Keys', 
    description: 'Render arrays of items with .map() and give each item a unique key so React tracks them.',
    icon: List, iconBg: 'bg-green-500/15', iconColor: 'text-green-500'
  },
  { 
    id: 9, title: 'Event Handling', 
    description: 'React listens for user actions like clicks and inputs using event handler functions.',
    icon: MousePointerClick, iconBg: 'bg-red-500/15', iconColor: 'text-red-500'
  },
  { 
    id: 10, title: 'useReducer', 
    description: 'Manage more complex state logic by dispatching actions — like a mini state machine.',
    icon: Shuffle, iconBg: 'bg-yellow-500/15', iconColor: 'text-yellow-500'
  },
  { 
    id: 11, title: 'Conditional Rendering', 
    description: 'Show or hide parts of the UI based on a condition, using if statements or the && operator.',
    icon: GitBranch, iconBg: 'bg-blue-500/15', iconColor: 'text-blue-500'
  },
  { 
    id: 12, title: 'useMemo', 
    description: 'Cache the result of an expensive calculation so it only re-runs when its inputs change.',
    icon: Brain, iconBg: 'bg-lime-500/15', iconColor: 'text-lime-600'
  },
]

 const checkedCount = Object.values(checked).filter(Boolean).length
 const progressPercent = concepts.length === 0 
  ? 0 
  : (checkedCount / concepts.length) * 100;

  const toggledCard = (id) => {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
     }))
   }

  const resetAll = () => {
    setChecked({})
  }

  const visibleConcepts = concepts.filter((card) => {
    if (filter === "learned") return checked[card.id];
    if (filter === "notYet") return !checked[card.id];
    return true; 
  })

 const filterButton = ({ label, value }) => {
  if (isDark) {
    return (
      <button
        onClick={() => setFilter(value)}
        className={`h-10 whitespace-nowrap flex-shrink-0 py-2 px-4 rounded-full border border-gray-800 font-bold transition-colors ${
          filter === value
            ? "bg-orange-500 text-white"
            : "bg-gray-800 text-gray-300 hover:bg-gray-600"
        }`}
      >
        {label}
      </button>
    )
  }

  return (
    <button
      onClick={() => setFilter(value)}
      className={`h-10 whitespace-nowrap flex-shrink-0 py-2 px-4 rounded-full font-bold transition-colors ${
        filter === value
          ? "bg-orange-600 text-white"
          : "bg-gray-200 text-gray-500 hover:bg-gray-300"
      }`}
    >
      {label}
    </button>
  )
}

const totalCon = (concepts, checkedCount) => {
  if (isDark) {
    return (
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-white">Concepts List</h1>
        <p className="text-gray-400 mb-4">
          {checkedCount} of {concepts.length} Learned
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Concepts List</h1>
      <p className="text-gray-600 mb-4">
        {checkedCount} of {concepts.length} Learned
      </p>
    </div>
  )
}


  if (isDark) {
    return (
      <>
     <div className="bg-gray-900 min-h-screen">
     <header className="flex flex-row justify-between items-center p-4 gap-4 bg-gray-900 shadow-md rounded-lg mb-4">
     <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-orange-500 rounded">
           <img src={reactLogo} alt="React Logo" className="w-10 h-10 justify-content" />
      </div>
       <h1 className="text-3xl font-bold text-white">React Concepts</h1>
     </div>

  <button
    onClick={() => setIsDark(!isDark)}
    className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-500 bg-transparent hover:bg-gray-100 transition-colors"
  >
    {isDark ? <Sun size={18} className="text-gray-600" /> : <Moon size={18} className="text-gray-600" />}
  </button>
</header>

        <div className="flex flex-wrap justify-between items-center bg-gray-900 gap-4 p-4">
          {totalCon(concepts, checkedCount)}
          <div className="flex flex-row gap-2">
            {filterButton({ label: "All", value: "all" })}
            {filterButton({ label: "Learned", value: "learned" })}
            {filterButton({ label: "Not Yet", value: "notYet" })}
            <button
              onClick={resetAll}
              className="h-10 whitespace-nowrap flex-shrink-0 py-2 px-4 rounded-full font-bold bg-gray-900 border border-gray-300 text-gray-500 hover:bg-gray-100"
            >
              Reset All
            </button>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <Card
          concept={visibleConcepts}
          checked={checked}
          onToggle={toggledCard}
          darkMode={isDark}
        />
        </div>
      </>
    )
  }

  return (
    <>
    <header className="flex flex-row justify-between items-center p-4 gap-4 bg-white shadow-md rounded-lg mb-4">
      <div className="flex items-center gap-4">
     <div className="w-10 h-10 bg-orange-500 rounded">
      <img src={reactLogo} alt="React Logo" className="w-10 h-10 justify-content" />
    </div>
    <h1 className="text-3xl font-bold ">React Concepts</h1>
  </div>

  <button
    onClick={() => setIsDark(!isDark)}
    className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-300 bg-transparent hover:bg-gray-100 transition-colors"
  >
    {isDark ? <Sun size={18} className="text-gray-600" /> : <Moon size={18} className="text-gray-600" />}
  </button>
</header>

      <div className="flex flex-wrap justify-between items-center gap-4 p-4">
        {totalCon(concepts, checkedCount)}
        <div className="flex flex-row gap-2">
          {filterButton({ label: "All", value: "all" })}
          {filterButton({ label: "Learned", value: "learned" })}
          {filterButton({ label: "Not Yet", value: "notYet" })}
          <button
            onClick={resetAll}
            className="h-10 whitespace-nowrap flex-shrink-0 py-2 px-4 rounded-full font-bold bg-white border border-gray-300 text-gray-500 hover:bg-gray-100"
          >
            Reset All
          </button>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div
            className="bg-orange-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <Card
        concept={visibleConcepts}
        checked={checked}
        onToggle={toggledCard}
      />
    </>
  )
}

export default ReactCon