const dbmgr = require('../../../custom_modules/dbInstance');
var client = dbmgr.getDbClient();
var Axios = require('axios');

class SMSNotifications {
    async send(phone, message) {
        if (phone) {
            try {
                var query="https://lifetimesms.com/json?api_token=a829ba6cb68c2575bdcd4e545075bce1f427a95507&api_secret=ejaaratlabs8&to=92" + phone.substring(1, phone.length) + "&message=" + message;
                console.log(query)
                Axios.get("https://lifetimesms.com/json?api_token=a829ba6cb68c2575bdcd4e545075bce1f427a95507&api_secret=ejaarat&from=SMSAlert&to=92" + phone.substring(1, phone.length) + "&message=" + message).then(response => {
                    console.log(response)
                })
                    .catch(error => {
                        console.log(error)
                    });
            }
            catch (ex) {
                console.log(ex);
            }
        }
    }

}
module.exports = new SMSNotifications();