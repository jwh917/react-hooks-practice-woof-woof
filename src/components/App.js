import React, {useState, useEffect} from "react";
import FilterButton from "./FilterButton";
import PupsBar from "./PupsBar";
import PupsContainer from "./PupsContainer";


function App() {
  const [pups , setPups] = useState([])

  const [shownPup , setShownPup] = useState("")

  const [filterOnOff, setFilterOnOff] = useState(false)


  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then((puppsData) => setPups(puppsData));
  }, []);


  function showPupInfo(event){
    setShownPup(event.target.innerHTML)
  }

  function filterPups(){
    setFilterOnOff((prevState) => !prevState)
  }

  function editPupInfo(currPup){
    const updatedPup = pups.map((pup) => {
      if(pup.id === currPup.id)
      pup.isGoodDog = currPup.isGoodDog
      return pup
    }) 
    setPups(updatedPup)

  }


  return (
    <div className="App">
      <FilterButton filterOnOff={filterOnOff} filterPups={filterPups}/>
      <PupsBar pups={pups} showPupInfo={showPupInfo} filterOnOff={filterOnOff}/>
      <PupsContainer shownPup={shownPup} pups={pups} editPupInfo={editPupInfo}/>
    </div>
  );
}

export default App;
