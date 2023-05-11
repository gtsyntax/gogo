import '../utils/colors.dart';
import 'package:flutter/material.dart';

import '../models/restaurant.dart';

class RestaurantInfo extends StatelessWidget {
final restaurant= Restaurant.generateRestaurant();
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top:40),
      padding: EdgeInsets.symmetric(horizontal: 25),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start ,
                children: [
                  Text(restaurant.name,
                  style: TextStyle(
                    fontSize: 25,
                    fontWeight: FontWeight.bold,
                  ),),
                  SizedBox(height: 10,),
                  Row(
                    children: [
                      Container(
                        padding: EdgeInsets.all(5),
                          decoration: BoxDecoration(
                            color: Colors.amber,
                            borderRadius: BorderRadius.circular(5),
                          ),
                          child: Text(
                            restaurant.waitTime,
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 17,
                          ),
                          )
                      ),
                        SizedBox(width: 10),
                      Text(
                          restaurant.distance,
                        style: TextStyle(
                          fontSize: 17,
                          fontWeight: FontWeight.bold,
                          //color: Colors.amber,
                        ),
                      ),
                      SizedBox(width: 10),
                      Text(
                          restaurant.label,
                        style: TextStyle(
                          fontSize: 17,
                          fontWeight: FontWeight.bold,
                          //color: Colors.amber,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 5),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        '"${restaurant.desc}"',
                        style: TextStyle(
                          fontSize: 16
                        ),
                      ),
                      SizedBox(width: 20,),
                      Row(
                        children: [
                          Icon(Icons.star_outline,
                          color: primaryColor,),
                          Text(
                            '${restaurant.score}',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(width: 15,)
                        ],
                      )
                    ],
                  )
                ],
              ),
                ClipRRect(
                  borderRadius : BorderRadius.circular(50),
                  child: Image.asset(restaurant.logoUrl,width: 80),
                )
            ],
          )
        ],
      ),
    );
  }
}
