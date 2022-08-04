import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import loginBg from '../Assets/pakistan-karakorum.webp'
import logo from '../Assets/logo.png'

import { useNavigate, useLocation, Navigate } from 'react-router-dom';

import { Dispatch } from '@reduxjs/toolkit';

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
  MDBInput
} from 'mdb-react-ui-kit';

import { getToken, loginAsync } from '../../reducers/AuthSlice'

export function Login() {

  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate()
  let location = useLocation()


  if (token) {
      //alert("Hello");
      return <Navigate to={{ pathname: '/home/dashboard', state: { from: location } }} />
      // setUserName("")
  }

  return (
    <div>

      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse w-100' id='navbarExample01' >
            <MDBNavbarNav left className='mb-2 mb-lg-0'>
              <MDBNavbarItem >
                <MDBNavbarLink href='/'>
                  <img width={'50px'} src={logo}/>
                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
            <MDBNavbarNav right className='mb-2 mb-lg-0 text=right d-flex justify-content-end' >


              <MDBNavbarLink href='/signup'>
                Sign Up
              </MDBNavbarLink>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${loginBg})`, height: "83vh" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>

            <MDBCard style={{ minWidth: '25rem' }} >
              <MDBCardBody>
                <MDBCardTitle>Login</MDBCardTitle>
                <MDBInput label="Username" className="mt-5 mb-2" icon="envelope" group type="email" validate error="wrong"
                  success="right" value={userName} onChange={(e) => {
                    setUserName(e.target.value)
                  }} />
                <MDBInput label="Password" className="mb-5 mb-2" icon="envelope" group type="password" validate error="wrong"
                  success="right" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                  }} />


                <MDBBtn onClick={() => dispatch(loginAsync({
                  "userName": userName,
                  "password": password
                }))} >Login</MDBBtn>
              </MDBCardBody>
            </MDBCard>

          </div>
        </div>
      </div>
      {/* <MDBContainer>
        <MDBRow>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
    </MDBContainer>*/}
      <MDBFooter backgroundColor='light' className='text-center text-lg-left'>


        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='/'>
            Tourista
          </a>
        </div>
      </MDBFooter>

    </div>
  );
}
