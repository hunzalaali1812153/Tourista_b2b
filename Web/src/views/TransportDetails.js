import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
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
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
// import StarRatings from 'react-star-ratings';
import { getToken, loginAsync, resetToken, getUserData } from '../reducers/AuthSlice'
import logo from '../assets/logo.png'
import comakebg from '../assets/comkaebg.png'
import item1 from '../assets/signup.png'
import item2 from '../assets/connect.png'
// import Avatar from 'react-avatar';
import item3 from '../assets/sahke.png'
import { Navbar } from './Navbar';
import { Footer } from './Footer';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { getProfiles, GetTourDetailsAsync } from '../reducers/TourProfileSlice';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { GetTransportDetailsAsync } from '../reducers/TransportProfileSlice';



export function TransportDetails() {
  let params = useParams();
  const dispatch = useDispatch();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsImlhdCI6MTY1MjYzMTYwOX0.Iv0ffsGRfzvsiwZP6K--_9jYgxJnLJc1FbVehj8R8IY"
  useEffect(() => {

    dispatch(GetTransportDetailsAsync({ params:{transportId:params.transportId,}, token }))
  }, []);

  const [rating, setRating] = useState(5);
  let navigate = useNavigate()
  let location = useLocation()
  //const [showNav, setShowNav] = useState(false);
  const details = useSelector(state => state.TransportSlice.profileData);
  console.log(details);
  

  const images = [
    {
      original: details?.image,
      thumbnail: details?.image,
    }
  ];

  return (
    <div>
      
      <Navbar />
      <MDBContainer>
        <MDBRow className='d-flex justify-content-center py-5 align-items-stretch'>
        <MDBBreadcrumb>
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem >Transport</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Details</MDBBreadcrumbItem>
      </MDBBreadcrumb>
          <MDBCol size='8' className='d-flex  align-items-stretch'>
            <MDBCard className="p-2 mb-3  w-100">
              <MDBCardBody>
              <ImageGallery items={images} />
                {/* <Avatar round src='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg' size="150" /> */}
                
                {/* <h5 className='mt-4' >{details?.profile?.Name}</h5> */}
                {/* <StarRatings
                  rating={details?.profile?.rating}
                  starRatedColor="green"
                  starDimension="20px"
                  starSpacing="1px"
                  //  changeRating={this.changeRating}
                  numberOfStars={5}
                  name='rating'
                /> */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size='4' className='d-flex  align-items-stretch'>
            <MDBCard className="p-2 mb-3  w-100">
              <MDBCardBody>
                <MDBCardTitle><h4 className='text-start'>{details?.model}</h4></MDBCardTitle>
                <MDBRow>
                  <div className='text-start'>
                    <p>{details?.company}</p>
                    
                    <p> {details?.type}</p>
                    <p><MDBIcon icon="map-marker-alt" /> {details?.location}</p>
                    <h5 className='text-center mt-5'>PKR {details?.price} </h5>
                    <div className='text-center mt-5'><MDBBtn className='' href={'/transport/booking/' + details?.id} style={{ backgroundColor: '#F7D402', color: "black" }}>Book Now</MDBBtn></div>
                  </div>
                </MDBRow>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
          <MDBCol size='12'>
            <MDBCard className="px-3 py-2">
              <MDBCardBody className='text-start'>
                
                <div className='w-100  py-3 d-flex  justify-content-between' >
                <MDBBtn href='/tour' style={{backgroundColor:"#30B4BA"}}><MDBIcon icon="arrow-left" /> Back to list</MDBBtn>
                  
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


      <Footer />

    </div>
  );
}
