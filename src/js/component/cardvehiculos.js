import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropsTypes } from "prop-types";
import { Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export const CardVehiculos = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<img src="" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title"></h5>
					<div className="card-buttons">
						<a href="#" className="btn btn-primary">
							Más Información
						</a>
						<button style={{ background: "darkred" }}>
							<i className="far fa-heart" style={{ color: "red" }}></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
