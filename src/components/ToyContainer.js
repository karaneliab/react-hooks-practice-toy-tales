import React from "react";
import ToyCard from "./ToyCard";

// import ToyForm from "./ToyForm";

function ToyContainer({toys,onDelete,onAddition}) {



  return (
    <div id="toy-collection">
      {toys.map(toy => (
      <ToyCard key={toy.id} toys={toy} onDelete={onDelete} onAddition={onAddition}/>
     
      ))}
  
      </div>
    
  );
}

export default ToyContainer;
