
class testapi
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name;  
            message.NAME=message.API_USER_ID;
            message.num1=req.body.num1;
            message.num2=req.body.num2;
            message.num3=req.body.num3;
            message.num=req.body.num;
    }
    async process(message)
    {
        message.NAME=message.NAME+" Ashar Ali";
        message.total= message.num1 * message.num2 * message.num3;

        message.largest = message.num[0]
        message.smallest = message.num[0]

        for (var i = 0; i < message.num.length; i++) {
            if (message.largest < message.num[i] ) {
                message.largest = message.num[i];
            }
        }

        for (var i = 0; i < message.num.length; i++) {
            if (message.smallest > message.num[i] ) {
                message.smallest = message.num[i];
            }
        }
    }
    async output(res,message)
    {
        res.responseBody.loopBackName=message.NAME;
        res.responseBody.mul=message.total;
        res.responseBody.array=message.num;

        res.responseBody.max=message.largest;
        res.responseBody.min=message.smallest;
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new testapi();
