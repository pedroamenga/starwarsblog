import React, { useContext } from "react";
import { cardvehiculos } from "../component/cardvehiculos";
import { Context } from "../store/appContext";

export const Vehiculos = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1>Planetas</h1>;
			<div className="row">
				{store.people.map((cardvehiculos, posicion) => {
					return <Vehiculos obj={cardvehiculos} key={posicion} />;
				})}
			</div>
		</>
	);
};
