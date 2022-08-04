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
  MDBBreadcrumbItem,
  MDBDropdown
} from 'mdb-react-ui-kit';
import { Toast, ToastContainer } from 'react-bootstrap';
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
import { createNewCustomerAsync, createNewTransportCustomerAsync } from '../reducers/CustomerProfileSlice';



export function TransportBooking() {

  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsImlhdCI6MTY1MjYzMTYwOX0.Iv0ffsGRfzvsiwZP6K--_9jYgxJnLJc1FbVehj8R8IY"
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleChange = event => {
    var data = formData;
    data[event.target.name] = event.target.value;
    setFormData(data);
  }
  const handleDate = event => {
    var data = formData;

    data[event.target.name] = new Date(event.target.value);
    setFormData(data);
  }

  const onSubmit = () => {
    
    formData['TRANSPORTID']=params.transportId;
    console.log(formData);
    dispatch(createNewTransportCustomerAsync({ formData, token }))
    
  }

  let params = useParams();
  useEffect(() => {

    dispatch(GetTourDetailsAsync({ params:{tourId:params.tourId,}, token }))
  }, []);

  const [rating, setRating] = useState(5);
  let navigate = useNavigate()
  let location = useLocation()
  //const [showNav, setShowNav] = useState(false);
  const details = useSelector(state => state.TourSlice.profileData);
  
  

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <div>
      
      <Navbar />
      <MDBContainer>
        <MDBRow className='d-flex justify-content-center py-5 align-items-stretch'>
        <MDBBreadcrumb>
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem >Transport</MDBBreadcrumbItem>
        <MDBBreadcrumbItem >Details</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Booking</MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <ToastContainer position="top-end" className="p-3">
      <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
        </ToastContainer>
          
          
          <MDBCol size='12'>
            <MDBCard className="px-3 py-2">
              <MDBCardBody className='text-start'>
              <form>

<div className="grey-text text-start">

  <MDBRow>
    <h5>{details?.details?.name}</h5>
    <MDBCol lg="6" className="py-1">
      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
        success="right" name='NAME' value={formData.NAME} onChange={handleChange} />
    </MDBCol>
    <MDBCol lg="6" className="py-1">
      <MDBInput label="Phone Number" icon="envelope" group type="text" validate error="wrong"
        success="right"  name='CUSTOMERPHONE' value={formData.CUSTOMERPHONE} onChange={handleChange} />
    </MDBCol>
    <MDBCol lg="6" className="py-1">
      <MDBInput label="Email" icon="envelope" group type="text" validate error="wrong"
        success="right" name='EMAIL' value={formData.EMAIL} onChange={handleChange} />
    </MDBCol>
    </MDBRow>
  <hr />
</div>
<div className="text-end w-100">
  <MDBBtn className="mx-2  my-5" href='#' onClick={onSubmit}>Book</MDBBtn>
</div>
</form>


                <div className='w-100  py-3 d-flex  justify-content-between' >
                <MDBBtn href={'/details/' + details?.details?.id} style={{backgroundColor:"#30B4BA"}}><MDBIcon icon="arrow-left" /> Back to tour</MDBBtn>
                  
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
