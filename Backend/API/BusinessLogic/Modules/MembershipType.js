const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class MembershipType
{
    async createNewType(message)
    {
    
        var results=await client.Query("insert into membershiptype(typeName,typeId) values(?,?)",
        [message.TYPEID, message.TYPENAME]);
    }
    async getmembershiptype()
    {
    
        var results=await client.Query("Select * from membershiptype",
        []);
        return results && results.length>0?results:[];
    }
}
module.exports=new MembershipType();