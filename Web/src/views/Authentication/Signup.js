import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import signupBg from '../Assets/bg1.jpg'
import logo from '../Assets/logo.png'

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
  MDBRadio
} from 'mdb-react-ui-kit';
import { createNewUserAsync } from '../../reducers/AuthSlice';

export function Signup() {

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

    dispatch(createNewUserAsync({ formData }));

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


              <MDBNavbarLink href='/login'>
                Login
              </MDBNavbarLink>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${signupBg})`, height: "90vh" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>

            <MDBCard style={{ minWidth: '25rem' }} >
              <MDBCardBody>
                <MDBCardTitle>Sign Up</MDBCardTitle>
                <MDBInput label="Name" className="mt-5 mb-2" icon="envelope" group type="text" validate error="wrong"
                  success="right" name='name' value={formData.name} onChange={handleChange} />
                <MDBInput label="Username" className="mb-2" icon="envelope" group type="text" validate error="wrong"
                  success="right" name='userName' value={formData.userName} onChange={handleChange} />
                <MDBInput label="Email" className="mb-2" icon="envelope" group type="text" validate error="wrong"
                  success="right" name='email' value={formData.email} onChange={handleChange} />
                <MDBInput label="Phone" className="mb-2" icon="envelope" group type="text" validate error="wrong"
                  success="right" name='phone' value={formData.phone} onChange={handleChange} />
                <MDBInput label="Address" className="mb-2" icon="envelope" group type="text" validate error="wrong"
                  success="right" name='address' value={formData.address} onChange={handleChange} />

                <select className="form-select mb-2" name="userType" value={formData.userType} onChange={handleChange}>
                        <option value="SELECT">Signing up as</option>
                        <option value="1">Tour Operator</option>
                        <option value="2">Hotel Vendor</option>
                        <option value="3">Transport Vendor</option>
                      </select>

                <MDBInput label="Password" className="mb-5 mb-2" icon="envelope" group type="password" validate error="wrong"
                  success="right" name='password' value={formData.password} onChange={handleChange} />

                <MDBBtn href="#" onClick={onSubmit}>Sign Up</MDBBtn>
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
