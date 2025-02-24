
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Style/carDetails.css";

import tesla from "../assets/tesla.jpg";
import bmw from "../assets/bmw.jpg";
import audi from "../assets/audi.jpg";
import ford from "../assets/ford.jpg";
import chevrolet from "../assets/chevorlet.jpg";
import tata from "../assets/Harrier_Camo_1200x768.webp";
import volkswagen from "../assets/wolkswsagen.webp";
import mercedes from "../assets/mrecedes.jpg";
import honda from "../assets/honda.jpg";
import hyundai from "../assets/pexels-mikebirdy-136872.jpg";
import jaguar from "../assets/jaguar.jpg";
import nissan from "../assets/nissan.jpg";
import toyota from "../assets/toyota.jpg";
import porsche from "../assets/porche.jpg";
import ferrari from "../assets/ferari.jpg";

const carsData = [
  { id: 1, name: "Tesla Model S", model: "2023", price: "$85,000", image: tesla, owner: "John Doe", phone: "9876543210", address: "Los Angeles, CA", mileage: "350 mi", fuel: "Electric", transmission: "Automatic", description: "A fully electric luxury sedan with a high-tech interior." },
          { id: 2, name: "BMW M3", model: "2022", price: "$70,000", image: bmw, owner: "Michael Smith", phone: "9876543211", address: "New York, NY", mileage: "22 mpg", fuel: "Petrol", transmission: "Automatic", description: "A high-performance sports sedan with German engineering." },
          { id: 3, name: "Audi R8", model: "2023", price: "$150,000", image: audi, owner: "Sophia Johnson", phone: "9876543212", address: "San Francisco, CA", mileage: "17 mpg", fuel: "Petrol", transmission: "Automatic", description: "A powerful V10 supercar with a sleek design." },
          { id: 4, name: "Ford Mustang", model: "2023", price: "$55,000", image: ford, owner: "David Brown", phone: "9876543213", address: "Austin, TX", mileage: "20 mpg", fuel: "Petrol", transmission: "Manual", description: "An iconic American muscle car with thrilling performance." },
          { id: 5, name: "Chevrolet Camaro", model: "2022", price: "$50,000", image: chevrolet, owner: "Emma Wilson", phone: "9876543214", address: "Chicago, IL", mileage: "19 mpg", fuel: "Petrol", transmission: "Automatic", description: "A bold and aggressive muscle car with great handling." },
          { id: 6, name: "Tata Curv", model: "2023", price: "$250,000", image: tata, owner: "Amit Sharma", phone: "9876543215", address: "Mumbai, India", mileage: "25 mpg", fuel: "Diesel", transmission: "Manual", description: "A futuristic SUV with cutting-edge features." },
          { id: 7, name: "Volkswagen 488", model: "2022", price: "$300,000", image: volkswagen, owner: "Liam Martinez", phone: "9876543216", address: "Berlin, Germany", mileage: "30 mpg", fuel: "Petrol", transmission: "Automatic", description: "A luxurious and high-performance German masterpiece." },
          { id: 8, name: "Mercedes-Benz C-Class", model: "2023", price: "$65,000", image: mercedes, owner: "Olivia Anderson", phone: "9876543217", address: "Paris, France", mileage: "28 mpg", fuel: "Petrol", transmission: "Automatic", description: "A classy and elegant sedan with top-notch features." },
          { id: 9, name: "Honda Civic", model: "2022", price: "$30,000", image: honda, owner: "Daniel Thomas", phone: "9876543218", address: "Tokyo, Japan", mileage: "32 mpg", fuel: "Petrol", transmission: "Automatic", description: "A reliable and fuel-efficient compact car." },
          { id: 10, name: "Hyundai Sonata", model: "2023", price: "$28,000", image: hyundai, owner: "Sophia White", phone: "9876543219", address: "Seoul, South Korea", mileage: "30 mpg", fuel: "Hybrid", transmission: "Automatic", description: "A modern midsize sedan with excellent fuel efficiency." },
          { id: 11, name: "Jaguar F-Type", model: "2023", price: "$95,000", image: jaguar, owner: "Chris Evans", phone: "9876543220", address: "London, UK", mileage: "18 mpg", fuel: "Petrol", transmission: "Automatic", description: "A sleek and powerful sports car with an aggressive stance." },
          { id: 12, name: "Nissan GT-R", model: "2023", price: "$120,000", image: nissan, owner: "James Taylor", phone: "9876543221", address: "Sydney, Australia", mileage: "20 mpg", fuel: "Petrol", transmission: "Automatic", description: "A legendary Japanese high-performance sports car." },
          { id: 13, name: "Toyota Supra", model: "2023", price: "$65,000", image: toyota, owner: "Alex Green", phone: "9876543222", address: "Mexico City, Mexico", mileage: "22 mpg", fuel: "Petrol", transmission: "Manual", description: "A sports car with a turbocharged engine and stylish looks." },
          { id: 14, name: "Porsche 911", model: "2023", price: "$130,000", image: porsche, owner: "Rachel Adams", phone: "9876543223", address: "Rome, Italy", mileage: "21 mpg", fuel: "Petrol", transmission: "Automatic", description: "A luxury sports car with timeless design and thrilling speed." },
          { id: 15, name: "Ferrari F8 Tributo", model: "2023", price: "$250,000", image: ferrari, owner: "Marco Rossi", phone: "9876543224", address: "Milan, Italy", mileage: "16 mpg", fuel: "Petrol", transmission: "Automatic", description: "A high-performance supercar with stunning aesthetics." },
];

const CarDetails = ({ updateStock }) => {
  const { id } = useParams();
  const [cars, setCars] = useState(carsData);

  const carIndex = cars.findIndex((c) => c.id === parseInt(id));

  if (carIndex === -1) {
    return <h2>Car Not Found</h2>;
  }

  const car = cars[carIndex];

  const handleBooking = () => {
    if (car.stock > 0) {
      const updatedCars = [...cars];
      updatedCars[carIndex] = { ...car, stock: car.stock - 1 };

      setCars(updatedCars);
      updateStock(car.id, car.stock - 1);
      
      toast.success("Car booked successfully!");
    } else {
      toast.error("Car is out of stock!");
    }
  };

  return (
    <div className="car-details-container">
      <img src={car.image} alt={car.name} className="car-image" />
      <h1>{car.name} ({car.model})</h1>
      <p><strong>Price:</strong> {car.price}</p>
      <p><strong>Mileage:</strong> {car.mileage}</p>
      <p><strong>Fuel Type:</strong> {car.fuel}</p>
      <p><strong>Transmission:</strong> {car.transmission}</p>
      <p><strong>Owner:</strong> {car.owner}</p>
      <p><strong>Phone:</strong> {car.phone}</p>
      <p><strong>Address:</strong> {car.address}</p>
      <p><strong>Description:</strong> {car.description}</p>
      <p><strong>Stock:</strong> {car.stock}</p>

      <button onClick={handleBooking} className="book-button" disabled={car.stock === 0}>
        {car.stock > 0 ? "Book Now" : "Out of Stock"}
      </button>
    </div>
  );
};

export default CarDetails;
