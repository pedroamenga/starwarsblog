import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import { useParams } from "react-router-dom";

export const CardPersona = props => {
	const { store, actions } = useContext(Context);
    const params = useParams();
	return (
		<>
        <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{props.obj.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body row">
				<p className="col">Altura: {store.character.height}</p>
				<p className="col">Peso: {store.character.mass}</p>
				<p className="col">Pelo: {store.character.hair_color}</p>
				<p className="col">Piel: {store.character.skin_color}</p>
				<p className="col">Ojos: {store.character.eye_color}</p>
				<p className="col">Genero: {store.character.gender}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
			<div className="card" style={{ width: "18rem" }}>
				<div className="card-body">
					<h5 className="card-title row">{props.obj.name}</h5>
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
	obj: propTypes.string,
    gender: propTypes.string,
    mass: propTypes.string,
    height: propTypes.string
};
