import React from "react";
const faker = require("faker");

const Comments = () => {
	let users = [];
	const generateUsers = async () => {
		for (let i = 0; i < 20; i++) {
			let firstname = faker.name.firstName();
			let lastName = faker.name.lastName();
			let name = `${firstname} ${lastName}`;
			let img = faker.image.people();
			let sentence = faker.lorem.sentence();
			let obj = { name: name, sentence: sentence, img: img };
			users.push(obj);
		}
	};

	generateUsers();

	if (users) {
		return (
			<div>
				{users.map((user) => {
					return (
						<div>
							<h2>{user.name}</h2>
							<p>{user.sentence}</p>
							<img src={user.img} alt={user.name} />
						</div>
					);
				})}
			</div>
		);
	}
};

export default Comments;
