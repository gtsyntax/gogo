import 'package:chat_app/login_page.dart';
import 'package:chat_app/home_page.dart';
import 'package:chat_app/services/auth_service.dart';
import 'package:chat_app/utils/colors.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

void main() async{
  WidgetsFlutterBinding.ensureInitialized();
  await AuthService.init();
  runApp(ChangeNotifierProvider(
      create: (BuildContext context) => AuthService(),
    child: FoodApp(),
  ));
}


class FoodApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(
      SystemUiOverlayStyle(
        statusBarColor: Colors.transparent,
      )
    );
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Food Delivery App",
      theme: ThemeData(
         // primarySwatch: BrandColor.primaryColor,
          appBarTheme: AppBarTheme(
              backgroundColor: Colors.blue,
              foregroundColor: Colors.black)),
      home: FutureBuilder<bool>(
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
      routes: {'/chat': (context) => HomePage()},
    );
  }
}



