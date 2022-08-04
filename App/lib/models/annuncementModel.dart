import 'dart:convert';

List<AnnouncmenetModel> domainsModelFromMap(String str) =>
    List<AnnouncmenetModel>.from(
        json.decode(str).map((x) => AnnouncmenetModel.fromMap(x)));

String domainsModelToMap(List<AnnouncmenetModel> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toMap())));

class AnnouncmenetModel {
  AnnouncmenetModel({
    required this.message,
    //required this.customerPhone,
  });

  String message;
  //String customerPhone;

  factory AnnouncmenetModel.fromMap(Map<String, dynamic> json) =>
      AnnouncmenetModel(
        message: json["message"],
        //customerPhone: json["customerPhone"],
      );

  Map<String, dynamic> toMap() => {
        "message": message,
        //"customerPhone": customerPhone,
      };
}
