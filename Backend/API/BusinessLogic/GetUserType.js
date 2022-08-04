var modle= require('./Modules/Users');
var systemConfig = require('./Modules/SystemConfigurations');
var Axios=require('axios');

class GetUserType{
    async input(req, message) {
       
       

       // message.CHANNEL_NAME = req.body.channelName?? "";

    }
    async process(message) {
       
        try {
            message.USER=await modle.getUserType(message.API_USER_ID)
           
        }
        catch (ex) {
            console.log(JSON.stringify(ex));
        }
    }
    async output(res, message) {
        res.responseBody.details=message.USER?{
            type:message.USER.userType
        }:{}
        res.status = "Success";
    }
    inputValidation(req) {

    }

}

module.exports = new GetUserType();
