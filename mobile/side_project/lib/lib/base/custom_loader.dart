import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:side_project/controllers/auth_controller.dart';
import 'package:side_project/utils/colors.dart';
import 'package:side_project/utils/dimensions.dart';

class CustomLoader extends StatelessWidget {
  const CustomLoader({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        height: Dimensions.height20*5,
        width: Dimensions.width20*5,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(Dimensions.height20*5/2),
          color: AppColors.mainColor
        ),
        alignment: Alignment.center,
        child: CircularProgressIndicator(
            color: Colors.white
        ),
      ),
    );
  }
}
