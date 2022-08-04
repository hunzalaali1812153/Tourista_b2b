var modle = require('./Modules/HotelCustomers');

class createCustomers
{
    async input(req,message)
    {
            message.NAME=req.body.NAME;
            message.CUSTOMERPHONE=req.body.CUSTOMERPHONE;
            message.HOTELID=req.body.HOTELID;
            message.EMAIL=req.body.EMAIL;
           
    }
    async process(message)
    {
        try {
            await modle.createCustomers(message);

        }
        catch (ex) {
            console.log(JSON.stringify(ex));
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "Booking created successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new createCustomers();
