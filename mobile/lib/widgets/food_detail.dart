import '../utils/colors.dart';
import '../widgets/expandable_text.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/cart_controller.dart';
import '../controllers/popular_product_controller.dart';
import '../models/food.dart';
import 'food_quantity.dart';

class FoodDetail extends StatelessWidget {

final Food food;

//const FoodDetail({Key? key, required this.pageId,required this.food}):super(key:key);
FoodDetail(this.food);


  @override
  Widget build(BuildContext context) {
    //var product = Get.find<PopularProductController>().popularProductList[];
    Get.find<PopularProductController>().initProduct(Get.find<CartController>());
    return GetBuilder<PopularProductController>(builder:(popularProduct){
      return Container(
        padding: EdgeInsets.all(25),
        color: background,
        child: Column(
          children: [
            Text(food.name,
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 22,
            ),
            ),
            SizedBox(height: 15,),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _buildIconText(
                  Icons.access_time_outlined,
                  Colors.blue,
                  food.waitTime
                ),
                _buildIconText(
                    Icons.star_outline,
                    Colors.amber,
                    food.score.toString()
                ),
                _buildIconText(
                    Icons.local_fire_department_outlined,
                    Colors.red,
                    food.cal
                ),
              ],
            ),
            SizedBox(height:30,),
            FoodQuantity(food),
            SizedBox(height: 30,),
            Container(
              margin: EdgeInsets.symmetric(horizontal: 12,vertical: 12),
              child: MaterialButton(
                minWidth: double.infinity,
                height: 60,
                shape: RoundedRectangleBorder(borderRadius:BorderRadius.circular(20)),
                color: primaryColor,
                child: Text("Add to Cart",
                  style: TextStyle(
                    fontSize: 20,
                  ),),
                onPressed: (){
                  //popularProduct.addItem(product);
                  food.quantity++;
                },),
            ),
            SizedBox(height: 20,),
            Row(
              children: [
                Text('About',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                ),)
              ],
            ),
            SizedBox(height: 10,),
            ExpandableText(
              text:  food.about,
              /*
              Text(

              style: TextStyle(
                wordSpacing: 1.2,
                height: 1.5,
                fontSize:16,
              ),),
              ),
               */
            ),
            SizedBox(height: 120,)
          ],
        ),
      );
    });
  }

  Widget _buildIconText(IconData icon,Color color,String text){
      return Row(
        children: [
          Icon(
            icon,
            color: color,
            size: 20,
          ),
          Text(
            text,
            style: TextStyle(
            fontSize: 16
          ),)
        ],
      );
  }
}
