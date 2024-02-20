// import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import {useState,useEffect} from  'react'

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  const[toys,setToys]= useState([])

  useEffect (() => {
      fetchData()
  },[])
   
    const fetchData = async () => {
    try{
      const url = 'http://localhost:3001/toys'
      const response = await fetch(url)
      const data = await response.json()
      setToys(data)
    }catch(error){
        console.log('failed to fetch', error.message)
    }
  
    }
    // posting
  const handleAdd = async (newToy) => {
    try{
      const response = await fetch(' http://localhost:3001/toys',{
         method:'POST',
         headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
         },
         body: JSON.stringify(newToy)
      });
      if(response.ok){
          // re-render
          fetchData();
      } else{
          console.log('error occured while fetching data')
      }
     
    }catch(error){
      console.log('then is an error')
    }
  }

  // Deleting
  const handleDelete = async (id) => {
    try{
      const isConfirmed = window.confirm("Are you sure you want to remove this toy?")

      if(!isConfirmed) {
        return ;
    }
    const response = await fetch (`http://localhost:3001/toys/${id}`,{
      method: 'DELETE'
       });
       if(response.ok){
           setToys(toys.filter((toy) => toy.id !==id ))               
       }else {
            console.log('Error deleting toy ' , response.statusText)
       }
   }catch(error) {
     console.error("error deleting toy " , error)
   }
  }
  // Patch Request
  const handleLike = async (id, currentLikes) => {
    try {
      const updatedLikes = { likes: currentLikes + 1 }; // Increment likes by 1
      const response = await fetch(`http://localhost:3001/toys/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(updatedLikes), // Send the updated likes
      });
      if (response.ok) {
        fetchData(); // Re-fetch the data to update UI
      } else {
        console.log('Error occurred while updating likes');
      }
    } catch (error) {
      console.log('There is an error', error.message);
    }
  };


  return (
    <>
      <Header />
      {showForm ? <ToyForm  onAdd={handleAdd} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDelete} onAddition={handleLike}/>
    </>
  );
}

export default App;
