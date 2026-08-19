function ProgrBar({ conceptNum, checkedCount, isDark }) { //chekedCount.leanth
    
    const progressPercent = conceptNum === 0 
  ? 0 
  : (checkedCount / conceptNum) * 100;

   
  return (
    <div className={isDark ? "bg-gray-800 rounded-full h-2.5" : "bg-gray-200 rounded-full h-2.5"}>
      <div
        className={ "bg-orange-500  h-2.5 rounded-full duration-200 transition-all"}
        style={{ width: `${progressPercent}%` }}
      ></div>
    </div>
  );
}

export default ProgrBar
