import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';
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
  MDBCheckbox,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink
} from 'mdb-react-ui-kit';
import { getToken, loginAsync, resetToken } from '../reducers/AuthSlice'
import logo from '../assets/logo.png'
import comakebg from '../assets/comkaebg.png'
import item1 from '../assets/signup.png'
import item2 from '../assets/connect.png'

import item3 from '../assets/sahke.png'
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { getAllTours, GetAllToursListAsync, getTours, GetToursListAsync } from '../reducers/TourProfileSlice';
import place from './Assets/hunza.webp'
import { getAllHotels, GetAllHotelsListAsync, getHotels, GetHotelsListAsync } from '../reducers/HotelProfileSlice';
import room from './Assets/room.jpeg'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";


export function HotelLanding() {
  let params = useParams();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsImlhdCI6MTY1MjYzMTYwOX0.Iv0ffsGRfzvsiwZP6K--_9jYgxJnLJc1FbVehj8R8IY"
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(GetAllHotelsListAsync({ token }));
  }, []);
  const data = useSelector(getAllHotels);
  console.log(data);
  let navigate = useNavigate()
  const [showNav, setShowNav] = useState(false);
  const [search, setSearch] = useState("");
  const [location,setLocation]=useState('All');
  
  const [val, setVal] = React.useState({ min: 0, max: 50000 });

  var list = [];
  if (data) {
    var temp = data;
    // if(params.tourCategory)
    // {
    //   temp = data.filter((x) => (x.name && x.name.toLowerCase().includes(params.tourCategory.toLowerCase())) || (x.destination && x.destination.toLowerCase().includes(params.tourCategory.toLowerCase())))
    // }
    
    if (search) {
      temp = temp.filter((x) => (x.hotelName && x.hotelName.toLowerCase().includes(search.toLowerCase())) )
    }

    if (location != 'All') {
      console.log(location)
      temp = temp.filter((x) =>  (x.hotelLocation && x.hotelLocation.toLowerCase().includes(location.toLowerCase())))
    }
    
    if (val.max < 100000 ) {
      temp = temp.filter((x) => (x.roomPrice >= val.min) && (x.roomPrice <= val.max))
    }
    temp.forEach(val => {
      list.push(<MDBCol size='12' className='my-3'>
        <MDBCard className="">
          <MDBCardBody className='text-start'>
            <MDBRow>
            <MDBCol size='4'>
               <div>
                 <img src={val.image} width="190px"/>
               </div>
              </MDBCol>
              <MDBCol size='5'>
                <h5 className='text-left'>{val.hotelName}</h5>
                <div className='text-left'><MDBIcon icon="map-marker-alt" /> {val.hotelLocation}</div>
                
              </MDBCol>
              <MDBCol size='3' className='text-end'>
                <div className='text-left'>Price: {val.roomPrice}</div>
                <p style={{ fontSize: "12px", color: 'grey' }}>for 1 Night, per room</p>
                <br />
                <MDBBtn href={'hotel/details/' + val.id} style={{ backgroundColor: "#30B4BA" }} >View details</MDBBtn></MDBCol>
            </MDBRow>


          </MDBCardBody>
        </MDBCard>
      </MDBCol>)
    })
  }
  // if (!token) {
  //   //alert("Hello");
  //   return <Navigate to={{ pathname: '/login', state: { from: location } }} />
  //   // setUserName("")
  // }

  return (
    <div>
      <Navbar />
      <MDBContainer>
      <h3 className='pt-5  '>{params&& params.tourCategory?params?.tourCategory:""} Hotel</h3>
        <MDBRow className='d-flex justify-content-center '>
          <MDBCol size='8'>

          </MDBCol>
        </MDBRow>
        <MDBRow className='d-flex justify-content-start py-2'>
          {/*  {list}*/}
          <MDBCol size='3'>
            <MDBCard>

              <MDBCardBody className='text-start'>
                <MDBInput label="Search a hotel" className=" mb-2" icon="envelope" group type="email" validate error="wrong"
                  success="right" value={search} onChange={(e) => {
                    setSearch(e.target.value)
                  }} />
                <br />
                <hr />
                <h5>Location</h5>
                <select className="form-select" onChange={(e) => {
                    
                    setLocation(e.target.value)
                  }}>
                  <option value="All">---All---</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
                <hr />
                <h5 className=" mb-4">Price</h5>
<InputRange
            step={5000}
            maxValue={50000}
            minValue={0}
            value={val}
            onChange={setVal}
            onChangeComplete={args => console.log(args)}
          />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size='7'>
            {list}
          </MDBCol>

        </MDBRow>
      </MDBContainer>


      <Footer />

    </div>
  );
}
