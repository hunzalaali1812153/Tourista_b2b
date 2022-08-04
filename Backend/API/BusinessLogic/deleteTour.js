
var modle = require('./Modules/Tours');

class deleteTour
{
    async input(req,message)
    {
            message.TOUR_ID=req.body.tourId;
    }
    async process(message)
    {
        try {
            await modle.deleteTour(message);

        }
        catch (ex) {
            console.log(ex);
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "Tour deleted successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new deleteTour();
