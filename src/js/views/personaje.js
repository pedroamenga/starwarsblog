import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import { useParams } from "react-router-dom";

export const Personaje = props => {
	const { store, actions } = useContext(Context);
	const { idpersona } = useParams();
	useEffect(() => {
		actions.getCharacter(2);
	});
	console.log(store.people[idpersona - 1]);
	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<div className="card-title">
					{" "}
					<h2>{store.people[idpersona - 1].name}</h2>
				</div>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="col">Altura: {store.character.height}</p>
					<p className="col">Peso: {store.character.mass}</p>
					<p className="col">Pelo: {store.character.hair_color}</p>
					<p className="col">Piel: {store.character.skin_color}</p>
					<p className="col">Ojos: {store.character.eye_color}</p>
					<p className="col">Genero: {store.character.gender}</p>
				</div>
			</div>
		</>
	);
};

Personaje.propTypes = {
	name: PropsTypes.string,
	person: PropsTypes.string,
	hair_color: propTypes.string,
	eye_color: propTypes.string,
	obj: propTypes.string,
	gender: propTypes.string,
	mass: propTypes.string,
	height: propTypes.string
};
