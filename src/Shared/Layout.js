import React from "react";
import Nav from "../Shared/Nav";

const Layout = (props) => {
	return (
		<div>
			<Nav name={props.name} />
			{props.children}
		</div>
	);
};

export default Layout;
