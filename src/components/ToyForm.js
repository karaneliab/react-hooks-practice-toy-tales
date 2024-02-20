import React from "react";
import { useState } from "react";

function ToyForm({onAdd}) {
const[newToy,setNewToy] = useState({
  name:'',
  image:'',
  likes:''
});

const handleInputChange = (event) => {
  const {name, value} = event.target;
  //object property shorthand syntax :  [name]: value
  // dynamically sets a property on the object 
  setNewToy({...newToy, [name]: value})
}
const handleSubmit = (event) => {
  event.preventDefault();
  onAdd(newToy);
  // resetting the input box
  setNewToy({name: '' ,image: ''  })
}




  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
