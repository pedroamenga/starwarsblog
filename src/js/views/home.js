import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Carusel } from "../component/carusel";
import { Context } from "../store/appContext";

export const Home = () => {
	return (
		<>
			<div className="row">
				<Carusel />
			</div>
		</>
	);
};
