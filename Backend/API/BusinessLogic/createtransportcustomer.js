var modle = require('./Modules/TransportCustomers');

class createCustomers
{
    async input(req,message)
    {
            message.NAME=req.body.NAME;
            message.CUSTOMERPHONE=req.body.CUSTOMERPHONE;
            message.TRANSPORTID=req.body.TRANSPORTID;
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
