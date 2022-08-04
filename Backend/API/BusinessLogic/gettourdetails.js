var modle = require('./Modules/Tours');

class gettourdetails
{
    async input(req,message)
    {
        message.TOUR_ID = req.query.tourId
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
    message.DETAILS=await modle.getTourDetails(message.TOUR_ID)
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


module.exports= new gettourdetails();
