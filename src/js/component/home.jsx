import React from "react";

//include images into your bundle
import {Light} from "./Light/Light";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<Light />
		</div>
	);
};

export default Home;
