import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import { createNewHotelAsync } from '../../reducers/HotelProfileSlice';
import { getToken } from '../../reducers/AuthSlice';



export function HotelSetup() {

  const token = useSelector(getToken);
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

    dispatch(createNewHotelAsync({ formData, token }));

  }

  return (
    <div className="p-4 text-start w-100">

      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}>Add a Hotel</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>Hotel Detail</h5>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='hotelName' value={formData.hotelName} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Location" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='hotelLocation' value={formData.hotelLocation} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Room Price" icon="envelope" group type="number" validate error="wrong"
                        success="right" name='roomPrice' value={formData.roomPrice} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Status" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='hotelStatus' value={formData.hotelStatus} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput label="Facilities" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='hotelFacilities' value={formData.hotelFacilities} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="Description" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='hotelDescription' value={formData.hotelDescription} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput textarea label="Image" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='image' value={formData.image} onChange={handleChange} />
                    </MDBCol>
                  </MDBRow>
                  <hr />

                </div>
                <div className="text-end w-100">
                  <MDBBtn color="danger" className="mx-2 my-5" href="/home/hotel">Close</MDBBtn><MDBBtn className="mx-2  my-5" href='#' onClick={onSubmit}>Add</MDBBtn>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
