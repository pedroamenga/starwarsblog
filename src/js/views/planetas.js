import React, { useContext } from "react";
import { Planetas } from "../component/planetas";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";

export const Planetas = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1>Planetas</h1>;
			<div className="row">
				{store.planetas.map((planetas, posicion) => {
					return <Planetas objt={planetas} key={posicion} />;
				})}
			</div>
		</>
	);
};
