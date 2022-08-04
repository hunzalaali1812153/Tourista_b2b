var modle = require('./Modules/Transports');


class GetTransportHistory {
    async input(req, message) {
       

       // message.CHANNEL_NAME = req.body.channelName?? "";

    }
    async process(message) {
       
        try {
            message.TRANSPORTS=await modle.getTransportsByUserId(message);
        }
        catch (ex) {
            console.log(JSON.stringify(ex));
        }
    }
    async output(res, message) {
        res.responseBody.transports=message.TRANSPORTS;
        res.status = "Success";
    }
    inputValidation(req) {

    }

}

module.exports = new GetTransportHistory();
