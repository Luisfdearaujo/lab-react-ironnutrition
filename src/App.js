import "./App.css";
import foodsJSN from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { useState } from "react";
import Search from "./components/Search";

function App() {
	const [allFoods, setAllFoods] = useState(foodsJSN);
	const [foods, setFoods] = useState(foodsJSN);

	const addNewFood = (newFood) => {
		const updatedFoods = [newFood, ...foods];
		setFoods(updatedFoods);
	};

	// const deleteFood = (foodId) => {
  // const deleteFood = (foodName) =>
  
	// };


	const filterFoodList = (char) => {
		let filteredFood;

		filteredFood = allFoods.filter((oneFood) => {
			return oneFood.name.toLowerCase().startsWith(char.toLowerCase());
		});

		setFoods(filteredFood);
	};



	return (
		<div className="App">
			<Search filterFoodList={filterFoodList} />
			<AddFoodForm addNewFood={addNewFood} />
			{foods.map((food) => {
				return (
					<>
						<FoodBox foodObj={food} />
					</>
				);
			})}
		</div>
	);
}
export default App;
