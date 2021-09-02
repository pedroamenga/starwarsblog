import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropsTypes } from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

export const Planetas = props => {
	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://www.logolynx.com/images/logolynx/f6/f6ebb69498fff47086479cda23104608.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.objt}</h5>
					<p className="card-text"></p>
					<div className="card-buttons">
						<a href="#" className="btn btn-primary">
							Más Información
						</a>
						<button>
							<i className="far fa-heart" style={{ color: "red" }}></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

Planetas.propTypes = {
	name: propTypes.string,
	objt: propTypes.string,
	planetas: propTypes.string
};
