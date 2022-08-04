var modle = require('./Modules/hotels');

class createhotels
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name;  
           // message.NAME=message.API_USER_ID; 
            message.HOTELNAME=req.body.hotelName 
            message.HOTELLOCATION=req.body.hotelLocation
            message.ROOMPRICE=req.body.roomPrice 
            message.HOTELFACILITIES=req.body.hotelFacilities
            message.HOTELDESCRIPTION=req.body.hotelDescription 
            message.HOTELSTATUS=req.body.hotelStatus
            message.IMAGE=req.body.image
             
    }
    async process(message)
    {
       try{ 
       await modle.createNewType(message)}
       catch(ex){console.log (ex)}
    }
    async output(res,message)
    {
        res.responseBody.loopBackName=message.NAME;
        res.status="Success";
        res.responseBody.TEST=message.TEST
        res.responseBody.TOTAl=message.TOTAl
        res.responseBody.message="Hotel added successfully"
    }
    inputValidation(req)
    {

    }
    
}


module.exports= new createhotels();
