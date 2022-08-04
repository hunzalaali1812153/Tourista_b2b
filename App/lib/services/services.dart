import 'dart:convert';

import 'package:tourista_b2b/models/annuncementModel.dart';
import 'package:tourista_b2b/models/customerModel.dart';
import 'package:tourista_b2b/models/eventsModel.dart';
import 'package:tourista_b2b/models/lastannuncementModel.dart';
import 'package:tourista_b2b/models/tourmodel.dart';
import 'package:streaming_shared_preferences/streaming_shared_preferences.dart';

import 'apiCalls.dart';
import 'auth.dart';

class Services {
  Future<List<TourModel>> gettours() async {
    //change to get login token from cache
    // var loginTokenString = loginToken.token;
    var loginTokenString = await Auth().getLoginTokenString();
    String route = "/transaction/gettourbyuserid";

    var response =
        await ApiCalls(loginToken: LoginToken(token: loginTokenString))
            .getApiRequest(route, queryParams: {});

    var domainsMap = jsonDecode(response.body);
    print(domainsMap);
    List list = domainsMap['tours'];
    var mapedList = list.map((e) => TourModel.fromMap(e)).toList();

    return mapedList;
  }

  Future<TourModel> gettoursdescp() async {
    //change to get login token from cache
    // var loginTokenString = loginToken.token;
    var preferences = await StreamingSharedPreferences.instance;
    var tourid = preferences.getString("tourid", defaultValue: "").getValue();
    var loginTokenString = await Auth().getLoginTokenString();
    String route = "/transaction/gettourdetails";

    var response =
        await ApiCalls(loginToken: LoginToken(token: loginTokenString))
            .getApiRequest(route, queryParams: {"tourId": tourid});

    var domainsMap = jsonDecode(response.body);
    print(domainsMap);

    var mapedList = TourModel.fromMap(domainsMap['details']);

    return mapedList;
  }

  Future<List<CustomerModel>> getcustomer() async {
    //change to get login token from cache
    // var loginTokenString = loginToken.token;
    var preferences = await StreamingSharedPreferences.instance;
    var tourid = preferences.getString("tourid", defaultValue: "").getValue();
    var loginTokenString = await Auth().getLoginTokenString();
    String route = "/transaction/getcustomer";

    var response =
        await ApiCalls(loginToken: LoginToken(token: loginTokenString))
            .getApiRequest(route, queryParams: {"tourid": tourid});

    var domainsMap = jsonDecode(response.body);
    print(domainsMap);
    List<dynamic> list = domainsMap['list'];
    var mapedList = list.map((e) => CustomerModel.fromMap(e)).toList();

    return mapedList;
  }

  Future<List<EventsModel>> getevents() async {
    //change to get login token from cache
    // var loginTokenString = loginToken.token;
    var preferences = await StreamingSharedPreferences.instance;
    var tourid = preferences.getString("tourid", defaultValue: "").getValue();
    var loginTokenString = await Auth().getLoginTokenString();
    String route = "/transaction/getEvents";

    var response =
        await ApiCalls(loginToken: LoginToken(token: loginTokenString))
            .getApiRequest(route, queryParams: {"tourid": tourid});

    var domainsMap = jsonDecode(response.body);
    print(domainsMap);
    List<dynamic> list = domainsMap['list'];
    var mapedList = list.map((e) => EventsModel.fromMap(e)).toList();

    return mapedList;
  }

  Future<List<AnnouncmenetModel>> getannouncement() async {
    //change to get login token from cache
    // var loginTokenString = loginToken.token;
    var preferences = await StreamingSharedPreferences.instance;
    var tourid = preferences.getString("tourid", defaultValue: "").getValue();
    var loginTokenString = await Auth().getLoginTokenString();
    String route = "/transaction/getannouncement";

    var response =
        await ApiCalls(loginToken: LoginToken(token: loginTokenString))
            .getApiRequest(route, queryParams: {"tourid": tourid});
    print(response.body);
    var domainsMap = jsonDecode(response.body);
    print(
      domainsMap,
    );
    List<dynamic> list = domainsMap['announcements'];
    var mapedList = list.map((e) => AnnouncmenetModel.fromMap(e)).toList();

    return mapedList;
  }

  Future<LastAnnouncmenetModel> getlastannouncement() async {
    //change to get login token from cache
    // var loginTokenString = loginToken.token;
    var preferences = await StreamingSharedPreferences.instance;
    var tourid = preferences.getString("tourid", defaultValue: "").getValue();
    var loginTokenString = await Auth().getLoginTokenString();
    String route = "/transaction/getlastannouncement";

    var response =
        await ApiCalls(loginToken: LoginToken(token: loginTokenString))
            .getApiRequest(route, queryParams: {"tourid": tourid});

    var domainsMap = jsonDecode(response.body);
    print(domainsMap);
    if (domainsMap != null && domainsMap['announcements'] != null)
      return LastAnnouncmenetModel.fromMap(domainsMap['announcements']);
    else
      return LastAnnouncmenetModel(message: "");
    // var mapedList = list.map((e) => LastAnnouncmenetModel.fromMap(e)).toList();

    //return mapedList;
  }
}
