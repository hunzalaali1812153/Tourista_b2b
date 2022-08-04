import 'dart:convert';

List<LastAnnouncmenetModel> domainsModelFromMap(String str) =>
    List<LastAnnouncmenetModel>.from(
        json.decode(str).map((x) => LastAnnouncmenetModel.fromMap(x)));

String domainsModelToMap(List<LastAnnouncmenetModel> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toMap())));

class LastAnnouncmenetModel {
  LastAnnouncmenetModel({
    required this.message,
    //required this.customerPhone,
  });

  String message;
  //String customerPhone;

  factory LastAnnouncmenetModel.fromMap(Map<String, dynamic> json) =>
      LastAnnouncmenetModel(
        message: json != null && json["message"] != null
            ? json["message"]
            : "Not Available",
        //customerPhone: json["customerPhone"],
      );

  Map<String, dynamic> toMap() => {
        "message": message,
        //"customerPhone": customerPhone,
      };
}
