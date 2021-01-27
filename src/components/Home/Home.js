import React from "react";
import Layout from "../../Shared/Layout";
import Comments from "./Comments";

const Home = (props) => {
	return (
		<div>
			<Layout name={props.name} />
			<Comments />
		</div>
	);
};

export default Home;
