import 'package:flutter/material.dart';
import 'package:tourista_b2b/models/annuncementModel.dart';
import 'package:tourista_b2b/services/services.dart';

class notifications extends StatefulWidget {
  const notifications({Key? key}) : super(key: key);

  @override
  State<notifications> createState() => _notificationsState();
}

class _notificationsState extends State<notifications> {
  void initState() {
    super.initState();
    _requestInit();
  }

  _requestInit() async {
    var temp = await Services().getannouncement();
    setState(() {
      aboutCard = temp;
    });
  }

  List<AnnouncmenetModel> aboutCard = [
    // about_card(title: "Samad", description: "No Of Guests: 5"),
    // about_card(title: "Hunzala", description: "No Of Guests: 3"),
    // about_card(title: "Ahmed", description: "No Of Guests: 10"),
    // about_card(title: "Samad", description: "No Of Guests: 5"),
    // about_card(title: "Hunzala", description: "No Of Guests: 3"),
    // about_card(title: "Ahmed", description: "No Of Guests: 10"),
    // about_card(title: "Samad", description: "No Of Guests: 5"),
    // about_card(title: "Hunzala", description: "No Of Guests: 3"),
    // about_card(title: "Ahmed", description: "No Of Guests: 10"),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text("Announcments"),
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
                    child: ListTile(
                      title: Text(aboutCard[index].message),
                      // subtitle: Text(
                      //   aboutCard[index].customerPhone,
                      //   style: TextStyle(fontSize: 12),
                      // ),
                    ),
                  );
                }),
          ],
        ),
      ),
    );
  }
}
