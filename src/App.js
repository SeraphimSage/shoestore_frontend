import React from "react";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shoes: [],
		};
	}

	componentDidMount() {
		fetch("http://localhost:8000/api/shoe/")
			.then((res) => res.json())
			.then((data) => this.setState({ shoes: data }));
	}
	render() {
		return (
			<div>
				<h2>
					<u>Shoes currently available:</u>
				</h2>
				<ul>
					{this.state.shoes.map((s) => (
						<ul>
							<li>Size: {s.size}</li>
							<li>Brand Name: {s.brand_name}</li>
							<li>Manufacturer: {s.manufacturer}</li>
							<li>Color: {s.color}</li>
							<li>Material: {s.material}</li>
							<li>Shoe Type: {s.shoe_type}</li>
							<li>Fasten Type: {s.fasten_type}</li>
							<br />
						</ul>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
