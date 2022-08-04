import 'package:flutter/material.dart';
import 'package:tourista_b2b/select%20tour.dart';
import 'package:tourista_b2b/services/apiCalls.dart';
import 'package:tourista_b2b/services/auth.dart';

class login extends StatefulWidget {
  const login({Key? key}) : super(key: key);

  @override
  _loginState createState() => _loginState();
}

class _loginState extends State<login> {
  bool _ishidden = true;
  void _togglevisibility() {
    setState(() {
      _ishidden = !_ishidden;
    });
  }

  TextEditingController usernamecon = new TextEditingController();
  TextEditingController passwordcon = new TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Container(
        decoration: BoxDecoration(color: Colors.white),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          // crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(0.0, 20.0, 0, 0),
              child: Align(
                alignment: Alignment.center,
                child: Container(
                  width: 250.0,
                  height: 250.0,
                  // alignment: Alignment.center,
                  decoration: new BoxDecoration(
                    image: DecorationImage(
                        // alignment: Alignment.center,

                        image: AssetImage('assets/preview.png'),
                        fit: BoxFit.fill),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 10.0, right: 10.0),
              child: TextField(
                controller: usernamecon,
                decoration: InputDecoration(
                    prefixIcon: Icon(Icons.person),
                    labelText: 'Enter Name',
                    hintText: 'Enter Your Name'),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 10.0, right: 10.0),
              child: TextField(
                  controller: passwordcon,
                  decoration: InputDecoration(
                      prefixIcon: Icon(Icons.lock),
                      suffixIcon: IconButton(
                          onPressed: _togglevisibility,
                          icon: _ishidden
                              ? Icon(Icons.visibility_off)
                              : Icon(Icons.visibility)),
                      labelText: 'Enter pass',
                      hintText: 'Enter Your password'),
                  obscureText: _ishidden),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                // FlatButton(
                //   onPressed: () {},
                //   color: Colors.transparent,
                //   child: Text(
                //     'forgot your password?',
                //     style: TextStyle(fontSize: 14),
                //   ),
                //   textColor: Colors.grey,
                // ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(0, 0, 0, 0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Padding(
                    padding: const EdgeInsets.only(right: 5.0),
                    child: Container(
                      width: 150,
                      height: 50,
                      child: FlatButton(
                        onPressed: () async {
                          /* ApiCalls api = new ApiCalls(
                              loginToken: new LoginToken(token: ""));
                          //    var username=usernamecon.
                          var resp = await api.postApiRequest(
                              "api/User/login", {
                            "f8996da763b7a969b1": usernamecon.text,
                            "d74ff0ee8da3b9806b": passwordcon.text
                          });*/
                          var resp = await Auth()
                              .login(usernamecon.text, passwordcon.text);
                          print(resp.body);
                          if (resp.statusCode == 200) {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => selectTour()),
                            );
                          } else {
                            showDialog<String>(
                                context: context,
                                builder: (BuildContext context) => AlertDialog(
                                      title: const Text('Error'),
                                      content: const Text(
                                          'Invalid User name and Password'),
                                    ));
                          }
                          // Navigator.push(context, MaterialPageRoute(builder:(context)=>news_feed1()),);
                        },
                        color: Color(0xffa014eb),
                        shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(100),
                            side: BorderSide(
                                color: Color(0xffa014eb),
                                style: BorderStyle.solid)),
                        child: Text("login",
                            style: TextStyle(fontWeight: FontWeight.bold)),
                        textColor: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
