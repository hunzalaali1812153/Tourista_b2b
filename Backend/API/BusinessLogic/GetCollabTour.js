var modle = require('./Modules/Tours');


class GetTourHistory {
    async input(req, message) {
       

       // message.CHANNEL_NAME = req.body.channelName?? "";

    }
    async process(message) {
       
        try {
            message.TOURS=await modle.getCollabTours(message);
        }
        catch (ex) {
            console.log(JSON.stringify(ex));
        }
    }
    async output(res, message) {
        res.responseBody.tours=message.TOURS;
        res.status = "Success";
    }
    inputValidation(req) {

    }

}

module.exports = new GetTourHistory();
