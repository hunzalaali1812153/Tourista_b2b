
var modle = require('./Modules/HotelCustomers');

class updateBookingStatus
{
    async input(req,message)
    {
            message.ID=req.body.id;
    }
    async process(message)
    {
        try {
            await modle.updateBookingStatus(message);

        }
        catch (ex) {
            console.log(ex);
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "Booking updated successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new updateBookingStatus();
