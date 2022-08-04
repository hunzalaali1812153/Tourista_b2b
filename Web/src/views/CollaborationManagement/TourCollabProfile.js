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
import { getToken, loginAsync, resetToken, getUserData } from '../../reducers/AuthSlice'
// import Avatar from 'react-avatar';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { getProfiles, GetTourDetailsAsync } from '../../reducers/TourProfileSlice';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";



export function TourCollabProfile() {
  let params = useParams();
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {

    dispatch(GetTourDetailsAsync({ params:{tourId:params.tourId,}, token }))
  }, []);

  const [rating, setRating] = useState(5);
  let navigate = useNavigate()
  let location = useLocation()
  //const [showNav, setShowNav] = useState(false);
  const details = useSelector(state => state.TourSlice.profileData);
  console.log(details);
  

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
      
      <MDBContainer>
        <MDBRow className='d-flex justify-content-center py-5 align-items-stretch'>
        <MDBBreadcrumb>
        <MDBBreadcrumbItem>Collaborate Tour</MDBBreadcrumbItem>
        <MDBBreadcrumbItem >Tour</MDBBreadcrumbItem>
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
                <MDBCardTitle><h4 className='text-start'>{details?.details?.name}</h4></MDBCardTitle>
                <MDBRow>
                  <div className='text-start'>
                    <p><MDBIcon icon="map-marker-alt" /> {details?.details?.destination}</p>
                    
                    <p><MDBIcon icon="calendar-day" /> {details?.details?.days} Days</p>
                    <p><MDBIcon icon="users" /> From 1 to  {details?.details?.quantity} Days</p>
                    <p>Departure  <MDBIcon icon="map-marker-alt" />  {details?.details?.departure}</p>
                    <h5 className='text-center mt-5'>PKR {details?.details?.price} </h5>
                    <div className='text-center mt-5'><MDBBtn className='' href={'/home/collaborate-tour/book/' + details?.details?.id} style={{ backgroundColor: '#F7D402', color: "black" }}>Collaborate</MDBBtn></div>
                  </div>
                </MDBRow>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
          <MDBCol size='12'>
            <MDBCard className="px-3 py-2">
              <MDBCardBody className='text-start'>
                <MDBCardTitle><h5>Overview</h5></MDBCardTitle>
                <p>{details?.details?.shortDescription}</p>
                {/* <textarea disabled style={{width : "100%", height : "200px"}}>{details?.details?.shortDescription}</textarea> */}
                <MDBCardTitle><h5>Description</h5></MDBCardTitle>
                <p>{details?.details?.longDescription}</p>
                <div className='w-100  py-3 d-flex  justify-content-between' >
                <MDBBtn href='/home/collaborate-tour' style={{backgroundColor:"#30B4BA"}}><MDBIcon icon="arrow-left" /> Back to list</MDBBtn>
                  
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>



    </div>
  );
}
