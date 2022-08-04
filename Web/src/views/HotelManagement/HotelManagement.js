import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,

} from 'mdb-react-ui-kit';

import {
  BrowserRouter as Router, Routes, Route, Link, useParams,
  useMatch
} from "react-router-dom";

import { HotelList } from './HotelList';
import { HotelSetup } from './HotelSetup';
import { HotelProfile } from './HotelProfile';

export function HotelManagement() {

  const [screen, setScreenMode] = useState("list");
  const [details, setProfileDetails] = useState({});
  const [detailsMode, setDetailsMode] = useState("add");

  var screenModule = <div></div>


  return (
    // screenModule

    <Routes>
      <Route path={`/`} element={<HotelList />} />
      <Route path={`add`} element={<HotelSetup />} />
      <Route path={`details/:hotelId`} element={<HotelProfile />} />
    </Routes>
  );

}
