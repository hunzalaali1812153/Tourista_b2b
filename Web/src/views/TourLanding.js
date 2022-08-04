import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';
import {
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
  MDBCheckbox,
  slider
} from 'mdb-react-ui-kit';
import { getToken, loginAsync, resetToken } from '../reducers/AuthSlice'
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { getAllTours, GetAllToursListAsync, getTours, GetToursListAsync } from '../reducers/TourProfileSlice';
import place from './Assets/hunza.webp'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";


export function TourLanding() {
  let params = useParams();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsImlhdCI6MTY1MjYzMTYwOX0.Iv0ffsGRfzvsiwZP6K--_9jYgxJnLJc1FbVehj8R8IY"
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(GetAllToursListAsync({ token }));
  }, []);
  const data = useSelector(getAllTours);
  console.log(data);
  let navigate = useNavigate()
  let location = useLocation()
  const [showNav, setShowNav] = useState(false);
  const [search, setSearch] = useState("");
  const [value,setValue]=useState('All');
  
  const [destination,setDestination]=useState('All');
  const [val, setVal] = React.useState({ min: 0, max: 100000 });
    
  const handleSelect=(e)=>{
    setValue(e.target.value)
    console.log(e.target.value);
  }

  var list = [];
  if (data) {
    var temp = data;
    if(params.tourCategory)
    {
      temp = data.filter((x) => (x.name && x.name.toLowerCase().includes(params.tourCategory.toLowerCase())) || (x.destination && x.destination.toLowerCase().includes(params.tourCategory.toLowerCase())))
    }
    
    if (search) {
      temp = data.filter((x) => (x.name && x.name.toLowerCase().includes(search.toLowerCase())) || (x.destination && x.destination.toLowerCase().includes(search.toLowerCase())) )
    }
    
    if (value != 'All' ) {
      temp = data.filter((x) => (x.departure && x.departure.toLowerCase().includes(value.toLowerCase())) )
    }
    
    if (destination != 'All') {
      temp = data.filter((x) =>  (x.destination && x.destination.toLowerCase().includes(destination.toLowerCase())))
    }
    
    if (val.max < 100000 ) {
      temp = data.filter((x) => (x.price >= val.min) && (x.price <= val.max))
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
                <h5 className='text-left'>{val.name}</h5>
                <div className='text-left'><MDBIcon icon="map-marker-alt" /> {val.destination}</div>
                <p className='mt-5'><MDBIcon icon="users" /> From 1 to {val.quantity}</p>
              </MDBCol>
              <MDBCol size='3' className='text-end'>
                <div className='text-left'><MDBIcon icon="calendar-day" /> {val.days} Days</div>
                <div className='text-left'>Price: {val.price}</div>
                <br />
                <MDBBtn href={'/details/' + val.id} style={{ backgroundColor: "#30B4BA" }} >View details</MDBBtn></MDBCol>
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
      <h3 className='pt-5  '>{params&& params.tourCategory?params?.tourCategory:""} Tour</h3>
        <MDBRow className='d-flex justify-content-center '>
          <MDBCol size='8'>

          </MDBCol>
        </MDBRow>
        <MDBRow className='d-flex justify-content-start py-2'>
          {/*  {list}*/}
          <MDBCol size='3'>
            <MDBCard>

              <MDBCardBody className='text-start'>
                <MDBInput label="Search a tour" className=" mb-2" icon="envelope" group type="email" validate error="wrong"
                  success="right" value={search} onChange={(e) => {
                    setSearch(e.target.value)
                  }} />
                <br />
                <h5>Departure</h5>
                <select className="form-select" onChange={handleSelect}>
                  <option value="All">---All---</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
                <hr />
                <h5>Destination</h5>
                <select className="form-select" onChange={(e) => {
                    setDestination(e.target.value)
                  }}>
                  <option value="All">---All---</option>
                  <option value="Hunza">Hunza</option>
                  <option value="Gilgit">Gilgit</option>
                  <option value="Swat">Swat</option>
                  <option value="Skardu">Skardu</option>
                  <option value="Naran">Naran</option>
                  <option value="Shogran">Shogran</option>
                  <option value="Kashmir">Kashmir</option>
                </select>
                <hr />
                <h5 className=" mb-4">Price</h5>
<InputRange
            step={5000}
            maxValue={100000}
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
