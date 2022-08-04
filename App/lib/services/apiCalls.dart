// ignore: file_names
// ignore: file_names
import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;
import 'package:streaming_shared_preferences/streaming_shared_preferences.dart';

class ApiCalls {
  final LoginToken loginToken;
  String baseApiUrl;
  ApiCalls({required this.loginToken, this.baseApiUrl = "172.16.111.22:3100"});

  ///CONSTANTS FOR API CALLS
  ///eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbGllbnQiLCJpYXQiOjE2MTQ5NTE5MTl9.NhFa1eFf4Z1DNxmXUSVWt9VWDdsGch_w31yD5a5Muew
  //final String baseApiUrl = "virtual.sgkcattles.com";

  Future<http.Response> postApiRequestJEncode(
      String route, dynamic bodyData) async {
    final Map<String, String> header = {
      // "Content-Type": "application/json",
      "Authorization": "Bearer ${loginToken.token}",
    };
    print("********************************************************");
    print(bodyData);
    return await http.post(
      Uri.http(baseApiUrl, route),
      headers: header,
      body: {"data": bodyData},
      //  encoding: Encoding.getByName("utf-8")
    );
  }

  Future<http.Response> postApiRequest(String route, dynamic bodyData) async {
    final Map<String, String> header = {
      // "Content-Type": "application/json",
      "Authorization": "Bearer ${loginToken.token}",
    };
    print("********************************************************");
    print(bodyData);
    return await http.post(
      Uri.http(baseApiUrl, route),
      headers: header,
      body: bodyData,
      //  encoding: Encoding.getByName("utf-8")
    );
  }

  Future<http.Response> getApiRequest(String route,
      {required Map<String, dynamic> queryParams}) async {
    final Map<String, String> header = {
      "Authorization": "Bearer ${loginToken.token}",
      // 'Content-Type': 'application/json; charset=UTF-8',
    };
    print(queryParams);
    return await http.get(
      Uri.http(baseApiUrl, route, queryParams),
      headers: header,
    );
  }

  Stream<LoginToken> streamLoginToken() {
    return http
        .post(Uri.http(baseApiUrl, "api/client/login"))
        .then((value) => LoginToken.fromMap(jsonDecode(value.body)))
        .asStream();
  }

  Future<LoginToken> getLoginToken() {
    return http
        .post(Uri.http(baseApiUrl, "api/client/login"))
        .then((value) => LoginToken.fromMap(jsonDecode(value.body)));
  }

  Stream<LoginToken> streamTokenFromCache() {
    return StreamingSharedPreferences.instance
        .then((prefs) => LoginToken(
            token: prefs.getString('loginToken', defaultValue: '').getValue()))
        .asStream();
  }

  Future<http.Response> putApiRequest(String route) async {
    final Map<String, String> header = {
      "Authorization": "Bearer ${loginToken.token}",
    };
    return await http.put(
      Uri.http(baseApiUrl, route),
      headers: header,
    );
  }
}

class LoginToken {
  final String token;

  LoginToken({required this.token});

  factory LoginToken.fromMap(Map data) {
    if (data != null
        ? data.isNotEmpty
            ? true
            : false
        : false)
      return LoginToken(
        token: data['token'],
      );
    else
      return LoginToken(
        token: "-1",
      );
  }
}
