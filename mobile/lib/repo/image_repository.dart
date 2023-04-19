
import 'dart:convert';
import 'dart:io';

import 'package:http/http.dart' as http;
import '../models/image_model.dart';

class ImageRepository {
  Future<List<PixelfordImage>> getNetworkImages() async {
    try {
      var endPointUrl = Uri.parse("https://www.tony.com");
      final response = await http.get(endPointUrl);

      if (response.statusCode == 200) {
        final List<dynamic> decodedList = jsonDecode(response.body) as List;
        final List<PixelfordImage> _imageList = decodedList.map((listItem) {
          return PixelfordImage.fromJson(listItem);
        }).toList();
        print(_imageList[0].urlFullSize);
        return _imageList;
      } else {
        throw Exception('API not successful!');
      }
    } on SocketException {
      throw Exception("No internet connection");
    }
    on HttpException {
      throw Exception("Couldnt recieve images");
    }
    on FormatException {
      throw Exception("Bad response format ");
    }

    catch (e) {
      print(e);
      throw Exception("Unknown error");
    }
  }
}