import React from "react";

function PupsBar({pups, showPupInfo, filterOnOff}) {

  const filteredBar = pups.filter((pup) => {
    if(filterOnOff === true && pup.isGoodDog === true){
      return pup
    }

    if(filterOnOff === false){
      return pup
    }
    
  })


  const displayedBar = filteredBar.map((pup) => {
    return (
      <span key={pup.id} onClick={showPupInfo}>{pup.name}</span>
    )
    
  })



  return (
    <div id="dog-bar">
      {displayedBar}
    </div>
  );
}

export default PupsBar;