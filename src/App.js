import './App.css';
import foods from "./foods.json";
import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchFood from "./components/SearchFood";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const createFood = (food) => {
    setFoodList([...foodList, food]);
  }
  const searchfood = (text) => {
    setFoodList(foodList.filter(food => food.name.toLowerCase().includes(text.toLowerCase())));
  }
  
  const deleteHandler = (idFood)=>{
    setFoodList(foodList.filter(foodbox => foodbox._id !== idFood)); //LIFT STATE UP
  }
  return (
    <div>
      <AddFoodForm createFood={createFood}/>
      <SearchFood filter={searchfood}/>

      {/* {foodList.map((food) => (
        <div key={food.name}>
          <p>{food.name}</p>
          <img src={food.image} width={100} alt={food.name} />
        </div>
      ))} */}
    
    <div className="row mt-5 mb-3 mb-sm-0 w-50 mx-auto">
      {foodList.map(food =>    <FoodBox food={food} deleteHandler={deleteHandler} key={food._id}/>)}
    </div>
    </div>
  );
}

export default App;
