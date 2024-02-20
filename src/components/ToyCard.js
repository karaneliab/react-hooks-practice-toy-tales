import React from "react";
// import { useState,useEffect } from "react";

function ToyCard({toys,onDelete,onAddition}) {
  // const[likes,setLikes]=useState('likes') 
  const handleDelete = () => {
    onDelete(toys.id)
  }
  const handleLikesAdd = () => {
    onAddition(toys.id, toys.likes); // Pass the current number of likes as well
  };

  const handleAdd = async (newToy) => {
    newToy.likes = newToy.likes || 0; // Ensure the newToy has a default likes value
    // The rest of your handleAdd function...
  }
  return (
    <div className="card">
      
      <h2>{toys.name}</h2>
      <img
        src={toys.image}
        alt={toys.name}
        className="toy-avatar"
      />
      <p>{toys.likes} Likes </p>
      <button className="like-btn" onClick={handleLikesAdd}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;



