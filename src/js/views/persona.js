import React, { useContext, useEffect } from "react";
import { CardPersona } from "../component/cardPersona";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Persona = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getCharacter(theid);
	});

	return (
		<>
			<h1>{store.character.name}</h1>;
			<div className="row">
				{store.people.map((persona, posicion) => {
					return <CardPersona obj={persona} key={posicion} />;
				})}
			</div>
		</>
	);
};
