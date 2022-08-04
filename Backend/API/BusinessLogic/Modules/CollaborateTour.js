const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class CollaborateTour
{
    async createCollaboration(message)
    {
    
        var results=await client.Query("insert into tourcollaborate(operatorId,tourId,collaborationPrice,collaborationQuantity) values(?,?,?,?)",
        [message.API_USER_ID,message.TOURID,message.PRICE,message.QTY]);
    }
    async getTourCollaborate(message)
    {
    
        var results=await client.Query("Select * from tourcollaborate inner join tours  on tourcollaborate.tourId = tours.id inner join users on tourcollaborate.operatorId=users.UserName where tours.createdBy = ?",
        [message.API_USER_ID]);
        return results && results.length>0?results:[];
    }
    async getMyTourCollaborate(message)
    {
    
        var results=await client.Query("Select * from tourcollaborate inner join tours on tourcollaborate.tourId = tours.id where tourcollaborate.operatorId = ?",
        [message.API_USER_ID]);
        return results && results.length>0?results:[];
    }
    async updateCollaborateStatus(message)
    {
        var results=await client.Query("update tourcollaborate set collaborateStatus=1 where collaborationId=?" , 
        [message.ID]);
    }
    async declineCollaborateStatus(message)
    {
        var results=await client.Query("update tourcollaborate set collaborateStatus=2 where collaborationId=?" , 
        [message.ID]);
    }
}
module.exports=new CollaborateTour();