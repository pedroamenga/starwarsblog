import React from "react";
import { CardPersona } from "../component/cardPersona";
import { Context } from "../store/appContext";

export const Persona = () => {
	return (
		<>
			<h1>Personajes</h1>;
			<div className="row">
				<CardPersona />
				<CardPersona />
				<CardPersona />
				<CardPersona />
				<CardPersona />
				<CardPersona />
				<CardPersona />
				<CardPersona />
				<CardPersona />
				<CardPersona />
			</div>
		</>
	);
};
