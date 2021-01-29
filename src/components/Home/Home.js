import React from "react";
import Layout from "../../Shared/Layout";
// import Comments from "./Comments";
import Messages from "./Messages";
import { MessagesProvider } from "./MessagesContext";
import Accordian from "./Accordian";

const Home = (props) => {
	return (
		<div>
			<Layout name={props.name} />
			{/* <Comments /> */}
			<MessagesProvider>
				<Messages />
			</MessagesProvider>
			<Accordian />
		</div>
	);
};

export default Home;
