import 'dart:convert';
import 'package:http/http.dart';
import 'package:streaming_shared_preferences/streaming_shared_preferences.dart';

import 'apiCalls.dart';

class Auth {
  Future<Response> login(String userName, String password) async {
    var preferences = await StreamingSharedPreferences.instance;
    dynamic bodyData = {
      "f8996da763b7a969b1": userName,
      "d74ff0ee8da3b9806b": password
    };

    String route = "/api/user/login";

    var response = await ApiCalls(loginToken: LoginToken(token: ""))
        .postApiRequest(route, bodyData);
    print(response.body.toString());

    var tokenMap = jsonDecode(response.body);
    if(tokenMap!=null&&tokenMap['token']!=null)
    {preferences.setString('loginToken', tokenMap['token']);
    }

    return response;
  }

  getLoginTokenString() async {
    var preferences = await StreamingSharedPreferences.instance;
    var loginToken =
        preferences.getString('loginToken', defaultValue: '').getValue();

    print(
        '$loginToken get login token string function call!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1');
    return loginToken;
  }

  Future logout() async {
    var preferences = await StreamingSharedPreferences.instance;
    preferences.setString('loginToken', '');
  }
}
