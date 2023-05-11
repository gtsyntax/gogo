import '../utils/colors.dart';
import 'package:flutter/material.dart';

class CustomAppBar extends StatelessWidget {

  final IconData icon;
  final double size;

  const CustomAppBar({Key? key,required this.icon,this.size=40}):super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        width: size,
      height: size,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(size/2),
        color: background,
      ),
      child: Icon(
        icon,
        color: Colors.black,
        size: 20,
      ),
    );
  }
}
