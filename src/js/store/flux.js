const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],
			people: [],
			planetas: [],
			vehiculos: [],
			character: {},
			planet: {}
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			//PEOPLE = EL PERSONAJE 
			getPeople: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(result => {
						setStore({ people: result.results });
					})
					.catch(error => console.log("error", error));
			},
			//CHARACTER = DETALLES DEL PERSONAJE
			getCharacter: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ character: result.result.properties });
					})
					.catch(error => console.log("error", error));
			},
			//PLEANET = DETALLE DE LOS PLANETAS
			planet: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ planetas: result.result.properties });
					})
					.catch(error => console.log("error", error));
			},
			// PLANETAS
			getPlanet: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(result => {
						setStore({ planet: result.results });
					})
					.catch(error => console.log("error", error));
			},
			// VEHICULOS
			getVehiculos: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(result => {
						setStore({ vehiculos: result.results})
					})
					.catch(error => console.log("error", error));
			},
			//DETALLES DE LOS VEHICULOS
			vehiculos: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles" + uid)
					.then(response => response.json())
					.then(result =>{
						setStore({vehiculos: result.result.properties })
					})
					.catch(error => console.log("error", error));
			},

			addFavoritos: name => {
				const store = getStore();
				setStore({
					favoritos: [...store.favoritos, name]
				});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
