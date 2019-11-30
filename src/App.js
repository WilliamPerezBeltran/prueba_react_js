import React, { Component } from "react";
import Movies from "./js/components/Movies";
import Sidenav from "./js/components/Sidenav";

class App extends Component {
	render() {
		return (
			<div>
				<Sidenav />
				<Movies />
			</div>
		);
	}
}

export default App;
