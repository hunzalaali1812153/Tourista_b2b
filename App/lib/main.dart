import 'package:flutter/material.dart';
import 'package:tourista_b2b/login.dart';
import 'package:streaming_shared_preferences/streaming_shared_preferences.dart';
import 'package:tourista_b2b/services/apiCalls.dart';
import 'package:provider/provider.dart';
import 'package:tourista_b2b/wrapper.dart';

StreamingSharedPreferences preferences = preferences;
void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  preferences = await StreamingSharedPreferences.instance;

  runApp(MaterialApp(
    home: MyHomePage(
      key: (null),
      title: '',
    ),
    debugShowCheckedModeBanner: false,
  ));
}

class MyHomePage extends StatefulWidget {
  MyHomePage({key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
        providers: [
          StreamProvider<LoginToken>.value(
            value: ApiCalls(loginToken: LoginToken(token: ""))
                .streamTokenFromCache(),
            initialData: LoginToken(token: ""),
          ),
        ],
        builder: (context, widget) {
          return PreferenceBuilder<String>(
              preference: preferences.getString('loginToken', defaultValue: ''),
              builder: (context, loginToken) {
                return Wrapper(
                  loginToken: loginToken,
                  key: null,
                );
              });
        });
  }
}
