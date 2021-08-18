import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Planetas = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title"></h5>
					<p className="card-text">
						{store.people.map((Planetas, posicion) => {
							return (
								<p key={posicion}>
									{" "}
									{planetas.uid} {planetas.name}
								</p>
							);
						})}
					</p>
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