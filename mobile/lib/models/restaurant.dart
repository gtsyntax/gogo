import '../models/food.dart';

class Restaurant{
  String name;
  String waitTime;
  String distance;
  String label;
  String logoUrl;
  String desc;
  num score;
  Map<String,List<Food>> menu;
  Restaurant(this.name,
      this.waitTime,this.distance,this.label,this.logoUrl,this.desc,this.score,
      this.menu);
  static Restaurant generateRestaurant(){
    return Restaurant("Durumcu Tony Usta", "30-40 min", "2.5 km", "Restaurant", "assets/food.jpeg",
        "Baba dürüm is best", 4.9, {
      'Recommend':Food.generateRecommendFoods(),
          'Popular':Food.generatePopularFoods(),

        },);
  }
}