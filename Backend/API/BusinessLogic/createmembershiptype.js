var modle = require('./Modules/MembershipType');

class createmembershiptype
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name;  
           // message.NAME=message.API_USER_ID; 
            message.TYPEID=req.body.typeId 
            message.TYPENAME=req.body.typeName
             
    }
    async process(message)
    {
       try{ 
       await modle.createNewType(message)}
       catch(ex){console.log (ex)}
    }
    async output(res,message)
    {
        res.responseBody.loopBackName=message.NAME;
        res.status="Success";
        res.responseBody.TEST=message.TEST
        res.responseBody.TOTAl=message.TOTAl
        res.responseBody.message="memebership type created success"
    }
    inputValidation(req)
    {

    }
    
}


module.exports= new createmembershiptype();
