import '../models/restaurant.dart';
import 'package:chat_app/widgets/food_item.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';



class FoodListView extends StatelessWidget {
  final int selected;
  final Function callback;
  final PageController pageController;
  final Restaurant restaurant;
  FoodListView(this.selected,this.callback,this.pageController,this.restaurant);

  @override
  Widget build(BuildContext context) {
    final category = restaurant.menu.keys.toList();
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 25),
      child: PageView(
        controller: pageController,
        onPageChanged: (index)=>callback(index),
        children: category.map((e) => ListView.separated(
            padding: EdgeInsets.zero,
            itemBuilder: (context,index)=> FoodItem(
                restaurant.menu[category[selected]]![index]
            ),
                separatorBuilder: (_,index)=>SizedBox(height: 15,),
                itemCount: restaurant.menu[category[selected]]!.length)).toList()

      ),
    );
  }
}
