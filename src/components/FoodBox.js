import { Card, Col, Divider, Button } from "antd";

function FoodBox({ foodObj, deleteFood }) {
	return (
		<Divider>
			<Col>
				<Card
					title={foodObj.name}
					style={{ width: 230, height: 300, margin: 10 }}
				>
					<img src={foodObj.image} height={60} alt="food-img" />
					<p>Calories: {foodObj.calories}</p>
					<p>Servings: {foodObj.servings}</p>
					<p>
						<b>Total Calories: {foodObj.calories * foodObj.servings}</b>
						kcal
					</p>
					<Button
						type="primary"
						onclick={() => {
							deleteFood(foodObj.name);
						}}
					>
						{" "}
						Delete{" "}
					</Button>
				</Card>
			</Col>
		</Divider>
	);
}

export default FoodBox;
