import '../controllers/popular_product_controller.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../models/food.dart';
import '../utils/colors.dart';

class FoodQuantity extends StatefulWidget {

  final Food food;
  FoodQuantity(this.food);

  @override
  State<FoodQuantity> createState() => _FoodQuantityState();
}

class _FoodQuantityState extends State<FoodQuantity> {


  @override
  Widget build(BuildContext context) {


    return GetBuilder<PopularProductController>(builder: (popularProduct) {
      return Container(
        width: double.maxFinite,
        height: 40,
        child: Stack(children:
        [
          Align(
            alignment: Alignment(-0.4, 0),
            child: Container(
              width: 120,
              height: double.maxFinite,
              decoration: BoxDecoration(
                color: Colors.grey.withOpacity(0.1),
                borderRadius: BorderRadius.circular(30),
              ),
              child: Row(
                children: [
                  SizedBox(width: 15,),
                  Text("${popularProduct.quantity * widget.food.price}",
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),),
                  Text('\ ₺',
                    style: TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.bold,
                    ),
                  )
                ],
              ),

            ),
          ),
          Align(
            alignment: Alignment(0.3, 0),
            child: Container(
                height: double.maxFinite,
                width: 120,
                decoration: BoxDecoration(
                  color: primaryColor,
                  borderRadius: BorderRadius.circular(30),
                ),
                child:Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        GestureDetector(
                          onTap: () {
                            popularProduct.setQuantity(false);
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(28),),
                            child: Icon(
                              Icons.remove, size: 20, color: Colors.black,),
                          ),
                        ),
                        Container(
                          padding: EdgeInsets.all(12),
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: Colors.white,
                          ),
                          child: Text(popularProduct.quantity.toString(),
                            //amount.toString(),
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                        GestureDetector(
                          onTap: () {
                            popularProduct.setQuantity(true);
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(28),),
                            child: Icon(
                              Icons.add, size: 20, color: Colors.black,),
                          ),
                        ),
                      ],
                    ),
                  ),
            ),
        ],),
      );
    }
    );
  }
}
