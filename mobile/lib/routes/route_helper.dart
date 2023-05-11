import '../models/food.dart';
import '../pages/food_page.dart';
import '../pages/home_page.dart';
import '../pages/order_page.dart';
import 'package:get/get.dart';


class RouteHelper{
  late final Food food;

  static const String initial = "/";
  static const String foodPage = "/food-page";
  static const String orderPage = "/order-page";

  static String getInitial()=>'$initial';
  static  String getOrderPage()=> "$orderPage";
  static String getFoodPage(int pageId) => '$foodPage?pageId=$pageId';

  static List<GetPage> routes =[
    GetPage(name: initial, page: ()=>HomePage()),
    /*
    GetPage(name: foodPage, page: () {
      var pageId=Get.parameters['pageId'];
      return FoodPage(pageId:int.parse(pageId!));
    },
        transition: Transition.fadeIn
    ),
    */

    GetPage(name: orderPage, page: () {
      return OrderPage();
  },
      transition: Transition.fadeIn
    )
  ];

}