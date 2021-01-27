import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home/Home";
import "./App.css";
import Faker from "./Faker";

export default function App() {
	const [username, setUsername] = useState("");
	console.log(username);

	const setTheUsername = (username) => {
		setUsername(username);
	};

	return (
		<Router>
			<div>
				<Switch>
					<Route path='/' exact>
						<Login setTheUsername={setTheUsername} />
					</Route>
					<Route path='/home'>
						<Home name={username} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
