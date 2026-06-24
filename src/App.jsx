import { useState } from "react";
import FoodForm from "./components/FoodForm";
import FoodList from "./components/FoodList";
import "./App.css";

function App() {
  const [foods, setFoods] = useState([]);

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const sum = 0;
  const totalCalories = foods.reduce((sum, food) => {
    sum + food.calories;
  }, 0);
  const totalProteins = foods.reduce((sum, food) => {
    sum + food.proteins;
  }, 0);
  return (
    <div>
      <h1>Macro Tracker</h1>
      <div>
        <h4>Calories: {totalCalories} kcal</h4>
        <h4>Proteins: {totalProteins}g</h4>
      </div>
      <FoodForm onAddFood={addFood}></FoodForm>
      <FoodList foods={foods}></FoodList>
    </div>
  );
}

export default App;
