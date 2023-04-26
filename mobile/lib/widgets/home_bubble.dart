import 'package:chat_app/models/entity.dart';
import 'package:chat_app/services/auth_service.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class HomeBubble extends StatelessWidget {
  final Entity entity;
  final Alignment alignment;

  const HomeBubble({Key? key,required this.alignment,required this.entity})
      : super(key: key);

  @override
  Widget build(BuildContext context) {

    bool isAuthor = entity.author.userName==context.read<AuthService>().getUserName();

    return Align(
          alignment: alignment,
          child: Container(
            constraints: BoxConstraints(maxWidth:MediaQuery.of(context).size.width*0.5),
            padding: EdgeInsets.all(24),
            child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                      '${entity.text}',
                  style : TextStyle(fontSize: 18,color: Colors.white)),
                  if(entity.imageUrl!=null)
                    Image.network(
                    '${entity.imageUrl}',
                  height: 200,)

                  ],
             ),
                margin: EdgeInsets.all(50),
                decoration: BoxDecoration(
                  color: Colors.grey,
                   borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(12),
                    topRight: Radius.circular(12),
                    bottomLeft: Radius.circular(12))
                        ),
                ),
    );
  }
}
