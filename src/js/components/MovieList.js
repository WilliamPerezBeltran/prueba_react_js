import React, { Component } from "react";
import { Card, CardTitle, CardMedia } from "material-ui";
import MovieCard from "./MovieCard";

const list = [
	{
		id: "a",
		firstname: "Robin",
		lastname: "Wieruch",
		year: 1988
	},
	{
		id: "a",
		firstname: "Robin",
		lastname: "Wieruch",
		year: 1988
	},
	{
		id: "a",
		firstname: "Robin",
		lastname: "Wieruch",
		year: 1988
	},
	{
		id: "a",
		firstname: "Robin",
		lastname: "Wieruch",
		year: 1988
	},
	{
		id: "a",
		firstname: "Robin",
		lastname: "Wieruch",
		year: 1988
	},
	{
		id: "a",
		firstname: "Robin",
		lastname: "Wieruch",
		year: 1988
	},
	{
		id: "a",
		firstname: "Robin",
		lastname: "Wieruch",
		year: 1988
	},
	{
		id: "b",
		firstname: "Dave",
		lastname: "Davidds",
		year: 1990
	}
];

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// open: false
		};
	}

	// onOpenModal = () => {
	//   this.setState({ open: true });
	// };
	render() {
		return (
			<div>
				{list.map(item => (
					<div>{MovieCard}</div>
				))}
			</div>
		);
	}
}

export default MovieList;
