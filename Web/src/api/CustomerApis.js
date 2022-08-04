import apiUtil from '../utilities/apiHelper'

export function GetCustomersList(data,token) {
  return apiUtil.getApi('transaction/getcustomer', token, data)
}

export function GetHotelCustomersList(data,token) {
  return apiUtil.getApi('transaction/gethotelcustomer', token, data)
}

export function GetTransportCustomersList(data,token) {
  return apiUtil.getApi('transaction/gettransportcustomer', token, data)
}

export function CreateCustomers(data,token) {
  return apiUtil.postApi('transaction/createcustomer', token, data)
}

export function CreateHotelCustomers(data,token) {
  return apiUtil.postApi('transaction/createhotelcustomer', token, data)
}

export function CreateTransportCustomers(data,token) {
  return apiUtil.postApi('transaction/createtransportcustomer', token, data)
}

export function updateBookingStatus(data,token) {
  return apiUtil.postApi('transaction/updatebookingstatus', token, data)
}

export function updateHotelBookingStatus(data,token) {
  return apiUtil.postApi('transaction/updatehotelbookingstatus', token, data)
}

export function updateTransportBookingStatus(data,token) {
  return apiUtil.postApi('transaction/updatetransportbookingstatus', token, data)
}