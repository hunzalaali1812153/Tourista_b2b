
class testapi2
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name;  
           // message.NAME=message.API_USER_ID; 
            message.TEST=req.body.TEST  
            message.num1=req.body.num1
            message.num2=req.body.num2  
    }
    async process(message)
    {
        message.NAME=message.NAME+" Ashar Ali";
        message.TEST=message.TEST+"TEST"
        message.TOTAl=message.num1>message.num2
    }
    async output(res,message)
    {
        res.responseBody.loopBackName=message.NAME;
        res.status="Success";
        res.responseBody.TEST=message.TEST
        res.responseBody.TOTAl=message.TOTAl
    }
    inputValidation(req)
    {

    }
    
}


module.exports= new testapi2();
