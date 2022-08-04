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
import { createNewTransportAsync } from '../../reducers/TransportProfileSlice';



export function TransportSetup() {

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

    dispatch(createNewTransportAsync({ formData, token }));

  }

  return (
    <div className="p-4 text-start w-100">

      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}>Add a Transport</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>Transport Detail</h5>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Type" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='TYPE' value={formData.TYPE} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Company" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='COMPANY' value={formData.COMPANY} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Model" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='MODEL' value={formData.MODEL} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Price" icon="envelope" group type="number" validate error="wrong"
                        success="right" name='PRICE' value={formData.PRICE} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Status" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='STATUS' value={formData.STATUS} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Image" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='IMAGE' value={formData.IMAGE} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Location" icon="envelope" group type="text" validate error="wrong"
                        success="right" name='LOCATION' value={formData.LOCATION} onChange={handleChange} />
                    </MDBCol>
                  </MDBRow>
                  <hr />

                </div>
                <div className="text-end w-100">
                  <MDBBtn color="danger" className="mx-2 my-5" href="/home/transport">Close</MDBBtn><MDBBtn onClick={onSubmit} className="mx-2  my-5"  href='#'>Add</MDBBtn>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
