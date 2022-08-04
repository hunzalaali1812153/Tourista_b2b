import 'package:flutter/material.dart';
import 'package:tourista_b2b/Home_page.dart';
import 'package:tourista_b2b/bottom_nav.dart';
import 'package:tourista_b2b/main.dart';
import 'package:tourista_b2b/models/tourmodel.dart';
import 'package:tourista_b2b/services/services.dart';
import 'package:streaming_shared_preferences/streaming_shared_preferences.dart';

class selectTour extends StatefulWidget {
  const selectTour({Key? key}) : super(key: key);

  @override
  _selectTourState createState() => _selectTourState();
}

class _selectTourState extends State<selectTour> {
  void initState() {
    super.initState();
    _requestInit();
  }

  _requestInit() async {
    var temp = await Services().gettours();
    setState(() {
      aboutCard = temp;
    });
  }

  List<TourModel> aboutCard = [];
  var _dropDownValue;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text("Select Tour"),
        backgroundColor: Color(0xffa014eb),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Align(
              alignment: Alignment.center,
              child: Container(
                width: 150.0,
                height: 150.0,
                // alignment: Alignment.center,
                decoration: new BoxDecoration(
                  image: DecorationImage(
                      // alignment: Alignment.center,

                      image: AssetImage('assets/preview.png'),
                      fit: BoxFit.fill),
                ),
              ),
            ),
            ListView.builder(
                scrollDirection: Axis.vertical,
                shrinkWrap: true,
                physics: ScrollPhysics(),
                itemCount: aboutCard.length,
                itemBuilder: (context, index) {
                  return Card(
                    child: new InkWell(
                      onTap: () async {
                        var preferences =
                            await StreamingSharedPreferences.instance;
                        preferences.setString(
                            'tourid', aboutCard[index].id.toString());

                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => btm_nav()),
                        );
                      },
                      child: ListTile(
                        title: Text(aboutCard[index].name),
                        subtitle: Text(
                          aboutCard[index].name,
                          style: TextStyle(fontSize: 12),
                        ),
                      ),
                    ),
                  );
                }),
          ],
        ),
      ),
    );
  }
}
