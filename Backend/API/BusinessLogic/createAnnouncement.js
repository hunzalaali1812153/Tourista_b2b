
var modle = require('./Modules/Announcements');

class createAnnouncement
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name;  
            //message.TITLE=req.body.TITLE;
            message.MESSAGE=req.body.MESSAGE;
            message.TOURID=req.body.TOURID;
    }
    async process(message)
    {
        try {
            await modle.createNewAnnouncement(message);

        }
        catch (ex) {
            console.log(JSON.stringify(ex));
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "announcement created successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new createAnnouncement();
