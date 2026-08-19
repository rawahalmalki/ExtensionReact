function filterButtons({ isDark, setFilter, filter }) {


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

  return (
    <div className={isDark ? "flex flex-wrap justify-between items-center bg-gray-900 gap-4 p-4" : "flex flex-wrap justify-between items-center bg-white gap-4 p-4"}>
      <div className="flex flex-row flex-wrap gap-2">
        {filterButton({ label: "All", value: "all" })}
        {filterButton({ label: "Active", value: "active" })}
        {filterButton({ label: "Inactive", value: "notActive" })}
      </div>
    </div>
  )
}

export default filterButtons