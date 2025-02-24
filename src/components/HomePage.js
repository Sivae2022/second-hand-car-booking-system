
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tesla from "../assets/tesla.jpg";
import bmw from "../assets/bmw.jpg";
import audi from "../assets/audi.jpg";
import ford from "../assets/ford.jpg";
import chevrolet from "../assets/chevorlet.jpg";
import tata from "../assets/Harrier_Camo_1200x768.webp";
import volkswagen from "../assets/wolkswsagen.webp";
import mercedes from "../assets/mrecedes.jpg";
import honda from "../assets/honda.jpg";
import toyota from "../assets/toyota.jpg";
import nissan from "../assets/nissan.jpg";
import jaguar from "../assets/jaguar.jpg";
import porsche from "../assets/porche.jpg";
import lamborghini from "../assets/lamborghini.jpg";

import "./HomePage.css"; 
import { auth } from "./firebase";

const cars = [
  { id: 1, name: "Tesla Model S", model: "2023", price: "$85,000", image: tesla,stock:"4" },
  { id: 2, name: "BMW M3", model: "2022", price: "$70,000", image: bmw ,stock:"2"},
  { id: 3, name: "Audi R8", model: "2023", price: "$150,000", image: audi ,stock:"3"},
  { id: 4, name: "Ford Mustang", model: "2023", price: "$55,000", image: ford ,stock:"6"},
  { id: 5, name: "Chevrolet Camaro", model: "2022", price: "$50,000", image: chevrolet ,stock:"7"},
  { id: 6, name: "Tata Curv", model: "2023", price: "$250,000", image: tata ,stock:"11"},
  { id: 7, name: "Volkswagen 488", model: "2022", price: "$300,000", image: volkswagen,stock:"9" },
  { id: 8, name: "Mercedes-Benz C-Class", model: "2023", price: "$65,000", image: mercedes ,stock:"1"},
  { id: 9, name: "Honda Civic", model: "2022", price: "$25,000", image: honda ,stock:"1" },
  { id: 10, name: "Toyota Supra", model: "2023", price: "$55,000", image: toyota ,stock:"8"},
  { id: 11, name: "Nissan GT-R", model: "2022", price: "$115,000", image: nissan ,stock:"2"},
  { id: 12, name: "Jaguar F-Type", model: "2023", price: "$90,000", image: jaguar ,stock:"3"},
  { id: 13, name: "Porsche 911", model: "2023", price: "$120,000", image: porsche ,stock:"2"},
  { id: 14, name: "Lamborghini Huracan", model: "2023", price: "$250,000", image: lamborghini,stock:"1" },
  { id: 15, name: "Ferrari F8", model: "2023", price: "$280,000", image: volkswagen ,stock:"5"},
];

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Car Rental</div>
        <div>
          {user ? (
            <>
              <Link to="/profile" className="nav-link">Profile</Link>
              <button className="nav-link logout-btn" onClick={() => auth.signOut()}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          )}
        </div>
      </nav>

      {/* Car Listings */}
      <div className="container">
        <h1 className="hea">Available Cars</h1>
        <div className="car-grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={car.name} className="car-image"/>
              <h2>{car.name}</h2>
              <p>Model: {car.model}</p>
              <p><strong>Price: {car.price}</strong></p>
              <p>Stock: {car.stock > 0 ? car.stock : "Sold Out"}</p>
              <Link to={`/car-details/${car.id}`} className="details-btn">See Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
