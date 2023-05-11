import '../utils/colors.dart';
import 'package:flutter/material.dart';

class ExpandableText extends StatefulWidget {
  final String text;
  const ExpandableText({Key? key,required this.text}) : super(key: key);

  @override
  State<ExpandableText> createState() => _ExpandableTextState();
}

class _ExpandableTextState extends State<ExpandableText> {

  late String firstHalf;
  late String secondHalf;

  bool hiddenText = true;
  double textHeight = 100;

  @override
  void initState(){
    super.initState();
    if(widget.text.length>textHeight){
      firstHalf=widget.text.substring(0,textHeight.toInt());
      secondHalf=widget.text.substring(textHeight.toInt()+1,widget.text.length);
    }
    else{
      firstHalf=widget.text;
      secondHalf="";
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: secondHalf.isEmpty ? Text(firstHalf) : Column(
        children: [
          Text(hiddenText ? (firstHalf+"...") : (firstHalf+secondHalf)),
          InkWell(
            onTap: (){
              setState(() {
                hiddenText =! hiddenText;
              });
            },
            child: Row(
              children: [
                Text("Show more",
                    style: TextStyle(
                  color: primaryColor,),),
                Icon(hiddenText ? Icons.arrow_drop_down :
                Icons.arrow_drop_up,color: primaryColor,)
              ],
            ),
          )
        ],
      ),
    );
  }
}

