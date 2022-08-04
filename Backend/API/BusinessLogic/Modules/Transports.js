const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class Transports
{
    async createNewTransport(message)
    {
    
        var results=await client.Query("insert into transports(type,company,model,price,status,createdBy,image,location) values(?,?,?,?,?,?,?,?)",
        [message.TYPE, message.COMPANY, message.MODEL, message.PRICE, message.STATUS, message.API_USER_ID, message.IMAGE, message.LOCATION]);
    }
    async getAllTransport()
    {
    
        var results=await client.Query("Select * from transports where isDeleted = 0",
        []);
        return results && results.length>0?results:[];
    }
    async getTransportsByUserId(message)
    {
    
        var results=await client.Query("Select * from transports where createdBy = ? and isDeleted = 0",
        [message.API_USER_ID]);
        return results && results.length>0?results:[];
    }
    async getTransportDetails(id)
    {
    
        var results=await client.Query("Select * from transports where id=?",
        [id]);
        return results && results.length>0?results[0]:null;
    }
    async deleteTransport(message)
    {
        var results=await client.Query("update transports set isDeleted=1 where id=?" , 
        [message.TRANSPORT_ID]);
    }
}
module.exports=new Transports();