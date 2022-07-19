import React, { useState } from "react";


function PupsCard({pup, editPupInfo}) {

  const {name, image, isGoodDog} = pup

  const [goodDog, setGoodDog] = useState(isGoodDog)

  function handleGoodBad(){
    setGoodDog((prevState) => !prevState)

    const newDogBehavior = !goodDog

    fetch(`http://localhost:3001/pups/${pup.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          { 
            isGoodDog: newDogBehavior,
          }),
      })
        .then((r) => r.json())
        .then((newPupData) => editPupInfo(newPupData));
  }



  return (
    <div id="dog-info">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      {goodDog ? <button onClick={handleGoodBad}>Good Dog!</button> : <button onClick={handleGoodBad}>Bad Dog!</button>}
    </div>
  );
}

export default PupsCard;
