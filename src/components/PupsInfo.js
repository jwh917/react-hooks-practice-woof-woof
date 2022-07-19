import React from "react";
import PupsCard from "./PupsCard";

function PupsInfo({shownPup, pups, editPupInfo}) {

  function helpDisplay(pup, shownPup){
    if(pup.name === shownPup){
      return (
        <PupsCard
        key={pup.id}
        pup={pup}
        editPupInfo={editPupInfo}
        /> 
        )
      }
  }

  const displayedPups = pups.map((pup) => helpDisplay(pup, shownPup))


  return (
    <div id="dog-info">
      {displayedPups}
    </div>
  );
}

export default PupsInfo;