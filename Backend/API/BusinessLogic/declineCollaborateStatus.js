
var modle = require('./Modules/CollaborateTour');

class declineCollaborateStatus
{
    async input(req,message)
    {
            message.ID=req.body.id;
    }
    async process(message)
    {
        try {
            await modle.declineCollaborateStatus(message);

        }
        catch (ex) {
            console.log(ex);
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "Collaboration declined successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new declineCollaborateStatus();
