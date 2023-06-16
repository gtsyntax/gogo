
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:side_project/base/no_data_page.dart';
import 'package:side_project/controllers/cart_controller.dart';
import 'package:side_project/models/cart_model.dart';
import 'package:side_project/routes/route_helper.dart';
import 'package:side_project/utils/app_constants.dart';
import 'package:side_project/utils/colors.dart';
import 'package:side_project/utils/dimensions.dart';
import 'package:side_project/widgets/app_icon.dart';
import 'package:side_project/widgets/big_text.dart';
import 'package:get/get.dart';
import 'package:side_project/widgets/small_text.dart';

class CartHistory extends StatelessWidget {
  const CartHistory({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    var getCartHistoryList = Get.find<CartController>().
    getCartHistoryList().reversed.toList();

    Map<String,int> cartItemsPerOrder = Map();

    for(int i=0;i<getCartHistoryList.length;i++){
      if(cartItemsPerOrder.containsKey(getCartHistoryList[i].time)){
        cartItemsPerOrder.update(getCartHistoryList[i].time!,(value)=>++value);
      }else{
        cartItemsPerOrder.putIfAbsent(getCartHistoryList[i].time!,()=>1);
      }
    }

    List<int> cartItemsPerOrderToList(){
      return cartItemsPerOrder.entries.map((e)=>e.value).toList();
    }

    List<String> cartOrderTimeToList() {
      return cartItemsPerOrder.entries.map((e) => e.key).toList();
    }

    List<int> itemsPerOrder = cartItemsPerOrderToList();

    var listCounter=0;
    Widget timeWidget(int index){
      var outputDate = DateTime.now().toString();
      if(index<getCartHistoryList.length){
        DateTime parseDate = DateFormat("yyyy-MM-dd HH:mm:ss").parse(getCartHistoryList[listCounter].time!);
        var inputDate = DateTime.parse(parseDate.toString());
        var outputFormat = DateFormat("dd/MM/yyyy HH:mm");
        outputDate = outputFormat.format(inputDate);
      }
      return BigText(text:outputDate);
    }

    return Scaffold(
      body: Column(
        children: [
            Container(
              height: Dimensions.height20*5,
              color: AppColors.mainColor,
              width: double.maxFinite,
              padding: EdgeInsets.only(top: Dimensions.height15*3),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  BigText(text: "Cart History"),
                  AppIcon(icon: Icons.shopping_cart_outlined)
                ],
              ),
            ),
            GetBuilder<CartController>(builder: (_cartController){
              return _cartController.getCartHistoryList().length>0 ? Expanded(
                  child: Container(
                      margin: EdgeInsets.only(
                          top: Dimensions.height20,
                          left: Dimensions.width20,
                          right: Dimensions.width20),
                      child: MediaQuery.removePadding(
                          removeTop: true,
                          context: context,
                          child: ListView(
                            children: [
                              for(int i=0; i<itemsPerOrder.length;i++)
                                Container(
                                  height: Dimensions.height20*6,
                                  margin: EdgeInsets.only(bottom: Dimensions.height20),
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      timeWidget(listCounter),
                                      SizedBox(height: Dimensions.height10),
                                      Row(
                                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                        children: [
                                          Wrap(
                                            direction: Axis.horizontal,
                                            children:
                                            List.generate(itemsPerOrder[i], (index){
                                              if(listCounter<getCartHistoryList.length){
                                                listCounter++;
                                              }
                                              return index<=2?Container(
                                                height: Dimensions.height20*4,
                                                width: Dimensions.height20*4,
                                                margin: EdgeInsets.only(right: Dimensions.width10/2),
                                                decoration: BoxDecoration(
                                                    borderRadius: BorderRadius.circular(Dimensions.radius20/2.5),
                                                    image: DecorationImage(
                                                        fit: BoxFit.cover,
                                                        image: NetworkImage(
                                                            AppConstants.UPLOAD_URL+getCartHistoryList[listCounter-1].img!
                                                        )
                                                    )
                                                ),
                                              ):Container();
                                            }),
                                          ),
                                          Container(
                                            height: Dimensions.height20*4,
                                            child: Column(
                                              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                              crossAxisAlignment: CrossAxisAlignment.end,
                                              children: [
                                                SmallText(text: "Total"),
                                                BigText(text: itemsPerOrder[i].toString()+" Items",),
                                                GestureDetector(
                                                  onTap: (){
                                                    var orderTime = cartOrderTimeToList();
                                                    Map<int,CartModel> moreOrder = {};
                                                    for(int j=0; j<getCartHistoryList.length;j++){
                                                      if(getCartHistoryList[j].time==orderTime[i]){
                                                        moreOrder.putIfAbsent(getCartHistoryList[j].id!, () =>
                                                            CartModel.fromJson(jsonDecode(jsonEncode(getCartHistoryList[j])))
                                                        );
                                                      }
                                                    }
                                                    Get.find<CartController>().setItems = moreOrder;
                                                    Get.find<CartController>().addToCartList();
                                                    Get.toNamed(RouteHelper.getCartPage());
                                                  },
                                                  child: Container(
                                                    padding: EdgeInsets.symmetric(
                                                        horizontal: Dimensions.width10,
                                                        vertical: Dimensions.height10/2),
                                                    decoration: BoxDecoration(
                                                        borderRadius: BorderRadius.circular(Dimensions.radius20/4),
                                                        border: Border.all(width: 1,color: AppColors.mainColor)
                                                    ),
                                                    child: SmallText(text: "one more",color: AppColors.mainColor),
                                                  ),
                                                )

                                              ],
                                            ),
                                          )

                                        ],
                                      )
                                    ],
                                  ),
                                )
                            ],
                          ))
                  )) :
              Container(
                  height: MediaQuery.of(context).size.height/1.5,
                  child: Center(
                    child: NoDataPage(
                      text: "You didn't buy anything so far!",
                      imgPath: "assets/image/empty_box.jpg",),
                  ));
            })
        ],
      ),
    );
  }
}