var modle = require('./Modules/hotels');

class gethoteldetails
{
    async input(req,message)
    {
        message.HOTEL_ID = req.query.hotelId
        // message.TEST2 = req.params.test2
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name;  
           // message.NAME=message.API_USER_ID; 
            // message.TYPEID=req.body.typeId 
            // message.TYPENAME=req.body.typeName
             
    }
    async process(message)
    {
    //    try{ 
    //    message.LIST = await modle.getmembershiptype(message)}
    //    catch(ex){console.log (ex)}
    message.DETAILS=await modle.getHotelDetails(message.HOTEL_ID)
    }
    async output(res,message)
    {
        res.responseBody.details=  message.DETAILS;
        res.status="Success";
        console.log(message);

    }
    inputValidation(req)
    {

    }
    
}


module.exports= new gethoteldetails();
