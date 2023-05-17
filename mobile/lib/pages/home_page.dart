import 'dart:convert';
import '../pages/login_page.dart';
import '../models/image_model.dart';
import '../models/restaurant.dart';
import '../pages/order_page.dart';
import '../repo/image_repository.dart';
import '../services/auth_service.dart';
import '../utils/colors.dart';
import '../widgets/custom_app_bar.dart';
import '../widgets/food_list.dart';
import '../widgets/food_list_view.dart';
import '../widgets/restaurant_info.dart';
import 'package:http/http.dart' as http;
import '../models/entity.dart';
import '../widgets/home_bubble.dart';
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

      //print(response);

      //final state of messages
      setState(() {
        _categories = _category;
      });
    }).then((_){
     // print('done!');
    });
   // print('Something');
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
          Container(
            child: Container(
              margin: EdgeInsets.only(top: 45,bottom: 15),
              padding: EdgeInsets.only(left: 20,right: 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children:[
                Column(
                 children: [
                   Row(
                     children: [
                       Text("Istanbul",
                         style: TextStyle(
                           color: Colors.black,
                           fontSize: 25,
                           fontWeight: FontWeight.bold,),
                       ),
                       Icon(Icons.arrow_drop_down_rounded)
                     ],
                   )
                ],
                ),
                Center(
                  child: Container(
                    width: 45,
                    height: 45,
                    child: Icon(Icons.search,color: Colors.black,),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(15),
                      color: primaryColor
                          ),
                      ),
                ),
                ],
              ),
            ),
          ),
          /*
          CustomAppBar(
            Icons.exit_to_app,
            Icons.search_outlined,
            leftCallback: () => Navigator.push(context,MaterialPageRoute(builder: (context)=> LoginPage() ),),
          ),
          */

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
        onPressed: () {
          Navigator.push(context,MaterialPageRoute(builder: (context)=> OrderPage() ));

        },
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


