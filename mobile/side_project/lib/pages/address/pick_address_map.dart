

import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:side_project/base/custom_button.dart';
import 'package:side_project/controllers/location_controller.dart';
import 'package:get/get.dart';
import 'package:side_project/routes/route_helper.dart';
import 'package:side_project/utils/colors.dart';
import 'package:side_project/utils/dimensions.dart';

class PickAddressMap extends StatefulWidget {
  final bool fromSignUp;
  final bool fromAddress;
  final GoogleMapController? googleMapController;

  const PickAddressMap({Key? key, required this.fromSignUp, required this.fromAddress, this.googleMapController}) : super(key: key);

  @override
  State<PickAddressMap> createState() => _PickAddressMapState();
}

class _PickAddressMapState extends State<PickAddressMap> {

  late  LatLng _initialPosition;
  late GoogleMapController _mapController;
  late CameraPosition _cameraPosition;

  @override
  void initState() {
    super.initState();
    if(Get.find<LocationController>().addressList.isEmpty){
      _initialPosition = LatLng(41.04562,29.00521);
      _cameraPosition = CameraPosition(target: _initialPosition,zoom: 17);
    }
    else{
      if(Get.find<LocationController>().addressList.isNotEmpty){
        _initialPosition=LatLng(
            double.parse(Get.find<LocationController>().getAddress["latitude"]),
            double.parse(Get.find<LocationController>().getAddress["longitude"]));
        _cameraPosition = CameraPosition(target: _initialPosition,zoom: 17);

      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return GetBuilder<LocationController>(builder: (locationController){
      return Scaffold(
        body:SafeArea(
          child: Center(
            child: SizedBox(
              width: double.maxFinite,
              child: Stack(
                children: [
                  GoogleMap(
                    initialCameraPosition: CameraPosition(
                        target: _initialPosition,zoom: 17
                    ),
                    zoomControlsEnabled: false,
                    onCameraMove: (CameraPosition cameraPosition){
                      _cameraPosition = cameraPosition;
                    },
                    onCameraIdle: (){
                      Get.find<LocationController>().updatePosition(_cameraPosition,false);
                    },
                  ),
                  Center(
                    child: !locationController.loading?Image.asset(
                        "assets/image/pick_marker.png",height: Dimensions.height45,width: Dimensions.width45)
                        :CircularProgressIndicator()
                  ),
                  /*
                  Positioned(
                      top:  Dimensions.height45,
                      left: Dimensions.width20,
                      right: Dimensions.width20,
                      child: Container(
                        padding: EdgeInsets.symmetric(horizontal: Dimensions.width10),
                        height: Dimensions.height45,
                        decoration: BoxDecoration(
                          color: AppColors.mainColor,
                          borderRadius: BorderRadius.circular(Dimensions.radius20/2 )
                        ),
                        child: Row(
                          children: [
                            Icon(Icons.location_on,size: 25,),
                            Expanded(child: Text(
                              '${locationController.pickPlacemark.name??''}',
                              style: TextStyle(
                                 color: Colors.white,
                                fontSize: Dimensions.font16
                              ),
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                            ))
                          ],
                        ),

                      )
                  ),

                   */
                  Positioned(
                      bottom: Dimensions.height20*4,
                      left: Dimensions.width20,
                      right: Dimensions.width20,
                      child: locationController.isLoading
                          ? Center(child: CircularProgressIndicator())
                          : CustomButton(
                        buttonText: locationController.inZone ? widget.fromAddress ?
                        'Pick Address' : 'Pick Location' : 'Service is not available in your area',
                        onPressed: (locationController.buttonDisabled || locationController.loading)
                            ? null : (){
                          if(locationController.pickPosition.latitude != 0 /* &&
                          locationController.pickPlacemark.name != null*/) {
                            if (widget.fromAddress) {
                              if (widget.googleMapController != null) {
                                print("Now you can clicked on this");
                                widget.googleMapController!.moveCamera(
                                    CameraUpdate.newCameraPosition(
                                        CameraPosition(
                                            target: LatLng(
                                                locationController.pickPosition.latitude,
                                                locationController.pickPosition.longitude
                                            )
                                        )
                                    )
                                );
                                locationController.setAddAddressData();
                              }
                              Get.toNamed(RouteHelper.getAddressPage());
                            }
                          }
                        },
                      )
                  )
                ],
              ),
            ),
          ),
        ),
      );
    });

  }
}
