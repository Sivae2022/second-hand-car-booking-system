// // import React, { useEffect } from "react";
// // import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// // import "./App.css";
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   Navigate,
// // } from "react-router-dom";

// // import Login from "./components/login";
// // import SignUp from "./components/register";

// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import Profile from "./components/profile";
// // import { useState } from "react";
// // import { auth } from "./components/firebase";

// // function App() {
// //   const [user, setUser] = useState();
// //   useEffect(() => {
// //     auth.onAuthStateChanged((user) => {
// //       setUser(user);
// //     });
// //   });
// //   return (
// //     <Router>
// //       <div className="App">
// //         <div className="auth-wrapper">
// //           <div className="auth-inner">
// //             <Routes>
// //               <Route
// //                 path="/"
// //                 element={user ? <Navigate to="/profile" /> : <Login />}
// //               />
// //               <Route path="/login" element={<Login />} />
// //               <Route path="/register" element={<SignUp />} />
// //               <Route path="/profile" element={<Profile />} />
// //             </Routes>
// //             <ToastContainer />
// //           </div>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import React, { useEffect } from "react"; 
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Login from "./components/login";
// import SignUp from "./components/register";
// import HomePage from "./components/HomePage";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Profile from "./components/profile";
// import { useState } from "react";
// import { auth } from "./components/firebase";

// function App() {
//   const [user, setUser] = useState();
//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//   });
//   return (
//     <Router>
//       <div className="App">
//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Routes>
//               <Route
//                 path="/"
//                 element={user ? <Navigate to="/profile" /> : <Login />}
//               />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<SignUp />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/home" element={<HomePage />} />
//             </Routes>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Import Components
// import HomePage from "./components/HomePage";
// import BookNow from "./components/BookNow";
// import Login from "./components/login";
// import SignUp from "./components/register";
// import Profile from "./components/profile";
// import { auth } from "./components/firebase";

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<SignUp />} />
//           <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
//           <Route path="/" element={<HomePage />} />
//           <Route path="/book-now/:carId" element={<BookNow />} />
//         </Routes>
//         <ToastContainer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Import Components
// import HomePage from "./components/HomePage";
// import BookNow from "./components/BookNow";
// import Login from "./components/login";
// import SignUp from "./components/register";
// import Profile from "./components/profile";
// import { auth } from "./components/firebase";

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<SignUp />} />
//           <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
//           <Route path="/book-now/:carId" element={<BookNow />} />
//         </Routes>
//         <ToastContainer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Import Components
// import HomePage from "./components/HomePage";
// import BookNow from "./components/BookNow";
// import CarDetails from "./components/carDetails";
// import Login from "./components/login";
// import SignUp from "./components/register";
// import Profile from "./components/profile";
// import { auth } from "./components/firebase";

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<SignUp />} />
//           <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
//           <Route path="/book-now/:carId" element={<BookNow />} />
//           <Route path="/car-details/:id" element={<CarDetails />} />
//         </Routes>
//         <ToastContainer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Import Components
// import HomePage from "./components/HomePage";
// import BookNow from "./components/BookNow";
// import CarDetails from "./components/carDetails";
// import Login from "./components/login";
// import SignUp from "./components/register";
// import Profile from "./components/profile";
// import { auth } from "./components/firebase";

// function App() {
//   const [user, setUser] = useState(() => {
//     // Persist authentication state
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//         localStorage.setItem("user", JSON.stringify(user)); // Store user in local storage
//       } else {
//         setUser(null);
//         localStorage.removeItem("user"); // Remove user if logged out
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage user={user} />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<SignUp />} />
//           <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
//           <Route path="/book-now/:carId" element={user ? <BookNow /> : <Navigate to="/login" />} />
//           <Route path="/car-details/:id" element={<CarDetails />} />
//         </Routes>
//         <ToastContainer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Components
import HomePage from "./components/HomePage";
import BookNow from "./components/BookNow";
import CarDetails from "./components/carDetails"; // Ensure correct casing
import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile";
import { auth } from "./components/firebase";

// Protected Route Component
const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/login" />;
};

function App() {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        localStorage.setItem("user", JSON.stringify(authUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/car-details/:id" element={<CarDetails />} />

          {/* Protected Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/book-now/:carId"
            element={
              <ProtectedRoute user={user}>
                <BookNow />
              </ProtectedRoute>
            }
          />

          {/* Catch-all Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
