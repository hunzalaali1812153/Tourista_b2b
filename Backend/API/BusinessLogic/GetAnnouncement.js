var modle = require('./Modules/Announcements');


class GetAnnouncement {
    async input(req, message) {
       
message.TOURID = req.query.tourid
       // message.CHANNEL_NAME = req.body.channelName?? "";

    }
    async process(message) {
       
        try {
            message.ANNOUNCEMENTS=await modle.getAllAnnouncement(message);
           
        }
        catch (ex) {
            console.log(JSON.stringify(ex));
        }
    }
    async output(res, message) {
        res.responseBody.announcements=message.ANNOUNCEMENTS;
        res.status = "Success";
    }
    inputValidation(req) {

    }

}

module.exports = new GetAnnouncement();
