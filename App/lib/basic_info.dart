import 'package:flutter/material.dart';
import 'package:tourista_b2b/models/eventsModel.dart';
import 'package:tourista_b2b/services/apiCalls.dart';
import 'package:tourista_b2b/services/services.dart';
import 'package:streaming_shared_preferences/streaming_shared_preferences.dart';

class b_info extends StatefulWidget {
  late String guestid = "";
  b_info({Key? key, required this.guestid}) : super(key: key);

  @override
  _b_infoState createState() => _b_infoState();
}

class _b_infoState extends State<b_info> {
  void initState() {
    super.initState();
    _requestInit();
  }

  _requestInit() async {
    widget.guestid;
    var temp = await Services().getevents();
    setState(() {
      info = temp;
    });
  }

  List<EventsModel> info = [
    // basic_infoCard(
    //     name: "Name:Samad",
    //     number: "Number:03334224224",
    //     address: "Address:xyz street karachi",
    //     EmergencyContactName: "Emergency contact: Ali Akbar",
    //     Emergencynumber: "Emergency Number:03234212123"),
    // basic_infoCard(
    //     name: "Name:Samad",
    //     number: "Number:03334224224",
    //     address: "Address:xyz street karachi",
    //     EmergencyContactName: "Emergency contact: Ali Akbar",
    //     Emergencynumber: "Emergency Number:03234212123"),
    // basic_infoCard(
    //     name: "Name:Samad",
    //     number: "Number:03334224224",
    //     address: "Address:xyz street karachi",
    //     EmergencyContactName: "Emergency contact: Ali Akbar",
    //     Emergencynumber: "Emergency Number:03234212123"),
    // basic_infoCard(
    //     name: "Name:Samad",
    //     number: "Number:03334224224",
    //     address: "Address:xyz street karachi",
    //     EmergencyContactName: "Emergency contact: Ali Akbar",
    //     Emergencynumber: "Emergency Number:03234212123"),
    // basic_infoCard(
    //     name: "Name:Samad",
    //     number: "Number:03334224224",
    //     address: "Address:xyz street karachi",
    //     EmergencyContactName: "Emergency contact: Ali Akbar",
    //     Emergencynumber: "Emergency Number:03234212123"),
    // basic_infoCard(
    //     name: "Name:Samad",
    //     number: "Number:03334224224",
    //     address: "Address:xyz street karachi",
    //     EmergencyContactName: "Emergency contact: Ali Akbar",
    //     Emergencynumber: "Emergency Number:03234212123"),
    // basic_infoCard(
    //     name: "Name:Samad",
    //     number: "Number:03334224224",
    //     address: "Address:xyz street karachi",
    //     EmergencyContactName: "Emergency contact: Ali Akbar",
    //     Emergencynumber: "Emergency Number:03234212123"),
    // basic_infoCard(
    //     name: "Name:Samad",
    //     number: "Number:03334224224",
    //     address: "Address:xyz street karachi",
    //     EmergencyContactName: "Emergency contact: Ali Akbar",
    //     Emergencynumber: "Emergency Number:03234212123"),
  ];
  bool valuefirst = false;
  bool valuesecond = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Status"),
        ),
        body: ListView.builder(
            scrollDirection: Axis.vertical,
            shrinkWrap: true,
            physics: ScrollPhysics(),
            itemCount: info.length,
            itemBuilder: (context, index) {
              var guestId = widget.guestid;
              print("#################################");
              print(widget.guestid);

              return Card(
                child: ListTile(
                    title: Column(
                      children: [
                        Row(
                          children: [
                            Text(widget.guestid),
                            Text(info[index].Eventsname),
                            info[index]
                                    .guestid
                                    .split(',')
                                    .contains(widget.guestid)
                                ? Text("")
                                : IconButton(
                                    onPressed: () async {
                                      var preferences =
                                          await StreamingSharedPreferences
                                              .instance;
                                      var tourid = preferences
                                          .getString("tourid", defaultValue: "")
                                          .getValue();
                                      var val = preferences
                                          .getString('loginToken',
                                              defaultValue: '')
                                          .getValue();
                                      print("#############################");
                                      print(val);
                                      ApiCalls api = new ApiCalls(
                                          loginToken:
                                              new LoginToken(token: val));
                                      //    var username=usernamecon.
                                      var resp = await api.postApiRequest(
                                          "transaction/updateEvent", {
                                        "guestid": widget.guestid,
                                        "eventid": info[index].id

                                        //"d74ff0ee8da3b9806b": passwordcon.text
                                      });
                                      Navigator.pop(context);
                                    },
                                    icon: Icon(Icons.check_box)),
                          ],
                        ),
                        //Text(info[index].guestid),
                      ],
                    ),
                    subtitle: Text(
                        widget.guestid) //.split(",").contains(widget.guestid)
                    //     ? "completed"
                    //     : "not completed"),
                    ),
              );
            }));
  }
}

class basic_infoCard {
  String name;
  String number;
  String address;
  String EmergencyContactName;
  String Emergencynumber;

  basic_infoCard(
      {required this.name,
      required this.number,
      required this.address,
      required this.EmergencyContactName,
      required this.Emergencynumber});
}
