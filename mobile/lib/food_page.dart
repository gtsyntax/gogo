import 'package:chat_app/widgets/custom_app_bar.dart';
import 'package:flutter/material.dart';

class FoodPage extends StatefulWidget {


  @override
  State<FoodPage> createState() => _FoodPageState();
}

class _FoodPageState extends State<FoodPage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          CustomAppBar(
            Icons.arrow_back_ios_outlined,
            Icons.search_outlined,
          )
        ],
      ),
    );
  }
}

