import React from "react";
import { CardPersona } from "../component/cardPersona";
export const Persona = () => {
	return (
		<>
			<h1>Estamos en Detalle de personajes</h1>;
			<div className="row">
				<CardPersona />
				<CardPersona />
				<CardPersona />
			</div>
		</>
	);
};
