class Food{
  String imgUrl;
  String desc;
  String name;
  String waitTime;
  num score;
  String cal;
  num price;
  num quantity;
  List<Map<String,String>> ingredients;
  String about;
  bool hightLight;
  Food(this.imgUrl,this.desc,this.name,this.waitTime,this.score,this.cal,
      this.price,this.quantity,this.ingredients,this.about,
      {this.hightLight=false});
  static List<Food> generateRecommendFoods(){
    return [
      Food("assets/babaDurum.png", "No1. in sales", "Baba Dürüm", "50 min",
         4.8, "325 kcal", 79, 1, [{'Meat':'assets/food.jpeg'}], "best food",hightLight: true),
      Food("assets/babaDurum.png", "No1. in sales", "Baba Dürüm", "50 min",
          4.8, "325 kcal", 79, 1, [{'Meat':'assets/food.jpeg'}], "best food",hightLight: false),
      Food("assets/babaDurum.png", "No1. in sales", "Baba Dürüm", "50 min",
          4.8, "325 kcal", 79, 1, [{'Meat':'assets/food.jpeg'}], "best food",hightLight: false),
    ];
  }
  static List<Food> generatePopularFoods(){
    return [
      Food("assets/babaDurum.png", "desc", "Baba Dürüm", "waitTime", 5.0, "cal", 99,1, [{'Egg':'assets/food.jpeg'}], "about")
    ];
  }

}