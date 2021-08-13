import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<div className="container-fluid">
				<img
					src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0011/8627/brand.gif?itok=MaaMsJvK"
                    style={{ width: "120px" }}
				    />
				<div className="row dropdown">
					<button
						className="btn btn-primary dropdown-toggle ml-3"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						<i className="far fa-star" />
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
