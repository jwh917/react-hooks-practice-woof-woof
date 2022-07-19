import React from "react";

function FilterButton({filterOnOff, filterPups}) {


  return (
    <div id="filter-div">
      {filterOnOff ? <button id="good-dog-filter" onClick={filterPups}>Filter good dogs: ON</button> : <button id="good-dog-filter" onClick={filterPups}>Filter good dogs: OFF</button>}
    </div>
  );
}

export default FilterButton;