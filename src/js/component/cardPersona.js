import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link, useParams } from "react-router-dom";

export const CardPersona = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://www.pngkey.com/png/detail/0-6181_file-tsf-logo-png-star-wars-jedi-order.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.obj.name}</h5>
					<p>{props.hair_color} </p>
					<div className="card-buttons">
						<Link to={"/personaje/" + props.obj.uid} href="#" className="btn btn-primary">
							Más Información
						</Link>
						<button
							style={{ background: "darkred" }}
							onClick={() => {
								actions.addFavoritos(props.obj.name);
								console.log(store.favoritos);
							}}>
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
