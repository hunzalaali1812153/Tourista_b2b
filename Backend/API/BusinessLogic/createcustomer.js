const Customers = require('./Modules/Customers');
var modle = require('./Modules/Customers');
var smsModle = require('./Modules/SMSNotifications');

class createCustomers
{
    async input(req,message)
    {
            message.NAME=req.body.NAME;
            message.CUSTOMERPHONE=req.body.CUSTOMERPHONE;
            message.TOURID=req.body.TOURID;
            message.EMAIL=req.body.EMAIL;
            message.QTY=req.body.QTY;
           
    }
    async process(message)
    {
        try {
            await modle.createCustomers(message)
            await smsModle.send(message.CUSTOMERPHONE,'Your booking has been confirmed.')

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
