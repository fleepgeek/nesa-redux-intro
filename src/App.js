import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter.jsx";
import User from "./components/User.jsx";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Counter />
				<User />
			</div>
		);
	}
}

export default App;
