import React from "react";
import PupsCard from "./PupsCard";

function PupsInfo({shownPup, pups, editPupInfo}) {

  const displayedPups = pups.map((pup) => {
    if(pup.name === shownPup){
      return (
        <PupsCard
        key={pup.id}
        pup={pup}
        editPupInfo={editPupInfo}
        /> 
        )
      }
  })



  return (
    <div id="dog-info">
      {displayedPups}
    </div>
  );
}

export default PupsInfo;