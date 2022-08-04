
var modle = require('./Modules/CollaborateTour');

class updateCollaborateStatus
{
    async input(req,message)
    {
            message.ID=req.body.id;
    }
    async process(message)
    {
        try {
            await modle.updateCollaborateStatus(message);

        }
        catch (ex) {
            console.log(ex);
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "Collaboration updated successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new updateCollaborateStatus();
