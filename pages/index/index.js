const app = getApp()

Page({
  data: {
    // 默认值
    setting:{
      skew: 0,
      rotate: 0,
      showLocation: false,
      showScale: false,
      subKey: '',
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    location: {
      latitude:31,
      longitude:120,
    },
    scale: 10,
    markers: [
      {
        iconPath:"/resources/car.png",
        id:0,
        latitude: 23.099994,
        longitude:113.324520,
        width:50,
        height:50
      },
      {
        iconPath:"/resources/car.png",
        id:1,
        latitude: 23.099994,
        longitude:114.324520,
        width:50,
        height:50
      }
    ]
  }
})