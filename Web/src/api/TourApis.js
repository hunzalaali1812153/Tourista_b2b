import apiUtil from '../utilities/apiHelper'

export function GetAllToursList(data,token) {
  return apiUtil.getApi('transaction/gettour', token, {})
}

export function GetToursList(data,token) {
  return apiUtil.getApi('transaction/gettourbyuserid', token, {})
}

export function GetCollabToursList(data,token) {
  return apiUtil.getApi('transaction/getcollabtour', token, {})
}

export function CreateNewTour(data,token) {
  return apiUtil.postApi('transaction/createtour', token, data)
}

export function GetTourDetails(data,token) {
  return apiUtil.getApi('transaction/gettourdetails', token, data)
}

export function DeleteTour(data,token) {
  return apiUtil.postApi('transaction/deletetour', token, data)
}

export function UpdateTour(data,token) {
  return apiUtil.postApi('transaction/updatequantity', token, data)
}