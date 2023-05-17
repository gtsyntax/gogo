import '../models/restaurant.dart';
import '../utils/colors.dart';
import '../widgets/custom_app_bar.dart';
import 'package:flutter/material.dart';



class OrderPage extends StatelessWidget {



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: primaryColor,
      body: SafeArea(
        child: Column(
          children: [
            //CustomAppBar(),
            Text("Your Order Placed Successfully"),
            Column(
              children: [
                ListTile(
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
