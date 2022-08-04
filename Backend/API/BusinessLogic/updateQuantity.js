var modle = require('./Modules/Tours');

class updateQuantity
{
    async input(req,message)
    {
        message.TOUR_ID = req.body.tourId
        message.QTY = req.body.qty
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
    console.log(message);
    var updatedQty = parseInt(`${message.DETAILS.quantity}`) - parseInt(`${message.QTY}`)
    await modle.updateTour(updatedQty, message.TOUR_ID)
    console.log(updatedQty)
    }
    async output(res,message)
    {
        res.responseBody.details=  message.DETAILS;
        res.responseBody.message = "Booking updated successfully"
        res.status="Success";

    }
    inputValidation(req)
    {

    }
    
}


module.exports= new updateQuantity();
