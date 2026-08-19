import { useState } from 'react'
import Card from './Card'
import devlens from "../assets/images/logo-devlens.svg";
import styleSpy from "../assets/images/logo-style-spy.svg";
import speedBoost from "../assets/images/logo-speed-boost.svg";
import jsonWizard from "../assets/images/logo-json-wizard.svg";
import tabMasterPro from "../assets/images/logo-tab-master-pro.svg";
import viewportBuddy from "../assets/images/logo-viewport-buddy.svg";
import markupNotes from "../assets/images/logo-markup-notes.svg";
import gridGuides from "../assets/images/logo-grid-guides.svg";
import palettePicker from "../assets/images/logo-palette-picker.svg";
import linkChecker from "../assets/images/logo-link-checker.svg";
import domSnapshot from "../assets/images/logo-dom-snapshot.svg";
import consolePlus from "../assets/images/logo-console-plus.svg";
import Header from './Heder'
import Lable from './LableSection'
import FilterButton from './FilterButton'
import ProgrBar from './ProgrBar'

function ReactCon() { 
  
const [checked, setChecked] = useState({})
   const [isDark, setIsDark] = useState(false)
   const [filter, setFilter] = useState('all')
   const checkedCount = Object.values(checked).filter(Boolean).length
   const concepts = [
  { 
    id: 1, title: 'DevLens', 
    description: 'Quickly inspect page layouts and visualize element boundaries.',
    icon: devlens
  },
  { 
    id: 2, title: 'StyleSpy', 
    description: 'Instantly analyze and copy CSS from any webpage element.',
    icon: styleSpy
  },
  { 
    id: 3, title: 'SpeedBoost', 
    description: 'Optimizes browser resource usage to accelerate page loading.',
    icon: speedBoost
  },
  { 
    id: 4, title: 'JSONWizard', 
    description: 'Formats, validates, and prettifies JSON responses in-browser.',
    icon: jsonWizard
  },
  { 
    id: 5, title: 'TabMaster Pro', 
    description: 'Organizes browser tabs into groups and sessions.',
    icon: tabMasterPro
  },
  { 
    id: 6, title: 'ViewportBuddy', 
    description: 'Simulates various screen resolutions directly within the browser.',
    icon: viewportBuddy
  },
  { 
    id: 7, title: 'Markup Notes', 
    description: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
    icon: markupNotes
  },
  { 
    id: 8, title: 'GridGuides', 
    description: 'Overlay customizable grids and alignment guides on any webpage.',
    icon: gridGuides
  },
  { 
    id: 9, title: 'Palette Picker', 
    description: 'Instantly extracts color palettes from any webpage.',
    icon: palettePicker
  },
  { 
    id: 10, title: 'LinkChecker', 
    description: 'Scans and highlights broken links on any page.',
    icon: linkChecker
  },
  { 
    id: 11, title: 'DOM Snapshot', 
    description: 'Capture and export DOM structures quickly.',
    icon: domSnapshot
  },
  { 
    id: 12, title: 'ConsolePlus', 
    description: 'Enhanced developer console with advanced filtering and logging.',
    icon: consolePlus
  },
]

    return (
 <div className={isDark 
  ? "min-h-screen w-full overflow-x-hidden bg-gray-900 p-6"
  : "min-h-screen w-full overflow-x-hidden bg-white p-6"}>
      <div className ="flex flex-col gap-4 w-full">
       <Header isDark={isDark} setIsDark={setIsDark} />
       <div className="md:flex md:justify-between md:items-center gap-4 flex-wrap">
        <Lable isDark={isDark} conceptNum={concepts.length} checkedCount={checkedCount} />
       <FilterButton isDark={isDark} setFilter={setFilter} filter={filter} setChecked={setChecked} />
        </div>
          <ProgrBar isDark={isDark} conceptNum={concepts.length} checkedCount={checkedCount} />
        </div>
        <div className="flex justify-center p-6">
        <Card darkMode={isDark} filter={filter} concepts={concepts} checked={checked} setChecked={setChecked} />
        </div>
      </div>
    )
  }
      

export default ReactCon

















{
/*const checkedCount = Object.values(checked).filter(Boolean).length
 const progressPercent = concepts.length === 0 
  ? 0 
  : (checkedCount / concepts.length) * 100;*/

  /*const toggledCard = (id) => {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
     }))
   }*/

  /*const resetAll = () => {
    setChecked({})
  }*/

  /*const visibleConcepts = concepts.filter((card) => {
    if (filter === "learned") return checked[card.id];
    if (filter === "notYet") return !checked[card.id];
    return true; 
  })*/

 /*const filterButton = ({ label, value }) => {
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
*/}

 {/*v className="bg-gray-900 min-h-screen">
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
</header>*/}

{/*
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
)*/}


  {/*
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

         *iv className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>*/}