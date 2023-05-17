class Entity{
  String text;
  String? imageUrl;
  String id;
  int createdAt;
  Author author;

 Entity(
      {required this.text,required this.id,required this.createdAt,
        this.imageUrl, required this.author});

  factory Entity.fromJson(Map <String,dynamic>json){
    return Entity(
        imageUrl: json['image'],
        text: json['text'],
        id: json['id'],
        createdAt: json['createdAt'],
        author: Author.fromJson(json['author']));
  }
}

class Author{
  String userName;

  Author({required this.userName});

  factory Author.fromJson(Map<String,dynamic>json){
    return Author(userName: json['username']);
  }
}