import apiUtil from '../utilities/apiHelper'

export function GetAllTransportsList(data,token) {
  return apiUtil.getApi('transaction/gettransport', token, {})
}

export function GetTransportsList(data,token) {
  return apiUtil.getApi('transaction/gettransportbyuserid', token, {})
}

export function CreateNewTransport(data,token) {
  return apiUtil.postApi('transaction/createtransport', token, data)
}

export function GetTransportDetails(data,token) {
  return apiUtil.getApi('transaction/gettransportdetails', token, data)
}

export function deleteTransport(data,token) {
  return apiUtil.postApi('transaction/deletetransport', token, data)
}