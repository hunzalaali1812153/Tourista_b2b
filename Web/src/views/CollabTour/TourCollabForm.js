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
import { createNewCollaborationAsync } from '../../reducers/CollaborationProfileSlice';
import { useParams } from 'react-router';



export function TourCollabForm() {
  
  let params = useParams();
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
    formData['TOURID']=params.tourId;
    console.log(formData);
    dispatch(createNewCollaborationAsync({ formData, token }));

  }


  return (
    <div className="p-4 text-start w-100">

      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> Collaborate a Tour</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>Tour Collaboration Information</h5>
                    
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Price" icon="envelope" group type="number" validate error="wrong"
                        success="right" name='PRICE' value={formData.PRICE} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="6" className="py-1">
                      <MDBInput label="Quantity" icon="envelope" group type="number" validate error="wrong"
                        success="right" name='QTY' value={formData.QTY} onChange={handleChange} />
                    </MDBCol>

                    </MDBRow>
                  <hr />
                </div>
                <div className="text-end w-100">
                  <MDBBtn  color="danger" className="mx-2 my-5" href="/home/collaborate-tour">Close</MDBBtn><MDBBtn className="mx-2  my-5" href='#' onClick={onSubmit}>Collaborate</MDBBtn>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
