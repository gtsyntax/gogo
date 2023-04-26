import 'dart:convert';
import 'package:chat_app/models/image_model.dart';
import 'package:chat_app/models/restaurant.dart';
import 'package:chat_app/repo/image_repository.dart';
import 'package:chat_app/services/auth_service.dart';
import 'package:chat_app/utils/colors.dart';
import 'package:chat_app/widgets/custom_app_bar.dart';
import 'package:chat_app/widgets/food_list.dart';
import 'package:chat_app/widgets/food_list_view.dart';
import 'package:chat_app/widgets/restaurant_info.dart';
import 'package:http/http.dart' as http;
import 'package:chat_app/models/entity.dart';
import 'package:chat_app/widgets/home_bubble.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';



class HomePage extends StatefulWidget {

  // HomePage({Key? key,}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  //initiate state of messages
  var selected=0;
  final pageController= PageController();
  final restaurant = Restaurant.generateRestaurant();

  List<Entity> _categories =[];

  _loadInitialMessages() async {
    rootBundle.loadString('assets/mock_messages.json').then((response){
      final List<dynamic> decodedList = jsonDecode(response) as List;
      final List<Entity> _category = decodedList.map((listItem){
        return Entity.fromJson(listItem);
      }).toList();

      print(response);

      //final state of messages
      setState(() {
        _categories = _category;
      });
    }).then((_){
      print('done!');
    });
    print('Something');
  }

final ImageRepository _imageRepo= ImageRepository();

@override
  void initState() {
    _loadInitialMessages();

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    //final username = context.watch<AuthService>().getUserName();
    return Scaffold(
      backgroundColor: background,
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          CustomAppBar(
            Icons.search_outlined,
            Icons.logout,
          ),
          RestaurantInfo(),
          FoodList(selected,
              (int index){
                  setState(() {
                      selected=index;
                  });
                  pageController.jumpToPage(index);
              } , restaurant),
          Expanded(
              child: FoodListView(
                     selected,

                    (int index) {
                    setState(() {
                      selected = index;
                    });
                  },
                pageController,
                restaurant,

               ),
          ),
          Container(
            padding: EdgeInsets.symmetric(horizontal: 25),
            height: 60,
            child: SmoothPageIndicator(
              controller: pageController,
              count: restaurant.menu.length,
              effect: CustomizableEffect(
                dotDecoration: DotDecoration(
                  width: 8,
                  height: 8,
                  color: Colors.grey.withOpacity(0.5),
                  borderRadius: BorderRadius.circular(8),

                ) ,
                activeDotDecoration: DotDecoration(
                  width: 10,
                  height: 10,
                  color: background,
                  borderRadius: BorderRadius.circular(10),
                  dotBorder: DotBorder(
                    color: primaryColor,
                    padding: 2,
                    width: 2,
                  )
                )
              ),
                onDotClicked: (index) => pageController.jumpToPage(index),
            ),

          )
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        backgroundColor: primaryColor,
        elevation: 2,
        child: Icon(Icons.shopping_bag_outlined,
        color: Colors.black,
        size:  30,),
      ),

      /*
      appBar:AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
          actions: [
            IconButton(
                onPressed: (){
                  context.read<AuthService>().logoutUser();
              Navigator.pushReplacementNamed(context,'/');
            }, icon: Icon(Icons.logout)),
            IconButton(
                onPressed: (){
                }, icon: Icon(Icons.search))
              ,
          ],
    ),
      */
      /*
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: ListView.builder(
                itemCount: _categories.length,
                itemBuilder: (context,index) {
              return HomeBubble(
                  alignment: Alignment.center,
                  entity:_categories[index]
              );
            })),

        ],
      ),
      */
    );
  }
}


