import 'package:flutter/material.dart';
import 'package:tourista_b2b/main.dart';
import 'package:tourista_b2b/select%20tour.dart';
import 'package:tourista_b2b/services/apiCalls.dart';
import 'package:streaming_shared_preferences/streaming_shared_preferences.dart';

class broadCast_msg extends StatefulWidget {
  const broadCast_msg({Key? key}) : super(key: key);

  @override
  _broadCast_msgState createState() => _broadCast_msgState();
}

class _broadCast_msgState extends State<broadCast_msg> {
  TextEditingController announcmentcon = new TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          "New Message",
          style: TextStyle(fontSize: 16),
        ),
        backgroundColor: Color(0xffa014eb),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        // mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          SizedBox(
            height: 15.0,
          ),
          // SizedBox(
          //   width: 20.0,
          // ),
          Align(
            alignment: Alignment.center,
            child: Text(
              "Create Message",
              style: TextStyle(fontSize: 20.0, fontWeight: FontWeight.bold),
            ),
          ),
          SizedBox(
            height: 15.0,
          ),
          Padding(
            padding: const EdgeInsets.only(left: 15.0, right: 9.0),
            child: TextField(
              controller: announcmentcon,
              maxLines: 6,
              decoration: InputDecoration(
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(10.0)),
                  ),
                  hintText: "Make An Announcment"),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(10.0, 30.0, 10.0, 0),
            // ignore: deprecated_member_use
            child: FlatButton(
              height: 50,
              onPressed: () async {
                var preferences = await StreamingSharedPreferences.instance;
                var tourid = preferences
                    .getString("tourid", defaultValue: "")
                    .getValue();
                var val = preferences
                    .getString('loginToken', defaultValue: '')
                    .getValue();
                print("#############################");
                print(val);
                ApiCalls api =
                    new ApiCalls(loginToken: new LoginToken(token: val));
                //    var username=usernamecon.
                var resp =
                    await api.postApiRequest("transaction/createannouncement", {
                  "MESSAGE": announcmentcon.text,
                  "TOURID": tourid

                  //"d74ff0ee8da3b9806b": passwordcon.text
                });
                print(resp.body);
                if (resp.statusCode == 200) {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => selectTour()),
                  );
                }
              },
              color: Color(0xffa014eb),
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(50),
                  side: BorderSide(
                      color: Color(0xffa014eb), style: BorderStyle.solid)),
              child:
                  Text("submit", style: TextStyle(fontWeight: FontWeight.bold)),
              textColor: Colors.white,
            ),
          ),
        ],
      ),
    );
  }
}
