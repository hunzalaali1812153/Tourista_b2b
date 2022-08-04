import apiUtil from '../utilities/apiHelper'

export function GetAllHotelsList(data,token) {
  return apiUtil.getApi('transaction/gethotels', token, {})
}

export function GetHotelsList(data,token) {
  return apiUtil.getApi('transaction/gethotelshistory', token, {})
}

export function CreateNewHotel(data,token) {
  return apiUtil.postApi('transaction/createhotels', token, data)
}

export function GetHotelDetails(data,token) {
  return apiUtil.getApi('transaction/gethoteldetails', token, data)
}

export function deleteHotel(data,token) {
  return apiUtil.postApi('transaction/deletehotel', token, data)
}