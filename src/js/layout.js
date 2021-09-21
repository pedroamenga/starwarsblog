import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Planetas } from "./component/planetas";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Vehiculos } from "./views/vehiculos";
import { Persona } from "./views/persona";
import { Personaje } from "./views/personaje";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/persona">
							<Persona />
						</Route>
						<Route exact path="/personaje/:idpersona">
							<Personaje />
						</Route>
						<Route exact path="/planetas">
							<Planetas />
						</Route>
						<Route exact path="/vehiculos">
							<Vehiculos />
						</Route>
						<Route>
							<h1>404 NOT FOUND!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
