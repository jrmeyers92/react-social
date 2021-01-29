import React, { useState, createContext } from "react";

export const MessagesContext = createContext();

export const MessagesProvider = (props) => {
	const [messages, setMessages] = useState([
		{
			GroupName: "Work Chat",
			messages: [
				{
					message: "When's the planning and purchasing dashboard due again?",
					from: "David",
				},
				{
					message: "Thursday AM. How's it coming along?",
					from: "Trish",
				},
				{
					message:
						"Good, I'm just having trouble with the export. It keeps defaulting to a CSV",
					from: "David",
				},
				{
					message:
						"Have you tried chaning opning the CSV ans chaning data type",
					from: "Barb",
				},
			],
		},
		{
			GroupName: "Family",
			messages: [
				{
					message: "Hey Dad, Want to go camping this weekend",
					from: "me",
				},
				{
					message: "Woah, i'm no invited?",
					from: "Sally",
				},
				{
					message:
						"Sorry Sal, you kinda do live on the other side of the country though..",
					from: "me",
				},
				{
					message: "Where are you thinking?",
					from: "Dad",
				},
				{
					message: "Kenosha Pass maybe?",
					from: "me",
				},
				{
					message: "Cool, chat about it later?",
					from: "Dad",
				},
			],
		},
		{
			GroupName: "Jeremy",
			messages: [
				{
					message: "Hey dude, are you playing pickup tonight?",
					from: "Jeremy",
				},
			],
		},
	]);

	return (
		<MessagesContext.Provider value={messages}>
			{props.children}
		</MessagesContext.Provider>
	);
};
