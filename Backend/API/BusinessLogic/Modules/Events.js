const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class Events
{
    async getEventByEventId(message)
    {
    
        var results=await client.Query("select * from events where id = ?",
        [message.EVENTID]);
        return results && results.length>0?results[0]:null;
    }
    async getEvents(message)
    {
    
        var results=await client.Query("Select * from events where tourid = ?",
        [message.TOURID]);
        return results && results.length>0?results:[];
    }
    async UpdateGuestByEventId(message)
    {
    
        var results=await client.Query("update events set guestid=? where id = ?",
        [message.GUESTLIST,message.EVENTID]);
        
    }
}
module.exports=new Events();