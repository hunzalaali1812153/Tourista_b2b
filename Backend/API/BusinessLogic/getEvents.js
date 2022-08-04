
var modle = require('./Modules/Events');

class getEvents
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name;  
           // message.NAME=message.API_USER_ID; 
            // message.TYPEID=req.body.typeId 
            // message.TYPENAME=req.body.typeName
            message.TOURID = req.query.tourid
    }
    async process(message)
    {
       try{ 
       message.LIST = await modle.getEvents(message)}
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


module.exports= new getEvents();
