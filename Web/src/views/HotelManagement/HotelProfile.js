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
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCardHeader,
  MDBBadge,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBTable,
  MDBTableBody,
  MDBTableHead,

} from 'mdb-react-ui-kit';

import DataTable from 'react-data-table-component';
import { GetTourDetailsAsync } from '../../reducers/TourProfileSlice';
import { getToken } from '../../reducers/AuthSlice';
import { useParams } from 'react-router';
import slider1 from '../Assets/slider1.png'
import { getCustomer, GetCustomersListAsync, getHotelCustomer, GetHotelCustomersListAsync, updateBookingStatusAsync, updateHotelBookingStatusAsync } from '../../reducers/CustomerProfileSlice';

import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from 'react-router-dom';
import { GetHotelDetailsAsync } from '../../reducers/HotelProfileSlice';

const statusMap = { "1": "Active", "2": "Suspended", "3": "Dropped" };

const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Phone Number',
    selector: row => row.phone,
  },
  {
    name: 'Email',
    selector: row => row.email,
  },
  {
    name: 'Booking Status',
    selector: row => (row.bookingStatus == 1?"Active":"Pending"),
  },
  {
    name: 'Action',
    selector: row =>(row.bookingStatus == 0? <Active id={row.id}/>: "Active") ,
  }
];

function Active(props) {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  
  return <Link to="" onClick={()=>{
    dispatch(updateHotelBookingStatusAsync({params:{id:props.id}, token }));
  }}><MDBBtn color='danger' size='sm' >Active Booking</MDBBtn> </Link>
}



export const HotelProfile = (props) => {
  
  const dispatch = useDispatch();
  let params = useParams();
  
  const token = useSelector(getToken);
  useEffect(() => {
    console.log('effect');
    dispatch(GetHotelDetailsAsync({params:{hotelId:params.hotelId,},token}))
  }, []);

  useEffect(() => {

    dispatch(GetHotelCustomersListAsync({params:{hotelid:params.hotelId,},token }));
  }, []);
  const data = useSelector(getHotelCustomer);

  console.log('data',data)


  var formData = useSelector(state => state.HotelSlice.profileData);

  console.log(formData)

  const [fillActive, setFillActive] = useState('tab1');
 
  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  
  const images = [
    {
      original: formData.image,
      thumbnail: formData.image,
    }
  ];
  
  return (
    <div className="p-4 text-start w-100">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a >Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <a href='/home/hotel'>Hotel</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>{formData.hotelName}</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> {formData.name}</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow >
              <MDBCol size="12">
              <ImageGallery items={images} />


                {/* <h4 className='mt-3'>{formData.details.hotelName}</h4> */}
                {/* <p className=''> {badge} </p> */}
                <hr />
              </MDBCol>
              <MDBCol size="12">
                <MDBTabs fill className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                      Details
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                      Guests
                    </MDBTabsLink>
                  </MDBTabsItem>

                </MDBTabs>

                <MDBTabsContent>
                  <MDBTabsPane show={fillActive === 'tab1'}><div>
                  
    <MDBTable >
      <MDBTableBody >
        <tr>
          <th scope='row'>Name</th>
          <td>{formData.hotelName}</td>
        </tr>
        <tr>
          <th scope='row'>Location</th>
          <td>{formData.hotelLocation}</td>
        </tr>
        <tr>
          <th scope='row'>Price</th>
          <td>{formData.roomPrice}</td>
        </tr>
        <tr>
          <th scope='row'>Status</th>
          <td>{formData.hotelStatus}</td>
        </tr>
        <tr>
          <th scope='row'>Facilities</th>
          <td>{formData.hotelFacilities}</td>
        </tr>
        <tr>
          <th scope='row'>Description</th>
          <td>{formData.hotelDescription}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
                    </div></MDBTabsPane>
                  <MDBTabsPane show={fillActive === 'tab2'}><div>
                  <MDBCard alignment='left' >
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
      </div></MDBTabsPane>
                </MDBTabsContent>
              </MDBCol>
            
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
