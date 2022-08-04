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
import { getToken } from '../../reducers/AuthSlice';
import { createNewTourAsync } from '../../reducers/TourProfileSlice';



export function TourSetup() {


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

    dispatch(createNewTourAsync({ formData, token }));

  }


  return (
    <div className="p-4 text-start w-100">

      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> Create a Tour</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>Tour Information</h5>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='NAME' value={formData.NAME} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Days" icon="envelope" group type="number" validate error="wrong"
                        success="right"  name='DAYS' value={formData.DAYS} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Destination" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='DESTINATION' value={formData.DESTINATION} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Departure" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='DEPARTURE' value={formData.DEPATURE} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Price" icon="envelope" group type="number" validate error="wrong"
                        success="right" name='PRICE' value={formData.PRICE} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Status" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='STATUS' value={formData.STATUS} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="Overview" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='SHORT_DESC' value={formData.SHORT_DESC} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput textarea label="Description" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='LONG_DESC' value={formData.LONG_DESC} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Quantity" icon="envelope" group type="number" validate error="wrong"
                        success="right" name='QTY' value={formData.QTY} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="12" className="py-1">
                      <MDBInput label="Event Names" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='EVENTNAMES' value={formData.EVENTNAMES} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Image" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='IMAGE' value={formData.IMAGE} onChange={handleChange} />
                    </MDBCol>
                    </MDBRow>
                  <hr />
                </div>
                <div className="text-end w-100">
                  <MDBBtn  color="danger" className="mx-2 my-5" href="/home/tour">Close</MDBBtn><MDBBtn className="mx-2  my-5" href='#' onClick={onSubmit}>Add</MDBBtn>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
