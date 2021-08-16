import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<Link to="/">
					<img
						src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-4-logo-png-transparent.png"
						style={{ width: "120px" }}
					/>
				</Link>
				<ul className="nav align-items-center">
					<li className="nav-item">
						<Link to="persona" className="nav-link active" aria-current="page" href="#">
							Personajes
						</Link>
					</li>
					<li className="nav-item">
						<Link to="vehiculos">
							<a className="nav-link" href="#">
								Vehiculos
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="planetas">
							<a className="nav-link" href="#">
								Planetas
							</a>
						</Link>
					</li>
				</ul>
				<button
					className="navbar-toggler justify-content-between"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<div className="dropdown">
								<button
									className="btn btn-secondary dropdown-toggle"
									style={{ background: "darkorange" }}
									type="button"
									id="dropdownMenuButton2"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									<i className="far fa-heart" />
								</button>
								<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
									<li>
										<a className="dropdown-item active" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Separated link
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
