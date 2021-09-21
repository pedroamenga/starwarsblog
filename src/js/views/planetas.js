import React, { useContext } from "react";
import { Planetas } from "../component/planetas";
import { Context } from "../store/appContext";

export const Planetas = () => {
	const { store } = useContext(Context);

	return (
		<>
			<h1>Planetas</h1>
			<h2>{store.planetas.name}</h2>
			<div className="row">
				{store.planetas.map((planetas, posicion) => {
					return <Planetas objt={planetas} key={posicion} />;
				})}
			</div>
		</>
	);
};
