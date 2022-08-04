const Customers = require('./Modules/Customers');
var modle = require('./Modules/CollaborateTour');

class createCollaboration
{
    async input(req,message)
    {
            message.TOURID=req.body.TOURID;
            message.PRICE=req.body.PRICE;
            message.QTY=req.body.QTY;
           
    }
    async process(message)
    {
        try {
            await modle.createCollaboration(message);

        }
        catch (ex) {
            console.log(JSON.stringify(ex));
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "Collaboration sent successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new createCollaboration();
