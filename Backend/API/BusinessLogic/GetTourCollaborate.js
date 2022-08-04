var modle = require('./Modules/CollaborateTour');


class GetTourCollaborate {
    async input(req, message) {
       

       // message.CHANNEL_NAME = req.body.channelName?? "";

    }
    async process(message) {
       
        try {
            message.LIST=await modle.getTourCollaborate(message);
        }
        catch (ex) {
            console.log(JSON.stringify(ex));
        }
    }
    async output(res, message) {
        res.responseBody.list=message.LIST;
        res.status = "Success";
    }
    inputValidation(req) {

    }

}

module.exports = new GetTourCollaborate();
