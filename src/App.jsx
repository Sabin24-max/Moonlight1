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

const App = () => {
  const handleBookingSubmit = (formData) => {
    console.log("Booking Submitted:", formData);
    // You can send data to your backend here
  };

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white p-6">
        {/* Navigation Links */}
        <nav className="mb-8 text-center space-x-6">
          <Link to="/" className="hover:underline text-blue-400">Booking</Link>
          <Link to="/footer" className="hover:underline text-blue-400">Footer</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route
            path="/"
            element={<BookingForm onSubmit={handleBookingSubmit} />}
          />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
