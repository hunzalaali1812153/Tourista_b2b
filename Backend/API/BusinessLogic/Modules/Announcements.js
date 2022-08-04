const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class Announcements
{
    async createNewAnnouncement(message)
    {
    
        var results=await client.Query("insert into announcements(message,tourid) values(?,?) ",
        [message.MESSAGE,message.TOURID]);
    }
    async getAllAnnouncement(message)
    {
    
        var results=await client.Query("Select * from announcements where tourid = ?",
        [message.TOURID]);
        return results && results.length>0?results:[];
    }
    async getLastAnnouncement(message)
    {
    
        var results=await client.Query("Select * from announcements where tourid = ? order by time desc",
        [message.TOURID]);
        return results && results.length>0?results[0]:{};
    }
}
module.exports=new Announcements();