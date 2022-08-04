const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class Customers
{
    async createCustomers(message)
    {
    
        var results=await client.Query("insert into customertourmap(name,customerPhone,tourid,email,quantity) values(?,?,?,?,?)",
        [message.NAME,message.CUSTOMERPHONE,message.TOURID,message.EMAIL,message.QTY]);
    }
    async getCustomers(message)
    {
    
        var results=await client.Query("Select * from customertourmap where tourid = ?",
        [message.TOURID]);
        return results && results.length>0?results:[];
    }
    async updateBookingStatus(message)
    {
        var results=await client.Query("update customertourmap set bookingStatus=1 where id=?" , 
        [message.ID]);
    }
}
module.exports=new Customers();