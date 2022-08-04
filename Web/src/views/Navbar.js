import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Navigate,Link } from 'react-router-dom';
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
  MDBNavbarBrand,
  MDBCollapse,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBCarouselInner,
  MDBCarousel,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownLink
} from 'mdb-react-ui-kit';

import { getToken, loginAsync, resetToken } from '../reducers/AuthSlice'
import logo from './Assets/logo.png'
import comakebg from './Assets/tours.jpg'
import item1 from '../assets/signup.png'
import item2 from '../assets/connect.png'

import item3 from '../assets/sahke.png'
import { getUser, GetUserDetailAsync } from '../reducers/UserProfileSlice';



export function Navbar() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {

    dispatch(GetUserDetailAsync({ token }));
  }, []);
  const userData = useSelector(getUser);

  console.log(userData)

  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'><img src={logo} style={{ height: "50px" }} /> TOURISTA</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          {/* <MDBNavbarNav left>
            <MDBNavbarItem>
              <MDBDropdown group className='shadow-0' >
                <MDBDropdownToggle color='light' >Buyer</MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/business">Explore projects</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/signup">Become a buyer</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/post-business-ad">Post an ad</MDBDropdownLink>
                  </MDBDropdownItem>
       
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown group className='shadow-0'>
                <MDBDropdownToggle color='light'>Vendor</MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/vendor">Explore vendors</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/signup">Become a vendor</MDBDropdownLink>
                  </MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown group className='shadow-0'>
                <MDBDropdownToggle color='light'>Allied Services</MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/allied-services">Browse allied services</MDBDropdownLink>
                  </MDBDropdownItem>
                
        
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav> */}
          <MDBNavbarNav right className='d-flex justify-content-end'>
          {token ? 
          <MDBNavbarItem>
              <MDBDropdown group className='shadow-0'>
                <MDBDropdownToggle color='light'>Hi, {userData.name}</MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink  ><Link className='mx-2' to="/home/dashboard" style={{color:"black"}}  >Dashboard</Link></MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink onClick={() => dispatch(resetToken({
                }))}> <Link className='mx-2' to="#"   style={{color:"black"}}  >Sign out</Link></MDBDropdownLink>
                  </MDBDropdownItem>
        
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>: <MDBBtn href='/login' style={{backgroundColor:"#30B4BA"}}>Login</MDBBtn>
            }
            {/* {token ?  <MDBBtn className='mx-2' href='/post-business-ad' style={{ backgroundColor: '#F7D402', color: "black" }}>Post ad</MDBBtn>  : ""
            } */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
