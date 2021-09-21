import React, { useContext, useEffect } from "react";
import { CardPersona } from "../component/cardPersona";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Persona = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			<h1 className="m-5">Personajes</h1>
			<div className="m-3"></div>
			<h1>{store.character.name}</h1>;
			<div className="row">
				{store.people.map((persona, posicion) => {
					return <CardPersona obj={persona} key={posicion} />;
				})}
			</div>
		</>
	);
};
