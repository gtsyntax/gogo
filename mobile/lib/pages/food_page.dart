import '../controllers/cart_controller.dart';
import '../controllers/popular_product_controller.dart';
import '../models/food.dart';
import '../pages/home_page.dart';
import '../pages/order_page.dart';
import '../utils/colors.dart';
import '../widgets/custom_app_bar.dart';
import '../widgets/food_detail.dart';
import '../widgets/food_page_food_image.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class FoodPage extends StatelessWidget {

  //int pageId;
  final Food food;
  //FoodPage({Key? key, required this.pageId,required this.food}):super(key:key);

  FoodPage(this.food);

  @override
  Widget build(BuildContext context) {
    //var product = Get.find<PopularProductController>().popularProductList[pageId];
    Get.find<PopularProductController>().initProduct(Get.find<CartController>());

    return Scaffold(
      backgroundColor: primaryColor,
      body: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              margin: EdgeInsets.only(top: 45,bottom: 15),
              padding: EdgeInsets.only(left: 20,right: 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                      GestureDetector(
                        onTap:(){
                              //Get.to(()=>HomePage());
                          Navigator.push(context,MaterialPageRoute(builder: (context)=> HomePage()));

                        },
                          child: CustomAppBar(
                          icon: Icons.arrow_back_ios_outlined)),
                      CustomAppBar(icon: Icons.favorite_outline),

                ],
              ),
            ),

            /* CustomAppBar(
              Icons.arrow_back_ios_outlined,
              Icons.favorite_outline,
              leftCallback: () => Navigator.of(context).pop() ,), */
            FoodImg(food),
            FoodDetail(food),
          ],
        ),
      ),
      floatingActionButton: Container(
        width: 100,
        height: 56,
        child: RawMaterialButton(
            fillColor: primaryColor,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(50),
          ),
          elevation: 2,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Icon(Icons.shopping_bag_outlined,
              color: Colors.black,
              size: 30,),
              Container(
                padding: EdgeInsets.all(15),
                decoration: BoxDecoration(
                  color: Colors.white,
                  shape: BoxShape.circle,
                ),
                child: Text(food.quantity.toString(),
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),),
              )
            ],
          ),
          onPressed: () {
              Navigator.push(context,MaterialPageRoute(builder: (context)=> OrderPage()));
          },

        ),
      ),
    );
  }
}

