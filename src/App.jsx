// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// // App.jsx
// import React from "react";
// import NotificationSettings from "./Components/NotificationSettings";
// import './index.css'

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <NotificationSettings />
//     </div>
//   );
// };
//
//export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookingForm } from "./components/BookingForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RoomCard from "./components/RomCard"; // ✅ Import RoomCard

const App = () => {
  const handleBookingSubmit = (formData) => {
    console.log("Booking Submitted:", formData);
  };

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white p-6">
        {/* Navigation */}
        <nav className="mb-8 text-center space-x-6">
          <Link to="/home" className="hover:underline text-blue-400">Home</Link>
          <Link to="/" className="hover:underline text-blue-400">Booking</Link>
          <Link to="/rooms" className="hover:underline text-blue-400">Rooms</Link> {/* ✅ New Link */}
          <Link to="/footer" className="hover:underline text-blue-400">Footer</Link>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/home" element={
            <>
              <Header />
              <Hero />
            </>
          } />
          
          <Route
            path="/"
            element={<BookingForm onSubmit={handleBookingSubmit} />}
          />
          
          <Route path="/footer" element={<Footer />} />
          
          {/* ✅ New Route for RoomCard */}
          <Route path="/rooms" element={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <RoomCard
                title="Deluxe Room"
                description="Spacious room with mountain view"
                price="$150/night"
                image="/images/deluxe.jpg"
              />
              <RoomCard
                title="Standard Room"
                description="Cozy room with all essentials"
                price="$90/night"
                image="/images/standard.jpg"
              />
              <RoomCard
                title="Suite"
                description="Luxurious suite with balcony"
                price="$250/night"
                image="/images/suite.jpg"
              />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
