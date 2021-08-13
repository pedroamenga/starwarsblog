import React from "react"

<>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner"/>
    <div className="carousel-item active">
      <img src="../../workspace/starwarsblog/src/img/persojanes.jpg" className="d-block w-100" alt="personajes"/>
    </div>
    <div className="carousel-item">
      <img src="../../workspace/starwarsblog/src/img/vehicles.jpg" className="d-block w-100" alt="vehiculos"/>
    </div>
    <div className="carousel-item">
      <img src="../../workspace/starwarsblog/src/img/planetas.jpg" className="d-block w-100" alt="planetas"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</>