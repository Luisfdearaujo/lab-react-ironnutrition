import { Input } from "antd";
import { useState } from "react";

function AddFoodForm({ addNewFood }) {
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [calories, setCalories] = useState(0);
	const [servings, setServings] = useState(0);

	const handleName = (event) => setName(event.target.value);
	const handleImage = (event) => setImage(event.target.value);
	const handleCalories = (event) => setCalories(event.target.value);
	const handleServings = (event) => setServings(event.target.value);

	const handleSubmit = (event) => {
		//Prevent the page reload(default behaviour of the browser)
		event.preventDefault();

		//Get the data from the state/inputs
		const newFood = {
			name: name,
			image: image,
			calories: calories,
			servings: servings,
		};
		//Add the food to the list -> calling the function from App.js
		addNewFood(newFood);

		//console.log(`newMovie`, newMovie);
		//Clear Inputs
		setName("");
		setImage("");
		setCalories();
		setServings();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Name</label>
			<Input value={name} type="text" onChange={handleName} />

			<label>Image</label>
			<Input value={image} type="text" onChange={handleImage} />

			<label>Calories</label>
			<Input value={calories} type="number" onChange={handleCalories} />

			<label>Servings</label>
			<Input value={servings} type="number" onChange={handleServings} />
			<button type="submit">Create</button>
		</form>
	);
}

export default AddFoodForm;
