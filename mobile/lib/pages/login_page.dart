import '../pages/home_page.dart';
import '../services/auth_service.dart';
import '../utils/colors.dart';
import '../utils/spaces.dart';
import '../utils/textfield_styles.dart';
import '../widgets/login_text_field.dart';
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
      Navigator.pushReplacementNamed(context, '/home',
          arguments: '${userNameController.text}');

      print('login successful!');
    } else {
      print('not successful');
    }


  }

  final userNameController = TextEditingController();
  final passwordController = TextEditingController();

  final _mainUrl = "https://gogo.com";

  Widget _buildHeader(context){
    return Column(
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
        Image.asset(
          'assets/food.jpeg',
          height: 200,),
      ],
    );
  }

  Widget _buildFooter(){
      return Column(
        children: [
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
                Text('Find us on:',style: TextStyle(
                  fontSize: 20,
                ),),
                SizedBox(height: 5,),
                Text(_mainUrl,style: TextStyle(
                  fontSize: 20,
                    decoration: TextDecoration.underline,
                    color: Colors.blue,
                ),),
                SizedBox(height: 10,),
              ],
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [

              SocialMediaButton.twitter(
                  size: 25,
                  color: Colors.blue,
                  url: "https://twitter.com/"
              ),
              SocialMediaButton.instagram(
                  size: 25,
                  color: Colors.purple,
                  url: "https://instagram.com/"
              ),
              SocialMediaButton.facebook(
                  size: 25,
                  color: Colors.blue,
                  url: "https://facebook.com"
              ),

            ],
          )
        ],
      );
  }

  Widget _buildForm(context){
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
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
        MaterialButton(
          color: primaryColor,
            onPressed:()async{
              await loginUser(context);
            }, //null
            child: Text(
              'Sign In',
              style: TextStyle( fontSize: 20,),

            )),
        verticalSpacing(24),
      ],

    );

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset:false,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: LayoutBuilder(
            builder: (context, BoxConstraints constraints) {
              if(constraints.maxWidth>1000){
                //web layout
                return Row(
                  children: [
                    Spacer(flex: 1,),
                    Expanded(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          _buildHeader(context),
                          _buildFooter(),
                        ],
                      ),
                    ),
                    Spacer(flex: 1,),
                    Expanded(child: _buildForm(context)),
                    Spacer(flex: 1,),
                  ],
                );
              }
              return Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  _buildHeader(context),
                  _buildForm(context),
                  _buildFooter(),
                ],
              );
            }
          ),
        ),
      ),
    );

  }
}