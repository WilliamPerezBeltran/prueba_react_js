import React, { Component } from "react";

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
				<div>
						<div key={item.id}>
							<div>{item.id}</div>
							<div>{item.firstname}</div>
							<div>{item.lastname}</div>
							<div>{item.year}</div>
						</div>
				</div>
					))}
			</div>
		);
	}
}

export default MovieList;