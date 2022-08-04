
var modle = require('./Modules/Events');

class updateEvent
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name;  
           // message.NAME=message.API_USER_ID; 
            // message.TYPEID=req.body.typeId 
            // message.TYPENAME=req.body.typeName
            message.EVENTID = req.body.eventid
            message.GUESTID = req.body.guestid
    }
    async process(message)
    {
       try{ 
       var det = await modle.getEventByEventId(message);
       message.GUESTLIST=det.guestid+","+message.GUESTID;
       await modle.UpdateGuestByEventId(message)
    }
       catch(ex){console.log (ex)}
    }
    async output(res,message)
    {
        res.responseBody.loopBackName=message.NAME;
        res.status="Success";
        res.responseBody.TEST=message.TEST
        res.responseBody.TOTAl=message.TOTAl
        res.responseBody.message="memebership type created success"
        res.responseBody.list= message.LIST
    }
    inputValidation(req)
    {

    }
    
}


module.exports= new updateEvent();
