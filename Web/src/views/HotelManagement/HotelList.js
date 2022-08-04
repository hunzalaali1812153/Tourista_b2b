import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
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

import DataTable from 'react-data-table-component';
import { DeleteHotelAsync, getHotels, GetHotelsListAsync } from '../../reducers/HotelProfileSlice';
import { getToken } from '../../reducers/AuthSlice';
import { Link } from 'react-router-dom';

const columns = [
  {
    name: 'Name',
    selector: row => row.hotelName,
  },
  {
    name: 'Location',
    selector: row => row.hotelLocation,
  },
  {
    name: 'Room Price',
    selector: row => row.roomPrice,
  },
  {
    name: 'Description',
    selector: row => row.hotelDescription,
  },
  {
    name: 'Facilities',
    selector: row => row.hotelFacilities,
  },
  {
    name: 'Status',
    selector: row => row.hotelStatus,
  },
  {
    name: 'Detail',
    selector: row => <Link to={"/home/hotel/details/" + row.id}><MDBBtn color='warning' size='sm'>Detail</MDBBtn> </Link>,
  },
  {
    name: 'Action',
    selector: row =><DeleteHotel id={row.id}/> ,
  },
];

function DeleteHotel(props) {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  
  return <Link to="#"  onClick={()=>{
    dispatch(DeleteHotelAsync({params:{hotelId:props.id}, token }));   
  }}><MDBBtn color='danger' size='sm' href='#'>Delete</MDBBtn> </Link>
}

export function HotelList() {

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {

    dispatch(GetHotelsListAsync({ token }));
  }, []);
  const data = useSelector(getHotels);

  return (
    <div className="p-4 text-start ">
  
      <MDBCard alignment='center' >
      <MDBCardHeader className="text-start"><h5> Hotel Management</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/hotel/add' >Add a Hotel</MDBBtn>
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
