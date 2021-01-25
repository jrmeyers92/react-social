import React, { useState } from "react";
import Login from "./components/Login";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
	const [username, setUsername] = useState("");

	const setTheUsername = (username) => {
		setUsername(username);
	};

	return (
		<div className='App'>
			{/* <Login setTheUsername={setTheUsername} /> */}
			<Nav />
		</div>
	);
}

export default App;
