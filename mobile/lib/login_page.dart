import 'package:chat_app/chat_page.dart';
import 'package:chat_app/services/auth_service.dart';
import 'package:chat_app/utils/spaces.dart';
import 'package:chat_app/utils/textfield_styles.dart';
import 'package:chat_app/widgets/login_text_field.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:social_media_buttons/social_media_buttons.dart';


class LoginPage extends StatelessWidget {
   LoginPage({Key? key}) : super(key: key);

   final _formkey = GlobalKey<FormState>();

  Future<void> loginUser(BuildContext context) async{
    if(_formkey.currentState != null && _formkey.currentState!.validate()){
      print(userNameController.text);
      print(passwordController.text);

      await context.read<AuthService>().loginUser(userNameController.text);
      Navigator.pushReplacementNamed(context, '/chat',
          arguments: '${userNameController.text}');

      print('login successful!');
    } else {
      print('not successful');
    }


  }

  final userNameController = TextEditingController();
  final passwordController = TextEditingController();

  final _mainUrl = "https://tony.com";


  @override
  Widget build(BuildContext context) {
    return Scaffold(


      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                'Let\'s sign you in!',
                textAlign: TextAlign.center,
                style: TextStyle(
                    fontSize: 30,
                    color:Colors.black,
                    fontWeight: FontWeight.bold, letterSpacing: 0.5
                ),
              ),
              Text(
                'Welcome back! \n You\'ve been missed!',
                textAlign: TextAlign.center,
                style: TextStyle(
                    fontWeight: FontWeight.w500,
                    fontSize:20,
                    color: Colors.blueGrey
                ),
              ),
              Image.asset(
                'assets/food.jpeg',
                height: 200,),
              Form(
                key: _formkey,
                child: Column(
                  children: [
                    LoginTextField(
                      hintText: "Enter your username",
                      validator: (value){
                        if(value!=null && value.isNotEmpty && value.length<5){
                          return "Your username should be more than 5 characters!";
                        } else if(value!=null && value.isEmpty){
                          return "Please type your username";
                        }
                        return null;
                      },
                      controller: userNameController,


                    ),
                    verticalSpacing(24),
                    LoginTextField(
                      hintText: "Enter your password",
                      hasAsterisks: true,
                      controller: passwordController,


                      ),
                  ],
                ),
              ),
              verticalSpacing(24),
              ElevatedButton(
                  onPressed:()async{
                   await loginUser(context);
                  }, //null
                  child: Text(
                      'Login',
                    style: TextStyle(fontSize: 30,fontWeight: FontWeight.w300),
                  )),
              InkWell(
                splashColor: Colors.red,
                onDoubleTap: (){
                  print('double tapped!');
                },
                onLongPress: (){
                  print('long pressed!');
                },
                onTap: () async{
                  print('Link clicked!');
                    if (!await launch(_mainUrl)){
                    throw 'Could not launch this!';
                  }
                },
                child: Column(
                  children: [
                    Text('Find us on'),
                    Text(_mainUrl),
                  ],
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [

                  SocialMediaButton.twitter(
                    size: 20,
                    color: Colors.blue,
                    url: "https://twitter.com/"
                  ),
                  SocialMediaButton.instagram(
                      size: 20,
                      color: Colors.purple,
                      url: "https://instagram.com/"
                  ),
                  SocialMediaButton.facebook(
                    size: 20,
                      color: Colors.blue,
                      url: "https://facebook.com"
                  ),

                ],
              )
            ],
          ),
        ),
      ),
    );

  }
}