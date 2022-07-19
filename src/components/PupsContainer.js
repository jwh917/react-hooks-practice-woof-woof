import React from "react";
import PupsInfo from "./PupsInfo";


function PupsContainer({shownPup, pups, editPupInfo}) {


  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <PupsInfo shownPup={shownPup} pups={pups} editPupInfo={editPupInfo}/>
    </div>
  );
}

export default PupsContainer;