function LableSection({ isDark, conceptNum, checkedCount }) {
    return (    
      <div className="flex flex-col gap-1">
        <h1 className={isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-black"}>Extension Concepts</h1>
        <p className={isDark ? "text-gray-400 mb-4" : "text-gray-500 mb-4"}>
          {checkedCount} of {conceptNum} Learned
        </p>
      </div>
    )

  }



 export default LableSection

