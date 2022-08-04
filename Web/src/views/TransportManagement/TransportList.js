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

import DataTable from 'react-data-table-component';
import { DeleteTransportAsync, getTransports, GetTransportsListAsync } from '../../reducers/TransportProfileSlice';

import { getToken, loginAsync } from '../../reducers/AuthSlice'
import { Link } from 'react-router-dom';

const columns = [
  {
    name: 'Type',
    selector: row => row.type,
  },
  {
    name: 'Company',
    selector: row => row.company,
  },
  {
    name: 'Model',
    selector: row => row.model,
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
    selector: row => <Link to={"/home/transport/details/" + row.id}><MDBBtn color='warning' size='sm'>Detail</MDBBtn> </Link>,
  },
  {
    name: 'Action',
    selector: row =><DeleteTransport id={row.id}/> ,
  },
];

function DeleteTransport(props) {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  
  return <Link to="#"  onClick={()=>{
    dispatch(DeleteTransportAsync({params:{transportId:props.id}, token }));   
  }}><MDBBtn color='danger' size='sm' href='#'>Delete</MDBBtn> </Link>
}

export function TransportList() {

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {

    dispatch(GetTransportsListAsync({ token }));
  }, []);
  const data = useSelector(getTransports);

  return (
    <div className="p-4 text-start ">
  
      <MDBCard alignment='center' >
      <MDBCardHeader className="text-start"><h5> Transport Management</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/transport/add' >Add a Transport</MDBBtn>
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
