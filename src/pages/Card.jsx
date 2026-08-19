function Card({ darkMode, checked, setChecked, filter, concepts = [] }) {

  const toggledCard = (id) => {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const visibleConcepts = concepts.filter((card) => {
    if (filter === "active") return checked[card.id];
    if (filter === "notActive") return !checked[card.id];
    return true;
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {visibleConcepts.map((card) => {
        const isChecked = !!checked[card.id];

        if (darkMode) {
          return (
            <div
              key={card.id}
              className={`h-50 flex-1 min-w-[340px] max-w-[400px] relative rounded-xl border p-4 transition-colors duration-200 ${
                isChecked
                  ? "bg-green-500/15 border-green-500/60"
                  : "bg-gray-900 border-gray-700"
              }`}
            >
              <div className="flex flex-row items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src={card.icon} alt={card.title} className="w-10 h-10" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mt-1">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between mt-10">
                <button
                  className="h-10 px-4 rounded-full border border-gray-600 text-sm font-medium whitespace-nowrap flex-shrink-0 text-white hover:bg-gray-800 transition-colors"
                >
                  Remove
                </button>

                <label className="relative flex items-center group flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggledCard(card.id)}
                    className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md cursor-pointer"
                  />
                  <span
                    className="w-11 h-6 flex items-center flex-shrink-0 p-1 
                               bg-gray-700 rounded-full duration-300 ease-in-out 
                               peer-checked:bg-green-400 
                               after:w-4 after:h-4 after:bg-white after:rounded-full 
                               after:shadow-md after:duration-300 
                               peer-checked:after:translate-x-5 
                               group-hover:after:translate-x-0.5"
                  ></span>
                </label>
              </div>
            </div>
          )
        }

        return (
          <div
            key={card.id}
            className={`h-50 flex-1 min-w-[340px] max-w-[400px] relative rounded-xl border p-4 transition-colors duration-200 ${
              isChecked
                ? "bg-green-500/15 border-green-500/60"
                : "bg-white border-gray-300"
            }`}
          >
            <div className="flex flex-row items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src={card.icon} alt={card.title} className="w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                  {card.description}
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between mt-10">
              <button
                className="h-10 px-4 rounded-full border border-gray-300 text-sm font-medium whitespace-nowrap flex-shrink-0 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Remove
              </button>

              <label className="relative flex items-center group flex-shrink-0">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggledCard(card.id)}
                  className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md cursor-pointer"
                />
                <span
                  className="w-11 h-6 flex items-center flex-shrink-0 p-1 
                             bg-gray-300 rounded-full duration-300 ease-in-out 
                             peer-checked:bg-green-400 
                             after:w-4 after:h-4 after:bg-white after:rounded-full 
                             after:shadow-md after:duration-300 
                             peer-checked:after:translate-x-5 
                             group-hover:after:translate-x-0.5"
                ></span>
              </label>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card