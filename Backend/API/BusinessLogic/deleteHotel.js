
var modle = require('./Modules/hotels');

class deleteHotel
{
    async input(req,message)
    {
            message.HOTEL_ID=req.body.hotelId;
    }
    async process(message)
    {
        try {
            await modle.deleteHotel(message);

        }
        catch (ex) {
            console.log(ex);
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "Hotel deleted successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new deleteHotel();
