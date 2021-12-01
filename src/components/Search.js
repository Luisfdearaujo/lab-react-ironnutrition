import { useState } from "react";

function Search({ filterFoodList }) {
	const [word, setWord] = useState("");

	const handleSelect = (event) => {
		setWord(event.target.value);
		filterFoodList(event.target.value);
	};
	return (
		<div className="FilterFoods">
			<form value={word} onChange={handleSelect}>
				<input type="text" placeholder="Search.." name="search" />
			</form>
		</div>
	);
}

export default Search;
