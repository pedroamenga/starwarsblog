import React, { useContext } from "react";
import { CardPersona } from "../component/cardPersona";
import { Context } from "../store/appContext";

export const Persona = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1>Personajes</h1>;
			<div className="row">
				{store.people.map((persona, posicion) => {
					return <CardPersona key={posicion} nombre={persona.name} person={url} />;
				})}
			</div>
		</>
	);
};
