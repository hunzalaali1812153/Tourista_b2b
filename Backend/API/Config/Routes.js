module.exports = {
    "/transaction/testapi/:name": {
        controller: "testapi",
        allowedMethod: ['POST', 'GET']
    },
    "/transaction/testapi": {
        controller: "testapi",
        allowedMethod: ['POST']
    },

    "/transaction/testapi2": {
        controller: "testapi2",
        allowedMethod: ['POST','GET']
    },

    "/transaction/testapi3": {
        controller: "testapi3",
        allowedMethod: ['POST','GET']
    },

    "/transaction/createmembershiptype": {
        controller: "createmembershiptype",
        allowedMethod: ['POST']
    },

    "/transaction/createhotels": {
        controller: "createhotels",
        allowedMethod: ['POST']
    },

    "/transaction/getmembershiptype": {
        controller: "getmembershiptype",
        allowedMethod: ['GET']
    },



    "/transaction/gettourdetails": {
        controller: "gettourdetails",
        allowedMethod: ['GET']
    },
    
    "/transaction/gethoteldetails": {
        controller: "gethoteldetails",
        allowedMethod: ['GET']
    },
    
    "/transaction/gettransportdetails": {
        controller: "gettransportdetails",
        allowedMethod: ['GET']
    },
    
    "/transaction/deletetour": {
        controller: "deleteTour",
        allowedMethod: ['POST']
    },
    
    "/transaction/deletetransport": {
        controller: "deleteTransport",
        allowedMethod: ['POST']
    },
    
    "/transaction/deletehotel": {
        controller: "deleteHotel",
        allowedMethod: ['POST']
    },
    
    "/transaction/updatebookingstatus": {
        controller: "updateBookingStatus",
        allowedMethod: ['POST']
    },
    
    "/transaction/updatehotelbookingstatus": {
        controller: "updateHotelBookingStatus",
        allowedMethod: ['POST']
    },
    
    "/transaction/updatetransportbookingstatus": {
        controller: "updateTransportBookingStatus",
        allowedMethod: ['POST']
    },
    
    "/transaction/updatecollaboratestatus": {
        controller: "updateCollaborateStatus",
        allowedMethod: ['POST']
    },
    
    "/transaction/declinecollaboratestatus": {
        controller: "declineCollaborateStatus",
        allowedMethod: ['POST']
    },

    // "/transaction/gettourdetails1/:test2": {
    //     controller: "gettourdetails",
    //     allowedMethod: ['GET']
    // },


    "/transaction/gethotels": {
        controller: "gethotels",
        allowedMethod: ['GET']
    },

    "/transaction/gethotelshistory": {
        controller: "gethotelshistory",
        allowedMethod: ['GET']
    },

    "/transaction/test2": {
        controller: "test2",
        allowedMethod: ['POST']
    },
    "/transaction/getcenters": {
        controller: "GetCenter",
        allowedMethod: ['GET']
    },
    "/transaction/createcenter": {
        controller: "PostCenter",
        allowedMethod: ['POST']
    }, "/transaction/getpermissions": {
        controller: "GetPermission",
        allowedMethod: ['GET']
    },
    "/transaction/getuserpermissions": {
        controller: "GetUserPermission",
        allowedMethod: ['GET']
    },
    "/transaction/getuserroles": {
        controller: "GetRoles",
        allowedMethod: ['GET']
    },
    "/transaction/getusers": {
        controller: "GetUsers",
        allowedMethod: ['GET']
    },
    "/transaction/createuser": {
        controller: "PostUser",
        allowedMethod: ['POST']
    },
    "/transaction/myprofile": {
        controller: "GetProfile",
        allowedMethod: ['GET']
    },
    "/transaction/getusertype": {
        controller: "GetUserType",
        allowedMethod: ['GET']
    },
    "/transaction/changepassword": {
        controller: "ChangePassword",
        allowedMethod: ['POST']
    },
    "/transaction/resetpassword": {
        controller: "ResetPassword",
        allowedMethod: ['POST']
    },
    "/transaction/updateuser": {
        controller: "UpdateUser",
        allowedMethod: ['POST']
    },
    "/transaction/getchannel": {
        controller: "GetChannel",
        allowedMethod: ['GET']
    },
    "/child/newprofile": {
        controller: "PostChildProfile",
        allowedMethod: ['POST']
    },
    "/child/list": {
        controller: "GetChildProfiles",
        allowedMethod: ['GET']
    },
    "/donor/newprofile": {
        controller: "PostDonorProfile",
        allowedMethod: ['POST']
    },
    "/donor/list": {
        controller: "GetDonorProfiles",
        allowedMethod: ['GET']
    },
    "/donor/link/child": {
        controller: "PostLinkDonorChild",
        allowedMethod: ['POST']
    },
    "/donor/link/list": {
        controller: "GetDonorLinkedChilds",
        allowedMethod: ['GET']
    },
    "/donor/delink/child": {
        controller: "PostDeLinkDonorChild",
        allowedMethod: ['POST']
    },
    "/donor/details": {
        controller: "GetDonorDetails",
        allowedMethod: ['GET']
    },
    "/transaction/createannouncement": {
        controller: "createAnnouncement",
        allowedMethod: ['POST']
    },
    "/transaction/createtour": {
        controller: "createtour",
        allowedMethod: ['POST']
    },
    "/transaction/createtransport": {
        controller: "createTransport",
        allowedMethod: ['POST']
    },
    "/transaction/createcustomer": {
        controller: "createcustomer",
        allowedMethod: ['POST']

    },
    
    "/transaction/createcollaboration": {
        controller: "createCollaboration",
        allowedMethod: ['POST']

    },
    
    "/transaction/createhotelcustomer": {
        controller: "createhotelcustomer",
        allowedMethod: ['POST']
    },
    
    "/transaction/createtransportcustomer": {
        controller: "createtransportcustomer",
        allowedMethod: ['POST']
    },

    "/transaction/getcustomer": {
        controller: "getcustomer",
        allowedMethod: ['GET']
    },
    
    "/transaction/gethotelcustomer": {
        controller: "gethotelcustomer",
        allowedMethod: ['GET']
    },
    
    "/transaction/gettransportcustomer": {
        controller: "gettransportcustomer",
        allowedMethod: ['GET']
    },
    
    "/transaction/gettourcollaborate": {
        controller: "GetTourCollaborate",
        allowedMethod: ['GET']
    },
    
    "/transaction/getmytourcollaborate": {
        controller: "GetMyTourCollaborate",
        allowedMethod: ['GET']
    },

    "/transaction/getEvents": {
        controller: "getEvents",
        allowedMethod: ['GET']
    },
    "/transaction/updateEvent": {
        controller: "updateEvent",
        allowedMethod: ['GET','POST']
    },
    "/transaction/getannouncement": {
        controller: "GetAnnouncement",
        allowedMethod: ['GET']
    },
    "/transaction/getlastannouncement": {
        controller: "GetLastAnnouncement",
        allowedMethod: ['GET']
    },
    "/transaction/gettour": {
        controller: "GetTour",
        allowedMethod: ['GET']
    },
    "/transaction/gettourbyuserid": {
        controller: "GetTourHistory",
        allowedMethod: ['GET']
    },
    "/transaction/getcollabtour": {
        controller: "GetCollabTour",
        allowedMethod: ['GET']
    },
    "/transaction/gettransportbyuserid": {
        controller: "GetTransportHistory",
        allowedMethod: ['GET']
    },
    "/transaction/gettransport": {
        controller: "GetTransport",
        allowedMethod: ['GET']
    },
    "/transaction/updatequantity": {
        controller: "updateQuantity",
        allowedMethod: ['POST']
    },
}