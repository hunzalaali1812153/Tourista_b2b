var modle = require('./Modules/Transports');


class GetTransport {
    async input(req, message) {
       

       // message.CHANNEL_NAME = req.body.channelName?? "";

    }
    async process(message) {
       
        try {
            message.TRANSPORTS=await modle.getAllTransport();
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

module.exports = new GetTransport();
