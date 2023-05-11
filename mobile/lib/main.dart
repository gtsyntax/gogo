
import '../controllers/popular_product_controller.dart';
import '../pages/home_page.dart';
import '../pages/login_page.dart';
import '../routes/route_helper.dart';
import '../services/auth_service.dart';
import '../utils/colors.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:provider/provider.dart';
import 'helper/dependencies.dart' as dep;

Future<void> main() async{

  WidgetsFlutterBinding.ensureInitialized();
  await AuthService.init();

  await dep.init();
  runApp(
     ChangeNotifierProvider(
      create: (BuildContext context) => AuthService(),
    child: FoodApp(),)
    // FoodApp()
  );
}


class FoodApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Get.find<PopularProductController>().getPopularProductList();
    //Get.find<RecommendedProductController>().getRecommendedProductList();
    SystemChrome.setSystemUIOverlayStyle(
      SystemUiOverlayStyle(
        statusBarColor: Colors.transparent,
      )
    );
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Food Delivery App",
      theme: ThemeData(
         // primarySwatch: BrandColor.primaryColor,
          appBarTheme: AppBarTheme(
              backgroundColor: Colors.blue,
              foregroundColor: Colors.black)),
      home: HomePage(),
      /*
      FutureBuilder<bool>(
        future: context.read<AuthService>().isLoggedIn(),
        builder: (context,AsyncSnapshot<bool>snapshot){
          if(snapshot.connectionState== ConnectionState.done){
            if(snapshot.hasData && snapshot.data!){
              return HomePage();
            } else
              return LoginPage();
          }
        return CircularProgressIndicator();
      }),
       */
      //routes: {'/home': (context) => HomePage()},
      initialRoute: RouteHelper.initial,
      getPages: RouteHelper.routes,
    );
  }
}



