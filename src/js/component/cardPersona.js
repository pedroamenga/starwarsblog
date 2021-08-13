import React from "react";

export const CardPersona = () => {
	return (
		<>
			<div className="row cards justify-content-center">
				<div className="card" style={{ width: "20rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Personaje</h5>
						<p className="card-text">Descripcion de los personajes va aqui</p>
						<a href="#" className="btn btn-primary">
							More info
						</a>
						<button>
							<i className="far fa-star" style={{ background: "yellow" }} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
