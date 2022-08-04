import apiUtil from '../utilities/apiHelper'

export function Login(data) {
  return apiUtil.postApi('api/user/login', "", { "f8996da763b7a969b1": data.userName, "d74ff0ee8da3b9806b": data.password })
}

export function Signup(data) {
  console.log("data",data);
  return apiUtil.postApi('api/user/signup', "", data)
}