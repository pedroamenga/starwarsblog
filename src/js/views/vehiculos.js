import React, { useContext } from "react";
import { Planetas } from "../component/planetas";
import { Context } from "../store/appContext";

export const Vehiculos = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1>Planetas</h1>;
			<div className="row">
				{store.people.map((Planetas, posicion) => {
					return <Planetas obj={Planetas} key={posicion} />;
				})}
			</div>
		</>
	);
};