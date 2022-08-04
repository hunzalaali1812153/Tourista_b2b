import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Navigate, useParams, Link } from 'react-router-dom';
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
  slider,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import { getToken, loginAsync, resetToken } from '../../reducers/AuthSlice'
import { getAllTours, GetAllToursListAsync, getCollabTours, GetCollabToursListAsync, getTours, GetToursListAsync, UpdateTourAsync } from '../../reducers/TourProfileSlice';
import collab from '../Assets/collaboration.png'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import { declineCollaborateStatusAsync, getCollaboration, getMyCollaboration, GetMyTourCollaborateAsync, GetTourCollaborateAsync, updateCollaborateStatusAsync } from '../../reducers/CollaborationProfileSlice';



function Status(props) {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  
  return (
  <>
  <MDBCol size='2'>
  <Link to="#"  onClick={()=>{
    dispatch(updateCollaborateStatusAsync({params:{id:props.id}, token }));
    console.log('req' , props.tourId, props.qty)
    dispatch(UpdateTourAsync({params:{tourId:props.tourId,qty:props.qty}, token }));
  }}><MDBBtn style={{ backgroundColor: "#30B4BA" }} href='#' >Accept</MDBBtn> </Link>
  </MDBCol>
  
  <MDBCol size='2'>
  <Link to="#"  onClick={()=>{
    dispatch(declineCollaborateStatusAsync({params:{id:props.id}, token }));
  }}><MDBBtn color='danger' href='#' >Decline</MDBBtn> </Link>
  </MDBCol>
  </>
  )
}

export function CollaborationList() {
  const [basicModal, setBasicModal] = useState(false);
  const [details, setDetailsMode] = useState({});

  const toggleShow = (e) => {
    setDetailsMode(e);

    console.log(details.Name);
    setBasicModal(!basicModal);
  }
  
  let params = useParams();
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  useEffect(() => {

     dispatch(GetTourCollaborateAsync({ token }));
     dispatch(GetMyTourCollaborateAsync({ token }));
  }, []);
   const data = useSelector(getCollaboration);
  const data1 = useSelector(getMyCollaboration);
  console.log('collaborations', data);
  let navigate = useNavigate()
  let location = useLocation()
  const [showNav, setShowNav] = useState(false);

  const [fillActive, setFillActive] = useState('tab1');
 
  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
  
  
  var list = [];
  console.log(typeof data);
  console.log(typeof list);
  if (data&&Array.isArray(data)) {
    var temp = data;
    temp.forEach(val => {
      list.push(<MDBCol size='12' className='my-3'>
        <MDBCard className="">
          <MDBCardBody className='text-start'>
            <MDBRow>
            <MDBCol size='3'>
               <div>
                 <img src={collab} width="120px"/>
               </div>
              </MDBCol>
              <MDBCol size='5'>
                <h5 className='text-left'>Tour: {val.name}</h5>
                <div className='text-left'>Operator Name: {val.Name}</div>
              </MDBCol>
              <MDBCol size='3' className='text-end'>
                <div className='text-left'><MDBIcon icon="users" /> Guests {val.collaborationQuantity}</div>
                <div className='text-left'>Amount: {val.collaborationPrice}</div>
                <br />
                <MDBBtn  onClick={()=>toggleShow(val)}>View Details</MDBBtn></MDBCol>
                <MDBRow className='d-flex justify-content-center '>
                  
                {val.collaborateStatus == 0?<Status id={val.collaborationId} tourId={val.tourId} qty={val.collaborationQuantity} />: val.collaborateStatus == 1? "Accepted":"Declined"}
                  
                </MDBRow>
            </MDBRow>


          </MDBCardBody>
        </MDBCard>
      </MDBCol>)
    })
  }
  
  var list1 = [];
  if (data1&&Array.isArray(data1)) {
    var temp = data1;
    temp.forEach(val => {
      list1.push(<MDBCol size='12' className='my-3'>
        <MDBCard className="">
          <MDBCardBody className='text-start'>
            <MDBRow>
            <MDBCol size='3'>
               <div>
                 <img src={collab} width="120px"/>
               </div>
              </MDBCol>
              <MDBCol size='5'>
                <h5 className='text-left'>Tour: {val.name}</h5>
                <div className='text-left'>Collaboration Status: {val.collaborateStatus == 0? "Pending": val.collaborateStatus == 1? "Accepted":"Declined"}</div>
              </MDBCol>
              <MDBCol size='3' className='text-end'>
                <div className='text-left'><MDBIcon icon="users" /> Guests {val.collaborationQuantity}</div>
                <div className='text-left'>Amount: {val.collaborationPrice}</div>
                <br />
                </MDBCol>
                
            </MDBRow>


          </MDBCardBody>
        </MDBCard>
      </MDBCol>)
    })
  }
console.log(details,"Test")
  return (
    <div>

      <MDBCard>
      <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}>Collaboration Management</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow >

      <MDBCol size="12">
                <MDBTabs fill className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                      Collaboration Requests Recieved
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                      My Collaboration Requests
                    </MDBTabsLink>
                  </MDBTabsItem>

                </MDBTabs>

                <MDBTabsContent>
                  <MDBTabsPane show={fillActive === 'tab1'}><div>
                  <MDBRow className='d-flex justify-content-center '>
                    <MDBCol size='8'>
                    {list}
                    </MDBCol>
                  </MDBRow>
                  </div></MDBTabsPane>

                  <MDBTabsPane show={fillActive === 'tab2'}><div>
                  <MDBRow className='d-flex justify-content-center '>
                    <MDBCol size='8'>
                    {list1}
                    </MDBCol>
                  </MDBRow>
                  </div></MDBTabsPane>
                </MDBTabsContent>
              </MDBCol>

              </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

      
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Operator Information</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody className='text-start px-5'>
            <div>Name: {details.Name}</div>
            <div>Phone: {details.Phone}</div>
            <div>Email: {details.Email}</div>
            <div>Address: {details.Address}</div>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShow}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>


    </div>
  );
}
