import 'package:flutter/material.dart';
import 'package:tourista_b2b/select%20tour.dart';

import 'login.dart';

class Wrapper extends StatelessWidget {
  final String loginToken;
  const Wrapper({key, required this.loginToken}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return loginToken != null
        ? loginToken.isEmpty
            ? login()
            : login()
        : selectTour();
  }
}
