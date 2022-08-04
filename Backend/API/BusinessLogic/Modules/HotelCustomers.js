const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class HotelCustomers
{
    async createCustomers(message)
    {
    
        var results=await client.Query("insert into customerhotelmap(name,phone,hotelId,email) values(?,?,?,?)",
        [message.NAME,message.CUSTOMERPHONE,message.HOTELID,message.EMAIL]);
    }
    async getCustomers(message)
    {
    
        var results=await client.Query("Select * from customerhotelmap where hotelId = ?",
        [message.HOTELID]);
        return results && results.length>0?results:[];
    }
    async updateBookingStatus(message)
    {
        var results=await client.Query("update customerhotelmap set bookingStatus=1 where id=?" , 
        [message.ID]);
    }
}
module.exports=new HotelCustomers();