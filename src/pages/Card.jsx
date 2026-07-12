function Card({ concept, checked, onToggle, darkMode }) {
  return (
    <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-4 p-4">
      {concept.map((card) => {
        const isChecked = !!checked[card.id];
        const IconComponent = card.icon;

        if (darkMode) {
          return (
            <div
              key={card.id}
              className={`h-60 flex-1 min-w-[220px] max-w-[280px] relative rounded-xl border p-4 transition-colors duration-200 ${
                isChecked
                  ? "bg-green-500/15 border-green-500/60"
                  : "bg-gray-900 border-gray-700"
              }`}
            >
              <div className={`w-10 h-10 ${card.iconBg} ${card.iconColor} rounded-lg flex items-center justify-center mb-3`}>
                <IconComponent size={20} />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {card.description}
              </p>

              <div className=" flex flex-row items-center gap-2 mt-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggle(card.id)}
                 className="w-4 h-4 accent-green-700 cursor-pointer"
              />
              <p className={`text-sm ${isChecked ? 'text-green-600' : 'text-gray-600'}`}>
                 Learned
               </p>
              </div>
            </div>
          )
        }

        return (
          <div
            key={card.id}
            className={`h-60 flex-1 min-w-[220px] max-w-[280px] relative rounded-xl border p-4 transition-colors duration-200 ${
              isChecked
                ? "bg-green-500/15 border-green-500/60"
                : "bg-white border-gray-300"
            }`}
          >
            <div className={`w-10 h-10 ${card.iconBg} ${card.iconColor} rounded-lg flex items-center justify-center mb-3`}>
              <IconComponent size={20} />
            </div>
            <h3 className="mb-2 text-base font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {card.description}
            </p>

            <div className="left-3 flex flex-row items-center gap-2 mt-3">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onToggle(card.id)}
                className="w-4 h-4 accent-green-700 cursor-pointer"
              />
              <p className={`text-sm ${isChecked ? 'text-green-600' : 'text-gray-600'}`}>
                 Learned
               </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card;