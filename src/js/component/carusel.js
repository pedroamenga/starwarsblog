import React from "react";
import fotosper from "../../img/persojanes.jpg";
import fotosveh from "../../img/vehicles.jpg";
import fotospla from "../../img/planetas.jpg";

import { Link } from "react-router-dom";

export const Carusel = () => {
	return (
		<>
			<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					/>
				</div>
				<div className="carousel-inner" />
				<div className="carousel-item active">
					<Link to="persona">
						<img src={fotosper} className="d-block w-100" alt="personajes" />
					</Link>
				</div>
				<div className="carousel-item">
					<Link to="vehiculos">
						<img src={fotosveh} className="d-block w-100" alt="vehiculos" />
					</Link>
				</div>
				<div className="carousel-item">
					<Link to="planetas">
						<img src={fotospla} className="d-block w-100" alt="planetas" />
					</Link>
				</div>
			</div>
			
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Next</span>
			</button>
		</>
	);
};
