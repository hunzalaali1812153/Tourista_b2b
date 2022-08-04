import 'dart:convert';

List<TourModel> domainsModelFromMap(String str) =>
    List<TourModel>.from(json.decode(str).map((x) => TourModel.fromMap(x)));

String domainsModelToMap(List<TourModel> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toMap())));

class TourModel {
  TourModel(
      {required this.id,
      required this.name,
      required this.longDescription,
      required this.shortDescription});

  int id;
  String name;
  String shortDescription;
  String longDescription;

  factory TourModel.fromMap(Map<String, dynamic> json) => TourModel(
      id: json["id"],
      name: json["name"],
      shortDescription: json["shortDescription"],
      longDescription: json["longDescription"]);

  Map<String, dynamic> toMap() => {
        "id": id,
        "name": name,
        "shortDescription": shortDescription,
        "longDescription": longDescription,
      };
}
