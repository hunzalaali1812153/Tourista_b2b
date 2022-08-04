import React, { useState, useEffect } from 'react';
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

import { Link } from 'react-router-dom';

import DataTable from 'react-data-table-component';

import { TourDetails } from './TourSetup';
import { getToken, loginAsync } from '../../reducers/AuthSlice'
import { GetToursList } from '../../api/TourApis';
import { DeleteTourAsync, getTours, GetToursListAsync } from '../../reducers/TourProfileSlice';
const columns = [
  {
    name: 'Tour',
    selector: row => row.name,
  },
  {
    name: 'Days',
    selector: row => row.days,
  },
  {
    name: 'Departure from',
    selector: row => row.departure,
  },
  {
    name: 'Destination',
    selector: row => row.destination,
  },
  {
    name: 'Price',
    selector: row => row.price,
  },
  {
    name: 'Status',
    selector: row => row.status,
  },
  {
    name: 'Detail',
    selector: row => <Link to={"/home/tour/details/" + row.id}><MDBBtn color='warning' size='sm'>Detail</MDBBtn> </Link>,
  },
  {
    name: 'Action',
    selector: row =><DeleteTour id={row.id}/> ,
  },
];

function DeleteTour(props) {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  
  return <Link to="#"  onClick={()=>{
    dispatch(DeleteTourAsync({params:{tourId:props.id}, token }));   
  }}><MDBBtn color='danger' size='sm' href='#'>Delete</MDBBtn> </Link>
}
export function TourList() {

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {

    dispatch(GetToursListAsync({ token }));
  }, []);
  const data = useSelector(getTours);

  return (
    <div className="p-4 text-start ">
  
      <MDBCard alignment='center' >
      <MDBCardHeader className="text-start"><h5> Tour Management</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/tour/add' >Create New</MDBBtn>
        </div>
        <MDBRow>
          <MDBCardBody>
            <DataTable
              pagination="true"
              columns={columns}
              data={data}
           
            />
          </MDBCardBody>
        </MDBRow>
      </MDBCard>

    </div>
  );
}
