
var modle = require('./Modules/Tours');
var sysmodle = require('./Modules/SystemConfigurations');

class createTour
{
    async input(req,message)
    {
            message.NAME=req.body.NAME;
            message.DAYS=req.body.DAYS;
            message.DESTINATION=req.body.DESTINATION;
            message.DEPARTURE=req.body.DEPARTURE;
            message.PRICE=req.body.PRICE;
            message.STATUS=req.body.STATUS;
            message.SHORT_DESC=req.body.SHORT_DESC;
            message.LONG_DESC=req.body.LONG_DESC;
            message.QTY=req.body.QTY;
            message.EVENTNAMES=req.body.EVENTNAMES;
            message.IMAGE=req.body.IMAGE;
            console.log(message);
    }
    async process(message)
    {
        try {
            var tourId=parseInt(await sysmodle.getNextSeqValue("tourid"));
            message.TOUR_ID=tourId;
            await modle.createNewTour(message);
            if(message.EVENTNAMES)
        {
            var event=message.EVENTNAMES.split(",");
            for(var i=0;i<event.length;i++)
            {
                await modle.createNewEvent(message.TOUR_ID,event[i]);
            }
        }

        }
        catch (ex) {
            console.log(JSON.stringify(ex));
        }
        
    }
    async output(res,message)
    {
        res.responseBody.message = "Tour created successfully"
        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new createTour();
