import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../styles/App.scss';
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
  MDBCardHeader
} from 'mdb-react-ui-kit';
import { Login } from './Authentication/Login'
import { TourManagement } from './TourManagement/TourManagement'
import {
  BrowserRouter as Router, Routes, Route, Link, useParams,
  useMatch
} from "react-router-dom";
import { HotelManagement } from './HotelManagement/HotelManagement';
import { TransportManagement } from './TransportManagement/TransportManagement';
import logo from './Assets/logo.png'
import { getToken, resetToken } from './../reducers/AuthSlice'
import { Dashboard } from './Dashboard/Dashboard';
import { TourCollabManagement } from './CollabTour/TourCollabManagement';
import { CollaborationList } from './CollaborationManagement/CollaborationList';
import { getUser, GetUserDetailAsync, getUserType, GetUserTypeAsync } from '../reducers/UserProfileSlice';

export function Landing() {

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {

    dispatch(GetUserTypeAsync({ token }));
  }, []);
  const data = useSelector(getUserType);

  console.log('type ', data);

  function Tour(props){
    return (
      <div style={{ height: "100%" }} >
      <div className="w-100 d-flex" style={{ height: "100%",backgroundColor:"#E4E8F1" }}>
        <div className="custom-sidebar">
          <div className="custom-sidebar-logo">
            <img width={'100px'} src={logo}/>
          </div>

          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/dashboard`} >Dashboard</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/tour`} >Tour Management</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/collaboration`} >Collaboration Management</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/collaborate-tour`} >Collaborate Tour</Link>
            </div>
          </div>
          
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
            <MDBBtn onClick={() => dispatch(resetToken({
                }))} >Log Out</MDBBtn>
            </div>
          </div>
        </div>
        <div className="custom-sidebar-content">
      <div className="custom-sidebar-content-nav">
                
      </div>
          <Routes>
            <Route path={`dashboard/*`} element={ <Dashboard />} />
            <Route path={`tour/*`} element={ <TourManagement />} />
            <Route path={`hotel/*`} element={ <HotelManagement />} />
            <Route path={`transport/*`} element={ <TransportManagement />} />
            <Route path={`collaborate-tour/*`} element={ <TourCollabManagement />} />
            <Route path={`collaboration/*`} element={ <CollaborationList />} />

          </Routes>

        </div>
      </div>
    </div>

    );
  }

  function Hotel(props) {
    return (
      <div style={{ height: "100%" }} >
      <div className="w-100 d-flex" style={{ height: "100%",backgroundColor:"#E4E8F1" }}>
        <div className="custom-sidebar">
          <div className="custom-sidebar-logo">
            <img width={'100px'} src={logo}/>
          </div>

          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/dashboard`} >Dashboard</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/hotel`} >Hotel Management</Link>
            </div>
          </div>
          
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
            <MDBBtn onClick={() => dispatch(resetToken({
                }))} >Log Out</MDBBtn>
            </div>
          </div>
        </div>
        <div className="custom-sidebar-content">
      <div className="custom-sidebar-content-nav">
                
      </div>
          <Routes>
            <Route path={`dashboard/*`} element={ <Dashboard />} />
            <Route path={`tour/*`} element={ <TourManagement />} />
            <Route path={`hotel/*`} element={ <HotelManagement />} />
            <Route path={`transport/*`} element={ <TransportManagement />} />
            <Route path={`collaborate-tour/*`} element={ <TourCollabManagement />} />
            <Route path={`collaboration/*`} element={ <CollaborationList />} />

          </Routes>

        </div>
      </div>
    </div>
    );
  }

  function Transport(props) {
    return (
      <div style={{ height: "100%" }} >
      <div className="w-100 d-flex" style={{ height: "100%",backgroundColor:"#E4E8F1" }}>
        <div className="custom-sidebar">
          <div className="custom-sidebar-logo">
            <img width={'100px'} src={logo}/>
          </div>

          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/dashboard`} >Dashboard</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/transport`} >Transport Management</Link>
            </div>
          </div>
          
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
            <MDBBtn onClick={() => dispatch(resetToken({
                }))} >Log Out</MDBBtn>
            </div>
          </div>
        </div>
        <div className="custom-sidebar-content">
      <div className="custom-sidebar-content-nav">
                
      </div>
          <Routes>
            <Route path={`dashboard/*`} element={ <Dashboard />} />
            <Route path={`tour/*`} element={ <TourManagement />} />
            <Route path={`hotel/*`} element={ <HotelManagement />} />
            <Route path={`transport/*`} element={ <TransportManagement />} />
            <Route path={`collaborate-tour/*`} element={ <TourCollabManagement />} />
            <Route path={`collaboration/*`} element={ <CollaborationList />} />

          </Routes>

        </div>
      </div>
    </div>
    );
  }

  function Menu(props) {
    if (data.type == "1") {
      return <Tour />;
    }
    else if (data.type == "2") {
      return <Hotel />;
    } 
    else if (data.type == "3") {
      return <Transport />;
    }
    else{
      return <h1>Error</h1>
    }
  }
  
  

  return (
    
    <Menu />
    
  );
}

