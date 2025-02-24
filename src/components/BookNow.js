import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { doc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const BookNow = ({ user }) => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    const fetchCar = async () => {
      const carDoc = await getDoc(doc(db, "cars", carId));
      if (carDoc.exists()) {
        setCar(carDoc.data());
      }
    };
    fetchCar();
  }, [carId]);

  const handleBooking = async () => {
    if (!pickupDate || !returnDate) {
      toast.error("Please select pickup and return dates.");
      return;
    }

    if (car.stock <= 0) {
      toast.error("Car is sold out!");
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        carId,
        userId: user.uid,
        email: user.email,
        pickupDate,
        returnDate,
        bookedAt: new Date(),
      });

      
      await updateDoc(doc(db, "cars", carId), {
        stock: car.stock - 1
      });

      toast.success("Car booked successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Booking failed. Please try again.");
      console.error("Booking error:", error);
    }
  };

  if (!car) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Book {car.name}</h1>
      <p>Available: {car.stock}</p>
      <label>Pickup Date:</label>
      <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
      
      <label>Return Date:</label>
      <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
      
      {car.stock > 0 ? (
        <button className="confirm-booking-btn" onClick={handleBooking}>Confirm Booking</button>
      ) : (
        <button className="sold-out-btn" disabled>Sold Out</button>
      )}
    </div>
  );
};

export default BookNow;
