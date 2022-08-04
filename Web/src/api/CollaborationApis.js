import apiUtil from '../utilities/apiHelper'

export function createCollaboration(data,token) {
  return apiUtil.postApi('transaction/createcollaboration', token, data)
}

export function GetTourCollaborate(data,token) {
  return apiUtil.getApi('transaction/gettourcollaborate', token, data)
}

export function GetMyTourCollaborate(data,token) {
  return apiUtil.getApi('transaction/getmytourcollaborate', token, data)
}

export function updateCollaborateStatus(data,token) {
  return apiUtil.postApi('transaction/updatecollaboratestatus', token, data)
}

export function declineCollaborateStatus(data,token) {
  return apiUtil.postApi('transaction/declinecollaboratestatus', token, data)
}