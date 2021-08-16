import React from "react";
import { Context } from "../store/appContext";

export const CardPersona = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">
						{store.people.map((persona, posicion) => {
							return (
								<h4 key={posicion}>
									{" "}
									Usuario ID {persona.uid} {poersona.name}
								</h4>
							);
						})}
					</h5>
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
