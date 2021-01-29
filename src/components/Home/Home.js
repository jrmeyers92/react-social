import React from "react";
import Layout from "../../Shared/Layout";
import Comments from "./Comments";
import Messages from "./Messages";
import { MessagesProvider } from "./MessagesContext";

const Home = (props) => {
	const messages = [
		{
			to: "Work Chat",
			messageHistory: [
				{
					from: "David",
					Message:
						"When was the deadline for the planning and purchasing report again?",
				},
			],
		},
	];

	return (
		<div>
			<Layout name={props.name} />
			{/* <Comments /> */}
			<MessagesProvider>
				<Messages />
			</MessagesProvider>
		</div>
	);
};

export default Home;
