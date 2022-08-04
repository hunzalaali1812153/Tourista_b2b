const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class TransportCustomers
{
    async createCustomers(message)
    {
    
        var results=await client.Query("insert into customertransportmap(name,phone,transportId,email) values(?,?,?,?)",
        [message.NAME,message.CUSTOMERPHONE,message.TRANSPORTID,message.EMAIL]);
    }
    async getCustomers(message)
    {
    
        var results=await client.Query("Select * from customertransportmap where transportId = ?",
        [message.TRANSPORTID]);
        return results && results.length>0?results:[];
    }
    async updateBookingStatus(message)
    {
        var results=await client.Query("update customertransportmap set bookingStatus=1 where id=?" , 
        [message.ID]);
    }
}
module.exports=new TransportCustomers();