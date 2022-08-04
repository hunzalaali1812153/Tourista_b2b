import 'package:flutter/material.dart';
import 'package:tourista_b2b/Actions.dart';
import 'package:tourista_b2b/Home_page.dart';
import 'package:tourista_b2b/guest_list.dart';
import 'package:tourista_b2b/profile.dart';
import 'new_msg.dart';
import 'notfications.dart';

class btm_nav extends StatefulWidget {
  const btm_nav({Key? key}) : super(key: key);

  @override
  _btm_navState createState() => _btm_navState();
}

class _btm_navState extends State<btm_nav> {
  int _selectedIndex = 0;
  static List<Widget> _btmNav = <Widget>[
    homePage(),
    guestList(),
    //profile(),
    // actions(),
  ];
  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: _selectedIndex == 0
          ? AppBar(
              backgroundColor: Color(0xffa014eb),
              title: Text(
                'Home Page',
                style: TextStyle(fontSize: 16),
              ),
              centerTitle: true,
              actions: <Widget>[
                IconButton(
                  icon: Icon(Icons.notifications),
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => notifications()));
                  },
                ),
                // IconButton(
                //   icon: Icon(Icons.search),
                //   onPressed: () {},
                // ),
              ],
            )
          : (null),
      body: _btmNav.elementAt(_selectedIndex),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      floatingActionButton: SizedBox(
        height: 50.0,
        width: 50.0,
        child: FloatingActionButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => broadCast_msg()),
            );
          },
          backgroundColor: Color(0xffa014eb),
          child: Icon(Icons.add),
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        shape: CircularNotchedRectangle(),
        notchMargin: 2.0,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            FlatButton(
              onPressed: () {
                _onItemTapped(0);
              },
              child: Icon(
                Icons.home,
                color: _selectedIndex == 0 ? Color(0xffa014eb) : Colors.grey,
              ),
              height: 50,
            ),
            FlatButton(
              onPressed: () {
                _onItemTapped(1);
              },
              child: Icon(Icons.people,
                  color: _selectedIndex == 1 ? Color(0xffa014eb) : Colors.grey),
              height: 50,
            ),
            // FlatButton(
            //   onPressed: () {
            //     _onItemTapped(2);
            //   },
            //   child: Icon(Icons.person,
            //       color: _selectedIndex == 2 ? Color(0xffa014eb) : Colors.grey),
            //   height: 20,
            // ),
            // FlatButton(
            //   onPressed: () {
            //     _onItemTapped(3);
            //   },
            //   child: Icon(Icons.settings,
            //       color: _selectedIndex == 3 ? Color(0xffa014eb) : Colors.grey),
            //   height: 20,
            // ),
          ],
        ),
        // child:   BottomNavigationBar(

        //         items: const <BottomNavigationBarItem>[

        //           BottomNavigationBarItem(

        //             icon: ImageIcon(AssetImage("assets/Group 2652.png"),color: Colors.grey,),

        //             label: '',

        //             backgroundColor: Colors.white

        //           ),

        //           BottomNavigationBarItem(

        //             icon: ImageIcon(AssetImage("assets/Group 2653.png"),color: Colors.grey,),

        //             label: '',

        //            // backgroundColor: Colors.white

        //           ),

        //           BottomNavigationBarItem(

        //             icon: ImageIcon(AssetImage("assets/Group 2655.png"),color: Colors.grey,),

        //             label: '',

        //             backgroundColor: Colors.white

        //           ),

        //           BottomNavigationBarItem(

        //             icon: ImageIcon(AssetImage("assets/Group 2659.png"),color: Colors.grey,),

        //             label: '',

        //             backgroundColor: Colors.white

        //           ),

        //         ],

        //         currentIndex: _selectedIndex,

        //         selectedItemColor: Colors.blue,

        //         onTap: _onItemTapped,),
      ),
    );
  }
}
