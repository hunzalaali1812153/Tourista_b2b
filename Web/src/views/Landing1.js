import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Navigate ,Link} from 'react-router-dom';
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
  MDBCarousel
} from 'mdb-react-ui-kit';

import { getToken, loginAsync, resetToken } from '../reducers/AuthSlice'
import logo from '../assets/logo1.png'
import banner from '../assets/landingimg.PNG'
import comakebg from '../assets/comkaebg.png'
import item1 from '../assets/signup.png'
import item2 from '../assets/connect.png'

import hero from './Assets/hero.jpg'
import swat from './Assets/swat.webp'
import naran from './Assets/naran.webp'
import shogran from './Assets/shogran.webp'
import kashmir from './Assets/kashmir.webp'
import skardu from './Assets/skardu.webp'
import hunza from './Assets/hunza.webp'
import gilgit from './Assets/gilgit.webp'
import item3 from '../assets/sahke.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import alitem1 from '../assets/web.png'
import alitem2 from '../assets/dm.png'
import alitem3 from '../assets/ft.png'
import alitem4 from '../assets/log.jpg'

import { Navbar } from './Navbar';
import { Footer } from './Footer';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export function Landing1() {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate()
  let location = useLocation()
  const [showNav, setShowNav] = useState(false);



  return (
    <div>

      <Navbar/>
      <MDBCarousel fade>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src={hero} alt='...' style={{ height: "600px"}} />
            <MDBCarouselCaption style={{ marginBottom: "200px",  background: "rgba(0, 0, 0, .6)"}}>
              <h2>Book your dream Tour with us</h2>
              <p>Explore and Create a best Tour for your holidays</p>
              <MDBBtn className='mx-2' style={{ backgroundColor: '#F7D402', color: "black" }} href="/tour" >Find a Tour</MDBBtn>
              <MDBBtn className='mx-2' href='/hotel' style={{backgroundColor:"#30B4BA"}} >Find a Hotel</MDBBtn>
              <MDBBtn className='mx-2' href='/transport' style={{backgroundColor:"#30B4BA"}} >Find a Transport</MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>


        </MDBCarouselInner>
      </MDBCarousel>
      <MDBContainer>
      <MDBRow className='text-center py-5'>
         
          <h1 className='my-5'>Popular Destinations</h1>
          <Carousel responsive={responsive}>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={hunza} className="my-3" style={{ width: "300px"}}/>
              <h4><Link to="/tour/Hunza" style={{color:"black"}}>Hunza</Link></h4>

              </MDBCardBody>
            </MDBCard></div>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={gilgit} className="my-3" style={{ width: "300px"}}/>
              <h4><Link to="/tour/Gilgit" style={{color:"black"}}>Gilgit</Link></h4>

              </MDBCardBody>
            </MDBCard></div>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={skardu} className="my-3" style={{ width: "300px"}} />
              <h4><Link to="/tour/Skardu"style={{color:"black"}}>Skardu</Link></h4>

              </MDBCardBody>
            </MDBCard></div>
          
  
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={swat} className="my-3" style={{ width: "300px"}}/>
              <h4><Link to="/tour/Swat"style={{color:"black"}}>Swat</Link></h4>

              </MDBCardBody>
            </MDBCard></div>
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={naran} className="my-3" style={{ width: "300px"}}/>
              <h4><Link to="/tour/Naran"style={{color:"black"}}>Naran</Link></h4>

              </MDBCardBody>
            </MDBCard></div>
          
            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={shogran} className="my-3" style={{ width: "300px"}}/>
              <h4><Link to="/tour/Shogran"style={{color:"black"}}>Shogran</Link></h4>

              </MDBCardBody>
            </MDBCard></div>

            <div><MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
              <img src={kashmir} className="my-3" style={{ width: "300px"}}/>
              <h4><Link to="/tour/Kashmir"style={{color:"black"}}>Kashmir</Link></h4>

              </MDBCardBody>
            </MDBCard></div>
          </Carousel>;
        </MDBRow>
        <MDBRow className='text-center mb-6'>
        <hr />
          <h2 className='mb-5 mt-2'>Simple process</h2>
          <MDBCol>
            <MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>
                  <img src={item1} className="my-3" />
                  <br />
                  Sign Up</MDBCardTitle>
                <MDBCardText>
                  Are you a Tour, Hotel, Transport vendor?
                </MDBCardText>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>
                  <img src={item2} className="my-3" />
                  <br />
                  Book</MDBCardTitle>
                <MDBCardText>
                  Browse Tours, Hotels, Transports. Send a booking request when you find a match!
                </MDBCardText>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>
                  <img src={item3} className="my-3" />
                  <br />
                  Collaborate</MDBCardTitle>
                <MDBCardText>
                  Collaborate Tours with other Tour vendors!
                </MDBCardText>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        </MDBRow>


      </MDBContainer>
  <Footer/>

    </div>
  );
}
