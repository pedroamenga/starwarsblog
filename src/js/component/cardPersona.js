import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";
import { Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export const CardPersona = props => {
	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text">{props.person} </p>
					<p>{props.hair_color} </p>
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

CardPersona.propTypes = {
	nombre: PropsTypes.string,
	person: PropsTypes.string,
	hair_color: propTypes.string
};
