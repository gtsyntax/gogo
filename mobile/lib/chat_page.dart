import 'dart:convert';
import 'package:chat_app/models/image_model.dart';
import 'package:chat_app/repo/image_repository.dart';
import 'package:chat_app/services/auth_service.dart';
import 'package:http/http.dart' as http;
import 'package:chat_app/models/chat_message_entity.dart';
import 'package:chat_app/widgets/chat_bubble.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

class ChatPage extends StatefulWidget {

   ChatPage({Key? key,}) : super(key: key);

  @override
  State<ChatPage> createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {
  //initiate state of messages
  List<ChatMessageEntity> _messages =[];

  _loadInitialMessages() async {
    rootBundle.loadString('assets/mock_messages.json').then((response){
      final List<dynamic> decodedList = jsonDecode(response) as List;
      final List<ChatMessageEntity> _chatMessages = decodedList.map((listItem){
        return ChatMessageEntity.fromJson(listItem);
      }).toList();

      print(response);

      //final state of messages
      setState(() {
        _messages = _chatMessages;
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

    final username = ModalRoute.of(context)!.settings.arguments as String;
    return Scaffold(
        appBar:AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
          title: Text('Hi $username!'),
          actions: [
            IconButton(
                onPressed: (){
                  context.read<AuthService>().logoutUser();
              Navigator.pushReplacementNamed(context,'/');
              print('Icon pressed!');
            }, icon: Icon(Icons.logout))
          ],
    ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
                itemCount: _messages.length,
                itemBuilder: (context,index) {
              return ChatBubble(
                  alignment: Alignment.center,
                  entity:_messages[index]
              );
            })),

        ],
      ),
    );
  }
}


