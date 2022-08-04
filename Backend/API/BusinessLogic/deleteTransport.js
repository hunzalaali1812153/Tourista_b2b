
var modle = require('./Modules/Transports');

class deleteTransport
{
    async input(req,message)
    {
            message.TRANSPORT_ID=req.body.transportId;
    }
    async process(message)
    {
        try {
            await modle.deleteTransport(message);

        }
        catch (ex) {
            console.log(ex);
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "Transport deleted successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new deleteTransport();
