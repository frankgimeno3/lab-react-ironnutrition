// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 4
function AddFoodForm({createFood}) {
    // const {name, calories, image, servings }=food;
    const [name, setName] = useState("")
    const nameHandler = (e) =>setName(e.target.value);
    const [calories, setCalories] = useState("")
    const caloriesHandler = (e) =>setCalories(e.target.value);  
    const [image, setImage] = useState("")
    const imageHandler = (e) =>setImage(e.target.value);
    const [servings, setServings] = useState("")
    const servingsHandler = (e) =>setServings(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();
        let identificador = Math.round(Math.random() * 1000000000000000);
        createFood({name, calories, image, servings, _id: identificador});
        setName("");
        setCalories("");
        setImage("");
        setServings("");
    }

    const clickHandler = () => {
        console.log("click!!!!!!");

    }
  return (
    <form onSubmit={submitHandler} className="w-50 mx-auto mt-5">
      <Divider>Add Food Entry</Divider>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <Input value={name} type="text" className="form-control" onChange={nameHandler} />
    </div>

    <div className="mb-3">
        <label>Image</label>
        <Input value={image} type="text" className="form-control" onChange={imageHandler} />
    </div>

    <div className="mb-3">
        <label>Calories</label>
        <Input value={calories} type="number" className="form-control" onChange={caloriesHandler} />
    </div>

    <div className="mb-3">
        <label>Servings</label>
        <Input value={servings} type="number" className="form-control" onChange={servingsHandler} />
    </div>

      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
}


export default AddFoodForm;
