import React from 'react';

import { Login } from './views/Authentication/Login';
import { Signup } from './views/Authentication/Signup';

import { Landing } from './views/Landing';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Landing1 } from './views/Landing1';
import { TourLanding } from './views/TourLanding';
import { TourDetails } from './views/TourDetails';
import { TourBooking } from './views/TourBooking';
import { HotelLanding } from './views/HotelLanding';
import { HotelDetails } from './views/HotelDetails';
import { HotelBooking } from './views/HotelBooking';
import { TransportLanding } from './views/TransportLanding';
import { TransportDetails } from './views/TransportDetails';
import { TransportBooking } from './views/TransportBooking';

function App() {
  return (
    <div className="App" style={{ minHeight: "100%" }}>
      <Router>
        <Routes>
          < Route  path="home/*" element={< Landing />} />
          < Route  path="/" element={< Landing1 />} />
          < Route  path="/tour" element={< TourLanding />} />
          < Route  path="/tour/:tourCategory" element={< TourLanding />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="details/:tourId" element={<TourDetails />} />
          <Route path="booking/:tourId" element={<TourBooking />} />
          <Route path="/hotel" element={<HotelLanding />} />
          <Route path="/hotel/details/:hotelId" element={<HotelDetails />} />
          <Route path="/hotel/booking/:hotelId" element={<HotelBooking />} />
          <Route path="/transport" element={<TransportLanding />} />
          <Route path="/transport/details/:transportId" element={<TransportDetails />} />
          <Route path="/transport/booking/:transportId" element={<TransportBooking />} />
         
        </Routes>
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
