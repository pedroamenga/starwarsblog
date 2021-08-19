import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";
import { Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export const CardVehiculos = props => {
	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://c0.klipartz.com/pngpicture/28/139/gratis-png-star-wars-wars-halcon-ilustracion-yoda-millennium-falcon-star-wars-iconos-de-computadora-estrella-de-la-muerte.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.obj.name}</h5>
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
	name: PropsTypes.string,
	person: PropsTypes.string,
	hair_color: propTypes.string,
	eye_color: propTypes.string,
	obj: propTypes.string
};
