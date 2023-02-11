(function(){
    var script = {
 "defaultVRPointer": "laser",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Player",
 "paddingBottom": 0,
 "layout": "absolute",
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_3A8CA106_2B65_2006_41BE_9DEBD2BEE4CE",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 20,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "minWidth": 20,
 "borderSize": 0,
 "definitions": [{
 "thumbnailUrl": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Sudut Baca",
 "id": "panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6",
   "backwardYaw": 22.14,
   "yaw": -63.45,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BC92A5D1_A1B0_3B29_41DD_AC323A696C30",
  "this.overlay_A18EE4AD_B0E1_6133_41DA_7FC8CD7EC1E5"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 116.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_34232994_3B2E_7F37_41CC_EB27C24412E2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 20.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3496FA24_3B2E_7D17_41C2_6ECF3C12E7AF"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3437D9A5_3B2E_7F11_41C1_4F5990B27949"
},
{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_B9C37289_A555_9261_41DC_A78A0CC8C489",
 "class": "FadeOutEffect"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A1431678_B0E7_A111_41E0_20C67D1FBBD1",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Gerbang Utama",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A148E676_B0E7_A111_41DC_94DE0A4E02FC"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_34AAFA02_3B2E_7D13_41C7_2F51ECE7B89F"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 93.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_35C19967_3B2E_7F11_41BF_59A6E42AAE6A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_348A4A1C_3B2E_7D37_41AD_C1ECAEA7A061"
},
{
 "thumbnailUrl": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Gang Spot",
 "id": "panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9",
   "backwardYaw": 99.97,
   "yaw": 161.33,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BCB17C7C_A190_29DE_41D7_CDEBBBEB027E",
  "this.overlay_A15046A1_B0E7_A132_41C4_04F05426CC9A"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Aula",
 "id": "panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F",
   "backwardYaw": -163.77,
   "yaw": 158.24,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8",
   "backwardYaw": 173.41,
   "yaw": -9.57,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B6CB9235_A334_B6E6_41D0_35182D08009E",
  "this.overlay_B53BB8E2_A335_9363_41DE_821442D8CF73",
  "this.overlay_A2EAA18B_B0E1_E3F7_41E3_7D30B9498A64"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -139.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2B62891B_3B2E_7F31_41CB_975B2C1851AA"
},
{
 "thumbnailUrl": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Pos Tiket Jembatan",
 "id": "panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C",
   "backwardYaw": -160.94,
   "yaw": -159.27,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5",
   "backwardYaw": -9.57,
   "yaw": 173.41,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BE0BF8B8_A1B0_2967_41DF_56FA13550485",
  "this.overlay_BC519B6B_A1B0_2FFA_41D5_02BEAAD87496",
  "this.overlay_A176B5E1_B0E2_A333_41A6_75BF37F16F4B"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_A1454BCE_B0E1_6771_41E2_EE71180649FA",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Lorong Payung",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A148FBCD_B0E1_6773_41CC_F8C85D9DC475"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Jembatan",
 "id": "panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C",
   "backwardYaw": -95.03,
   "yaw": -170.7,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BFAF3766_A1B0_27EB_41DB_DB9BEBCB4A2B"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AE333ED7_A069_6E80_41DC_11F22479292A_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_35EA1944_3B2E_7F17_41C9_E3325A652FE5"
},
{
 "shadowBlurRadius": 6,
 "id": "window_93BD0101_BFEF_FD83_41D2_47B21DC63648",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Logo Kampung Warna Warni",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_93BB1106_BFEF_FD81_4167_5F379208A9C9"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Pintu Masuk 2",
 "id": "panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C",
   "backwardYaw": -132.38,
   "yaw": -10.21,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_95083C0A_BFFD_2B81_41DD_619E6C16D7E9",
  "this.overlay_9538BE4E_BFFF_6781_41DF_6631CF879DF1"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_95286E27_BFFF_678F_41E4_078BCC6F385D",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Pintu Masuk 2",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_95262E29_BFFF_6783_41D0_8D2EE96BF560"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1)",
   "media": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A",
   "camera": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
   "media": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB",
   "camera": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3)",
   "media": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9",
   "camera": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4)",
   "media": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47",
   "camera": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5)",
   "media": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74",
   "camera": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 6)",
   "media": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130",
   "camera": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 6, 7)",
   "media": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14",
   "camera": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 7, 8)",
   "media": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5",
   "camera": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 8, 9)",
   "media": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE",
   "camera": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 9, 10)",
   "media": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58",
   "camera": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 10, 11)",
   "media": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F",
   "camera": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 11, 12)",
   "media": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C",
   "camera": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 12, 13)",
   "media": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630",
   "camera": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 13, 14)",
   "media": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6",
   "camera": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 14, 15)",
   "media": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8",
   "camera": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 15, 16)",
   "media": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B",
   "camera": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 16, 17)",
   "media": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15",
   "camera": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 17, 18)",
   "media": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51",
   "camera": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 18, 19)",
   "media": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C",
   "camera": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 19, 0)",
   "media": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0",
   "camera": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_camera"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "class": "PlayList"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A1BD4488_B0E1_61F1_41E4_3FA701D7F6CE",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Ruang Baca",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A1A17486_B0E1_61F1_41D3_76238C6014BD"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_A1288234_B0E6_E111_41BF_C3B92461DBC2",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Rumah Warga",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A1549233_B0E6_E117_41E4_E3DF0B94076A"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A",
   "camera": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB",
   "camera": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9",
   "camera": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47",
   "camera": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74",
   "camera": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130",
   "camera": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14",
   "camera": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5",
   "camera": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE",
   "camera": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58",
   "camera": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F",
   "camera": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C",
   "camera": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630",
   "camera": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6",
   "camera": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8",
   "camera": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B",
   "camera": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15",
   "camera": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51",
   "camera": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C",
   "camera": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_camera"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 0)",
   "media": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0",
   "camera": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_camera"
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_3F565F63_2B7C_E03E_41BA_41347EFA6A9E.mp3",
  "oggUrl": "media/audio_3F565F63_2B7C_E03E_41BA_41347EFA6A9E.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "audio Kampung Warna Warni "
 },
 "id": "audio_3F565F63_2B7C_E03E_41BA_41347EFA6A9E",
 "autoplay": true
},
{
 "shadowBlurRadius": 6,
 "id": "window_956F41A0_BFFD_5C82_41C9_E0C8AE334DEE",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Loket Karcis",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_956921A4_BFFD_5C81_41D6_93CABC943042"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 169.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2B049900_3B2E_7F0F_41B4_BA4E754EEDD6"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A15E9015_B0E6_A113_41E5_64D45B642373",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Toilet",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A15B6014_B0E6_A111_41BB_10532E221BB6"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2B19E911_3B2E_7F31_41B0_14593FB2B4C2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_35DB598B_3B2E_7F11_41C6_8873F5BD680F"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B16668F7_A068_9280_41E3_8F425083DD47_camera"
},
{
 "shadowBlurRadius": 6,
 "id": "window_9537C97F_BFEE_EC7F_41CF_B7238DBB62EB",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Jembatan Brantas",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_95365986_BFEE_EC81_41D4_9207D5D6EAAA"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -89.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_35C76971_3B2E_7FF1_41B7_6D2568782C6B"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -80.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_344879E9_3B2E_7F11_41B6_0FCD9C56933C"
},
{
 "thumbnailUrl": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Gang Payung",
 "id": "panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130",
   "backwardYaw": -14.04,
   "yaw": 4.22,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6",
   "backwardYaw": 4.89,
   "yaw": -176.36,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BC4513E2_A1B3_FEEB_41E1_B137376B91D4",
  "this.overlay_80DBB702_A1B0_272B_41E1_50A3E773D997",
  "this.overlay_A1503BF3_B0E1_6716_41D2_BE2389F3D661"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
   "media": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A",
   "camera": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
   "media": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB",
   "camera": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3)",
   "media": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9",
   "camera": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 4)",
   "media": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47",
   "camera": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 4, 5)",
   "media": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74",
   "camera": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 5, 6)",
   "media": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130",
   "camera": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 6, 7)",
   "media": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14",
   "camera": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 7, 8)",
   "media": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5",
   "camera": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 8, 9)",
   "media": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE",
   "camera": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 9, 10)",
   "media": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58",
   "camera": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 10, 11)",
   "media": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F",
   "camera": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 11, 12)",
   "media": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C",
   "camera": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 12, 13)",
   "media": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630",
   "camera": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 13, 14)",
   "media": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6",
   "camera": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 14, 15)",
   "media": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8",
   "camera": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 15, 16)",
   "media": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B",
   "camera": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 16, 17)",
   "media": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15",
   "camera": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 17, 18)",
   "media": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51",
   "camera": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 18, 19)",
   "media": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C",
   "camera": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 19, 0)",
   "media": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0",
   "camera": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_camera"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_camera"
},
{
 "thumbnailUrl": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Loroong Payung Atas",
 "id": "panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0",
   "backwardYaw": -10.21,
   "yaw": -132.38,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_950515E6_BFE5_6481_41CB_BD65930C7856",
  "this.overlay_95A5DD2A_BFE3_2581_41DF_06D2E50315D2",
  "this.overlay_957E31EF_BFFD_5C9F_41CB_8342953CEE50"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_A1D9EA6B_B0E1_A137_41C2_EF633EC274C0",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Tangga Warna Warni",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A1DCDA6A_B0E1_A131_41C5_B884D7D196E5"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 11.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_347FC9E0_3B2E_7F0F_41C5_501CD9AC9C85"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A1BE0457_B0E3_E11F_41D5_459FBEF7EBBB",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Taman Warna Warni",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A1A23456_B0E3_E111_41E3_03742FCE9968"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1)",
   "media": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A",
   "camera": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2)",
   "media": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB",
   "camera": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 3)",
   "media": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9",
   "camera": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 3, 4)",
   "media": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47",
   "camera": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 4, 5)",
   "media": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74",
   "camera": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 5, 6)",
   "media": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130",
   "camera": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 6, 7)",
   "media": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14",
   "camera": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 7, 8)",
   "media": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5",
   "camera": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 8, 9)",
   "media": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE",
   "camera": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 9, 10)",
   "media": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58",
   "camera": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 10, 11)",
   "media": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F",
   "camera": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 11, 12)",
   "media": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C",
   "camera": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 12, 13)",
   "media": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630",
   "camera": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 13, 14)",
   "media": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6",
   "camera": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 14, 15)",
   "media": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8",
   "camera": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 15, 16)",
   "media": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B",
   "camera": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 16, 17)",
   "media": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15",
   "camera": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 17, 18)",
   "media": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51",
   "camera": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 18, 19)",
   "media": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C",
   "camera": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 19, 0)",
   "media": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0",
   "camera": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_camera"
  }
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "class": "PlayList"
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "media": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A",
   "camera": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "media": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB",
   "camera": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "media": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9",
   "camera": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 4)",
   "media": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47",
   "camera": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 4, 5)",
   "media": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74",
   "camera": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 5, 6)",
   "media": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130",
   "camera": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 6, 7)",
   "media": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14",
   "camera": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 7, 8)",
   "media": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5",
   "camera": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 8, 9)",
   "media": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE",
   "camera": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 9, 10)",
   "media": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58",
   "camera": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 10, 11)",
   "media": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F",
   "camera": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 11, 12)",
   "media": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C",
   "camera": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 12, 13)",
   "media": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630",
   "camera": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 13, 14)",
   "media": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6",
   "camera": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 14, 15)",
   "media": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8",
   "camera": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 15, 16)",
   "media": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B",
   "camera": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 16, 17)",
   "media": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15",
   "camera": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 17, 18)",
   "media": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51",
   "camera": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 18, 19)",
   "media": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C",
   "camera": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 19, 0)",
   "media": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0",
   "camera": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_camera"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B16C2283_A06B_7681_41E1_5CD30D022130_camera"
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "id": "ImageResource_B9C35289_A555_9261_41B5_40F308C100CA",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_B20A90EF_A554_8FA0_41C1_91213A1DC819_0_0.jpg",
   "width": 2480,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/zoomImage_B20A90EF_A554_8FA0_41C1_91213A1DC819_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/zoomImage_B20A90EF_A554_8FA0_41C1_91213A1DC819_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/zoomImage_B20A90EF_A554_8FA0_41C1_91213A1DC819_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_35FAE95E_3B2E_7F33_41C8_330249A45931"
},
{
 "shadowBlurRadius": 6,
 "id": "window_93DA2B7A_BFE3_2D81_41D5_7784E422346D",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Sudut Love",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_93DC5B7B_BFE3_2D87_41D6_EBC6179066F5"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 32.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_35F41956_3B2E_7F33_41A0_CEF43BB01C03"
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1)",
   "media": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A",
   "camera": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2)",
   "media": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB",
   "camera": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 3)",
   "media": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9",
   "camera": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 3, 4)",
   "media": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47",
   "camera": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 4, 5)",
   "media": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74",
   "camera": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 5, 6)",
   "media": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130",
   "camera": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 6, 7)",
   "media": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14",
   "camera": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 7, 8)",
   "media": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5",
   "camera": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 8, 9)",
   "media": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE",
   "camera": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 9, 10)",
   "media": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58",
   "camera": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 10, 11)",
   "media": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F",
   "camera": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 11, 12)",
   "media": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C",
   "camera": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 12, 13)",
   "media": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630",
   "camera": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 13, 14)",
   "media": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6",
   "camera": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 14, 15)",
   "media": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8",
   "camera": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 15, 16)",
   "media": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B",
   "camera": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 16, 17)",
   "media": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15",
   "camera": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 17, 18)",
   "media": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51",
   "camera": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 18, 19)",
   "media": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C",
   "camera": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 19, 0)",
   "media": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0",
   "camera": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_camera"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "class": "PlayList"
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_B9C36289_A555_9261_41C9_A613B2741A91",
 "class": "FadeInEffect"
},
{
 "thumbnailUrl": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Lorong Payung",
 "id": "panorama_B0A43264_A068_9187_41C3_90F2834CF3E6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B",
   "backwardYaw": -63.45,
   "yaw": 22.14,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15",
   "backwardYaw": -178.71,
   "yaw": -163.51,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14",
   "backwardYaw": -176.36,
   "yaw": 4.89,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_80DF94C1_A1B0_7929_41E0_7F47DE5AD5BE",
  "this.overlay_BFA2E575_A1B3_DBE9_4141_4713902FBEAC",
  "this.overlay_94AF58B6_BFE5_2C81_4194_454D0724A1B2",
  "this.overlay_FC8EFF52_EDE5_D42D_41D7_89E3B1AA41C7"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Gang Step",
 "id": "panorama_B0B05C02_A068_B180_41D0_233B6AC37F74",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9",
   "backwardYaw": -77.94,
   "yaw": 6.9,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130",
   "backwardYaw": 122.14,
   "yaw": -147.17,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8552B225_A190_3969_41CF_3D5A5FEA38D6",
  "this.overlay_B0D325EA_A33D_FD62_41E1_618BB47FAD73",
  "this.overlay_A13F1260_B0E6_E132_41DD_2BA052CE2F79"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_A119C166_B0E1_E331_41E0_036F0924AB14",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Aula",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A11DD165_B0E1_E333_41C8_17E2203CACE8"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 47.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_34F88A3D_3B2E_7D71_41BC_0F78D0709234"
},
{
 "shadowBlurRadius": 6,
 "id": "window_957CD88B_BFE5_2C87_41DE_F71DCB5E427B",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Ruang Baca",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_9571888D_BFE5_2C83_41E2_D39C33CD7ED3"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Bawah Sungai",
 "id": "panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE",
   "backwardYaw": 90.02,
   "yaw": -86.86,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BBC8B857_A32C_92A2_41E2_C32C2EB96C8E",
  "this.overlay_975F422C_BFED_5F81_41E4_BC8517ABFBCC",
  "this.overlay_93EA314C_BFEF_FD81_41D2_5BACDDCF89CC",
  "this.overlay_9549C9E3_BFEE_EC87_41DD_F85662F1046D"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_3B783A50_357E_A50E_4194_078399C2B7CC.mp3",
  "oggUrl": "media/audio_3B783A50_357E_A50E_4194_078399C2B7CC.ogg"
 },
 "class": "MediaAudio",
 "data": {
  "label": "eng(warna warni)"
 },
 "id": "audio_3B783A50_357E_A50E_4194_078399C2B7CC",
 "autoplay": true
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_346819CF_3B2E_7F11_41C8_F59BDAB9CFF9"
},
{
 "thumbnailUrl": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Bawah Jembatan",
 "id": "panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58",
   "backwardYaw": -86.86,
   "yaw": 90.02,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_B576E62A_A334_BEE3_41CE_CD0F139A89BE",
  "this.overlay_B5BBA434_A335_92E7_41E3_72D305F85848",
  "this.overlay_A2EA326E_B0E2_E131_4197_3354EA8DE488"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 19.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3455A9F1_3B2E_7EF1_41B9_7FD808BA54DD"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_340BE9B6_3B2E_7F73_41CC_BED850196CB9"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_35D52982_3B2E_7F13_41B9_4A8438CCDC6A"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A194C8B0_B0E7_E112_41D6_DB18677D27EB",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Gerbang Utama",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A190D8AF_B0E7_E10E_41E3_47EDFE8904FC"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_camera"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A1A0D665_B0E3_A133_41E2_5C2E08CC5B14",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Jembatan Kaca",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A1A4E664_B0E3_A131_41E1_B8C662E39DDF"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -71.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2B0EC908_3B2E_7F1F_41C0_701AF6F8AC80"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 141.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_341489BE_3B2E_7F73_41B3_F3E250AA4BB3"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_camera"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A14FA2F7_B0E7_A11F_41B2_D835DDC673C9",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Jembatan Brantas",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A14B92F6_B0E7_A111_41DD_B7F3D92497C2"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_9743F1FD_BFED_5C83_41E5_CF714C7CD1AE",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Kampung Tridi",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_974EB200_BFED_5F81_41E5_1E5E0F418540"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Gang",
 "id": "panorama_B09B52FF_A068_F681_41E3_F52BF45231C9",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A",
   "backwardYaw": -38.88,
   "yaw": -5.32,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB",
   "backwardYaw": 161.33,
   "yaw": 99.97,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74",
   "backwardYaw": 6.9,
   "yaw": -77.94,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BFDA146A_A190_39FB_41DC_183C3AF0ED1E",
  "this.overlay_81D05406_A190_F92A_41A9_E242C551BB9A",
  "this.overlay_BFD9D5AD_A190_3B79_41D1_E2AE5423E596",
  "this.overlay_A166F8D4_B0E7_E112_41C2_B5B08E09C428"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_35EE294D_3B2E_7F11_41B9_881F8499D9A9"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -18.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_341F19C7_3B2E_7F11_41C6_0D15780B0F4D"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -21.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3475C9D8_3B2E_7F3F_41CD_05F96BED71C8"
},
{
 "thumbnailUrl": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Tangga Warna",
 "id": "panorama_B0D61189_A068_9280_41D8_C2D5F420FA51",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15",
   "backwardYaw": -25.57,
   "yaw": 40.53,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F",
   "backwardYaw": -6.97,
   "yaw": -168.76,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BC418A1E_A1B0_295B_41E3_62D37E08A29D",
  "this.overlay_BFFABBA4_A31C_B5E7_41B2_033564E844D4",
  "this.overlay_A1A1EA91_B0E1_A113_41A2_2CDE27477DA8"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -6.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_34B43A0B_3B2E_7D11_41CB_D1EB2765F0EC"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -57.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_34ECDA35_3B2E_7D71_41C7_485C28AD084D"
},
{
 "thumbnailUrl": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Jembatan",
 "id": "panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630",
   "backwardYaw": -170.7,
   "yaw": -95.03,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8",
   "backwardYaw": -159.27,
   "yaw": -160.94,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BC440BAC_A1B0_2F7F_41D7_D951518B5152",
  "this.overlay_BAC372A5_A32C_77E6_41D0_7666CB88AA67",
  "this.overlay_A18DE689_B0E3_A1F2_41E5_39E5534C8DB2"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_A16115AB_B0E2_A336_41E3_CC0135D397B9",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Gerbang Utama",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A16505AA_B0E2_A336_41D2_D20C19C190C4"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Gang Step",
 "id": "panorama_B16C2283_A06B_7681_41E1_5CD30D022130",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74",
   "backwardYaw": -147.17,
   "yaw": 122.14,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14",
   "backwardYaw": 4.22,
   "yaw": -14.04,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_80951774_A1B1_E7EF_41E1_C5843D89804D",
  "this.overlay_BE6E2FE5_A1B0_26E9_41E2_CB644616C7A3",
  "this.overlay_A126F03C_B0E6_A111_41E4_B232EAA7FB7B"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "media": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A",
   "camera": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "media": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB",
   "camera": "this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 3)",
   "media": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9",
   "camera": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 3, 4)",
   "media": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47",
   "camera": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 4, 5)",
   "media": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74",
   "camera": "this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 5, 6)",
   "media": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130",
   "camera": "this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 6, 7)",
   "media": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14",
   "camera": "this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 7, 8)",
   "media": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5",
   "camera": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 8, 9)",
   "media": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE",
   "camera": "this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 9, 10)",
   "media": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58",
   "camera": "this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 10, 11)",
   "media": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F",
   "camera": "this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 11, 12)",
   "media": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C",
   "camera": "this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 12, 13)",
   "media": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630",
   "camera": "this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 13, 14)",
   "media": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6",
   "camera": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 14, 15)",
   "media": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8",
   "camera": "this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 15, 16)",
   "media": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B",
   "camera": "this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 16, 17)",
   "media": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15",
   "camera": "this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 17, 18)",
   "media": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51",
   "camera": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 18, 19)",
   "media": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C",
   "camera": "this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 19, 0)",
   "media": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0",
   "camera": "this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_camera"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Sudut Love",
 "id": "panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51",
   "backwardYaw": 40.53,
   "yaw": -25.57,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6",
   "backwardYaw": -163.51,
   "yaw": -178.71,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9558E4F9_BFFD_2483_41C3_85FAB9B84AC6",
  "this.overlay_93FECBD2_BFE3_2C81_41B3_4FF893302307",
  "this.overlay_94958A70_BFE3_2F81_41D0_1D365A00DD6C"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3400A9AD_3B2E_7F11_41C8_52B24DC04987"
},
{
 "thumbnailUrl": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Gerbang",
 "id": "panorama_AE333ED7_A069_6E80_41DC_11F22479292A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B16668F7_A068_9280_41E3_8F425083DD47",
   "backwardYaw": 108.69,
   "yaw": -91.39,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9",
   "backwardYaw": -5.32,
   "yaw": -38.88,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BC3033C6_A193_DF2B_41E3_32ACD815C5D3",
  "this.overlay_B21B7634_A334_9EE6_41CE_1A4347C643C4",
  "this.overlay_A29940A9_B0E7_6133_41D0_FC573F242DFF"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_A2BD3085_B0E7_61F3_41E6_02A2CB7ADDFF",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Gerbang Utama",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A2BA5084_B0E7_61F1_417A_E7944615C192"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_342CB99C_3B2E_7F37_41B6_69CA0D0A9968"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -157.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3480EA13_3B2E_7D31_41B1_5DF494EAD0DC"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 102.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_34E01A2C_3B2E_7D17_41B2_CFAAC9512F24"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_345E69FA_3B2E_7EF3_41C5_8A8A81E40AB0"
},
{
 "thumbnailUrl": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Central",
 "id": "panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5",
   "backwardYaw": 158.24,
   "yaw": -163.77,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51",
   "backwardYaw": -168.76,
   "yaw": -6.97,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_BC461F4B_A1B0_6739_41D0_647CED20139B",
  "this.overlay_A18DD47B_B0E3_E117_41B6_B96E693922AA",
  "this.overlay_FF3BF035_EDE5_EC57_41E4_CD5B7E3D7477"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 154.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_35CC897A_3B2E_7FF3_418D_42262E7D78C4"
},
{
 "shadowBlurRadius": 6,
 "id": "window_A119024A_B0E2_E171_41D8_2ECEA0F5F27D",
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "class": "Window",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "closeButtonPressedIconColor": "#FFFFFF",
 "width": 400,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0,
 "modal": true,
 "paddingLeft": 0,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Lapngan Motif",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 0,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 350,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "paddingRight": 0,
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A11D7248_B0E2_E171_41E1_981BD295D590"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "footerBackgroundOpacity": 1,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_t.jpg",
 "hfovMin": "135%",
 "partial": false,
 "label": "Jembatan",
 "id": "panorama_B16668F7_A068_9280_41E3_8F425083DD47",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A",
   "backwardYaw": -91.39,
   "yaw": 108.69,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_81B637A7_A190_2769_41D1_F2BEB5A6963F",
  "this.overlay_A159A31D_B0E7_A713_41E4_760D01DCCCAB"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "minHeight": 50,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 100,
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": "10px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "layout": "absolute",
 "children": [
  "this.Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918"
 ],
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "width": 271,
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": 20,
 "minWidth": 1,
 "borderSize": 0,
 "height": 97,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "--STICKER"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "layout": "absolute",
 "data": {
  "name": "--BUTTON SET"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "backgroundColor": [
  "#3E5CB8"
 ],
 "top": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "height": 60
},
{
 "layout": "vertical",
 "data": {
  "name": "-button set"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "paddingRight": 0,
 "class": "Container",
 "right": 15,
 "width": 60,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0.02
 ],
 "borderSize": 0,
 "backgroundColor": [
  "#3E5CB8"
 ],
 "top": 62,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "height": 300
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18",
  "this.IconButton_B74E92BD_A090_3959_41E2_B32C2E223160",
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 30,
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "height": 90,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "layout": "absolute",
 "data": {
  "name": "---INFO photo"
 },
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "data": {
  "name": "---PANORAMA LIST"
 },
 "id": "Container_3A8CA106_2B65_2006_41BE_9DEBD2BEE4CE",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_3A8C6106_2B65_2006_41BC_E25C4814595D"
 ],
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_3A8CA106_2B65_2006_41BE_9DEBD2BEE4CE, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "data": {
  "name": "---LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "data": {
  "name": "---FLOORPLAN"
 },
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "data": {
  "name": "---PHOTOALBUM"
 },
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "data": {
  "name": "---REALTOR"
 },
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "UIComponent",
 "right": 0,
 "backgroundOpacity": 0.55,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "bottom": 0,
 "minWidth": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "UIComponent2038"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "ZoomImage",
 "right": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "bottom": 0,
 "minWidth": 0,
 "borderSize": 0,
 "backgroundColor": [],
 "top": 0,
 "backgroundColorRatios": [],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "ZoomImage2039"
 },
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton2040"
 },
 "id": "closeButtonPopupPanorama",
 "fontStyle": "normal",
 "paddingLeft": 5,
 "pressedIconColor": "#888888",
 "paddingRight": 5,
 "class": "CloseButton",
 "right": 10,
 "iconWidth": 20,
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "iconHeight": 20,
 "verticalAlign": "middle",
 "paddingBottom": 5,
 "minHeight": 0,
 "fontWeight": "normal",
 "iconColor": "#000000",
 "borderRadius": 0,
 "propagateClick": false,
 "rollOverIconColor": "#666666",
 "minWidth": 0,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "top": 10,
 "label": "",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "fontSize": "1.29vmin",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "visible": false,
 "layout": "horizontal",
 "textDecoration": "none",
 "cursor": "hand",
 "iconLineWidth": 5
},
{
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Mute"
 },
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "fontStyle": "normal",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "toggle",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverBackgroundOpacity": 1,
 "minWidth": 1,
 "fontSize": 12,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "cursor": "hand",
 "height": 60
},
{
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "fontStyle": "normal",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "toggle",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverBackgroundOpacity": 1,
 "minWidth": 1,
 "fontSize": 12,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "cursor": "hand",
 "height": 60
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6, this.camera_3480EA13_3B2E_7D31_41B1_5DF494EAD0DC); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA984C9_A31F_93A1_41C3_C21F41E356DC",
   "pitch": -14.05,
   "yaw": -63.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.24,
   "distance": 50
  }
 ],
 "id": "overlay_BC92A5D1_A1B0_3B29_41DD_AC323A696C30",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -63.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.05,
   "hfov": 22.24
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A1BD4488_B0E1_61F1_41E4_3FA701D7F6CE, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C16ABFE2_D812_59BC_41C0_734731A049BB",
   "pitch": 9.25,
   "yaw": 3.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.41,
   "distance": 100
  }
 ],
 "id": "overlay_A18EE4AD_B0E1_6133_41DA_7FC8CD7EC1E5",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 3.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.25,
   "hfov": 13.41
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A148E676_B0E7_A111_41DC_94DE0A4E02FC",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9, this.camera_344879E9_3B2E_7F11_41B6_0FCD9C56933C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFAB14C2_A31F_93A3_41DB_BB852F265863",
   "pitch": 3.04,
   "yaw": 161.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.41,
   "distance": 50
  }
 ],
 "id": "overlay_BCB17C7C_A190_29DE_41D7_CDEBBBEB027E",
 "data": {
  "label": "Circle Arrow 04 Right-Up"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 161.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.04,
   "hfov": 17.41
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A1431678_B0E7_A111_41E0_20C67D1FBBD1, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1191FC7_D812_5983_41E2_D065AC666E75",
   "pitch": 9.25,
   "yaw": 3.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.41,
   "distance": 100
  }
 ],
 "id": "overlay_A15046A1_B0E7_A132_41C4_04F05426CC9A",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 3.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.25,
   "hfov": 13.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8, this.camera_34B43A0B_3B2E_7D11_41CB_D1EB2765F0EC); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA884C5_A31F_93A1_41E0_F01823DCCBA9",
   "pitch": 7.16,
   "yaw": -9.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.22,
   "distance": 50
  }
 ],
 "id": "overlay_B6CB9235_A334_B6E6_41D0_35182D08009E",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -9.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.16,
   "hfov": 10.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F, this.camera_34AAFA02_3B2E_7D13_41C7_2F51ECE7B89F); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA964C5_A31F_93A1_41D3_B809E470C5A4",
   "pitch": -0.53,
   "yaw": 158.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.96,
   "distance": 50
  }
 ],
 "id": "overlay_B53BB8E2_A335_9363_41DE_821442D8CF73",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 158.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.53,
   "hfov": 14.96
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A119C166_B0E1_E331_41E0_036F0924AB14, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1136FD3_D812_5983_41E2_5B74CD2E48DF",
   "pitch": -0.7,
   "yaw": 64.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.59,
   "distance": 100
  }
 ],
 "id": "overlay_A2EAA18B_B0E1_E3F7_41E3_7D30B9498A64",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 64.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.7,
   "hfov": 13.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C, this.camera_3455A9F1_3B2E_7EF1_41B9_7FD808BA54DD); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA9C4C8_A31F_93AF_41C7_B52CFD321B58",
   "pitch": 13.04,
   "yaw": -159.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 34.27,
   "distance": 50
  }
 ],
 "id": "overlay_BE0BF8B8_A1B0_2967_41DF_56FA13550485",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -159.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.04,
   "hfov": 34.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5, this.camera_345E69FA_3B2E_7EF3_41C5_8A8A81E40AB0); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA9A4C9_A31F_93A1_41E0_1477630537CA",
   "pitch": -39.45,
   "yaw": 173.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.97,
   "distance": 50
  }
 ],
 "id": "overlay_BC519B6B_A1B0_2FFA_41D5_02BEAAD87496",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 173.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.45,
   "hfov": 18.97
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A16115AB_B0E2_A336_41E3_CC0135D397B9, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C115EFE1_D812_59BC_41D4_60D25BA97ABD",
   "pitch": -37.08,
   "yaw": -12.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.84,
   "distance": 100
  }
 ],
 "id": "overlay_A176B5E1_B0E2_A333_41A6_75BF37F16F4B",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -12.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.08,
   "hfov": 10.84
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A148FBCD_B0E1_6773_41CC_F8C85D9DC475",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C, this.camera_35DB598B_3B2E_7F11_41C6_8873F5BD680F); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA894C7_A31F_93A1_41B6_F75CE7101FBF",
   "pitch": -14.05,
   "yaw": -170.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 31.79,
   "distance": 100
  }
 ],
 "id": "overlay_BFAF3766_A1B0_27EB_41DB_DB9BEBCB4A2B",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -170.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.05,
   "hfov": 31.79
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_93BB1106_BFEF_FD81_4167_5F379208A9C9",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C, this.camera_34F88A3D_3B2E_7D71_41BC_0F78D0709234); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1685FE9_D812_598C_41E0_33490C6D7DB4",
   "pitch": -5.89,
   "yaw": -10.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.43,
   "distance": 100
  }
 ],
 "id": "overlay_95083C0A_BFFD_2B81_41DD_619E6C16D7E9",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -10.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.89,
   "hfov": 18.43
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_95286E27_BFFF_678F_41E4_078BCC6F385D, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C169FFEA_D812_598C_41BC_D3F17513CC5F",
   "pitch": 11.99,
   "yaw": -9.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.29,
   "distance": 100
  }
 ],
 "id": "overlay_9538BE4E_BFFF_6781_41DF_6631CF879DF1",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -9.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.99,
   "hfov": 13.29
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_95262E29_BFFF_6783_41D0_8D2EE96BF560",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A1A17486_B0E1_61F1_41D3_76238C6014BD",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A1549233_B0E6_E117_41E4_E3DF0B94076A",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_956921A4_BFFD_5C81_41D6_93CABC943042",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A15B6014_B0E6_A111_41BB_10532E221BB6",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_95365986_BFEE_EC81_41D4_9207D5D6EAAA",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130, this.camera_3400A9AD_3B2E_7F11_41C8_52B24DC04987); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA8F4C4_A31F_93A7_41E1_5F543DA2F961",
   "pitch": -8.29,
   "yaw": 4.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.5,
   "distance": 100
  }
 ],
 "id": "overlay_BC4513E2_A1B3_FEEB_41E1_B137376B91D4",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 4.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.29,
   "hfov": 23.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6, this.camera_340BE9B6_3B2E_7F73_41CC_BED850196CB9); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA8A4C4_A31F_93A7_41D2_8DC044A28CA6",
   "pitch": -13.23,
   "yaw": -176.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.22,
   "distance": 100
  }
 ],
 "id": "overlay_80DBB702_A1B0_272B_41E1_50A3E773D997",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -176.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.23,
   "hfov": 25.22
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A1454BCE_B0E1_6771_41E2_EE71180649FA, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1121FD1_D812_599F_41CC_04ED1C419957",
   "pitch": 28.12,
   "yaw": -12.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.99,
   "distance": 100
  }
 ],
 "id": "overlay_A1503BF3_B0E1_6716_41D2_BE2389F3D661",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -12.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 28.12,
   "hfov": 11.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0, this.camera_2B049900_3B2E_7F0F_41B4_BA4E754EEDD6); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C16B7FE3_D812_59BC_41B2_815827DBB8B2",
   "pitch": -1.08,
   "yaw": -132.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.53,
   "distance": 100
  }
 ],
 "id": "overlay_950515E6_BFE5_6481_41CB_BD65930C7856",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -132.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.08,
   "hfov": 18.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1688FE3_D812_59BC_41CE_61494A24024C",
   "pitch": -13.92,
   "yaw": -52.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.72,
   "distance": 50
  }
 ],
 "id": "overlay_95A5DD2A_BFE3_2581_41DF_06D2E50315D2",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -52.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.92,
   "hfov": 17.72
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_956F41A0_BFFD_5C82_41C9_E0C8AE334DEE, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1682FE9_D812_598C_41C2_3FC8BA3FEF8C",
   "pitch": 13.02,
   "yaw": -144.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.24,
   "distance": 100
  }
 ],
 "id": "overlay_957E31EF_BFFD_5C9F_41CB_8342953CEE50",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -144.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.02,
   "hfov": 13.24
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A1DCDA6A_B0E1_A131_41C5_B884D7D196E5",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A1A23456_B0E3_E111_41E3_03742FCE9968",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings HS"
 },
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "fontStyle": "normal",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "toggle",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "minWidth": 1,
 "fontSize": 12,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "cursor": "hand",
 "height": 60
},
{
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Gyro"
 },
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "fontStyle": "normal",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "toggle",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "minWidth": 1,
 "fontSize": 12,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "cursor": "hand",
 "height": 60
},
{
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button settings VR"
 },
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "fontStyle": "normal",
 "paddingRight": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 1,
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "minWidth": 1,
 "fontSize": 12,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "layout": "horizontal",
 "textDecoration": "none",
 "cursor": "hand",
 "height": 60
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_93DC5B7B_BFE3_2D87_41D6_EBC6179066F5",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14, this.camera_3437D9A5_3B2E_7F11_41C1_4F5990B27949); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFBAFED4_EDE4_D5D5_41DE_435C5A375DFE",
   "pitch": -1.08,
   "yaw": 4.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.77,
   "distance": 100
  }
 ],
 "id": "overlay_80DF94C1_A1B0_7929_41E0_7F47DE5AD5BE",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 4.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.08,
   "hfov": 18.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15, this.camera_342CB99C_3B2E_7F37_41B6_69CA0D0A9968); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B381071D_A17A_C54F_41D7_C964CE602F42",
   "pitch": -28.88,
   "yaw": -163.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.37,
   "distance": 100
  }
 ],
 "id": "overlay_BFA2E575_A1B3_DBE9_4141_4713902FBEAC",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -163.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.88,
   "hfov": 24.37
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_957CD88B_BFE5_2C87_41DE_F71DCB5E427B, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFBACED4_EDE4_D5D5_41C2_16734F163A20",
   "pitch": 7.88,
   "yaw": 22.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.2,
   "distance": 100
  }
 ],
 "id": "overlay_94AF58B6_BFE5_2C81_4194_454D0724A1B2",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 22.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.88,
   "hfov": 10.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B, this.camera_34232994_3B2E_7F37_41CC_EB27C24412E2); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFB90ED5_EDE4_D5D7_41E6_1671D6CDAB6B",
   "pitch": -4.38,
   "yaw": 22.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.27,
   "distance": 50
  }
 ],
 "id": "overlay_FC8EFF52_EDE5_D42D_41D7_89E3B1AA41C7",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 22.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.38,
   "hfov": 10.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9, this.camera_34E01A2C_3B2E_7D17_41B2_CFAAC9512F24); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA864C3_A31F_93A1_41D7_89136448A62A",
   "pitch": -0.26,
   "yaw": 6.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.96,
   "distance": 100
  }
 ],
 "id": "overlay_8552B225_A190_3969_41CF_3D5A5FEA38D6",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 6.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.26,
   "hfov": 28.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B16C2283_A06B_7681_41E1_5CD30D022130, this.camera_34ECDA35_3B2E_7D71_41C7_485C28AD084D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA844C3_A31F_93A1_41D3_1BC2FF361251",
   "pitch": -8.1,
   "yaw": -147.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.98,
   "distance": 50
  }
 ],
 "id": "overlay_B0D325EA_A33D_FD62_41E1_618BB47FAD73",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -147.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.1,
   "hfov": 19.98
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A1288234_B0E6_E111_41BF_C3B92461DBC2, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C11C1FCF_D812_5983_41E5_FFD6451609D2",
   "pitch": -4.82,
   "yaw": -44.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.54,
   "distance": 100
  }
 ],
 "id": "overlay_A13F1260_B0E6_E132_41DD_2BA052CE2F79",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -44.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.82,
   "hfov": 13.54
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A11DD165_B0E1_E333_41C8_17E2203CACE8",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_9571888D_BFE5_2C83_41E2_D39C33CD7ED3",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE, this.camera_35C76971_3B2E_7FF1_41B7_6D2568782C6B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFAB94C6_A31F_93A3_41C4_5BD7585DA537",
   "pitch": 0.09,
   "yaw": -86.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.53,
   "distance": 100
  }
 ],
 "id": "overlay_BBC8B857_A32C_92A2_41E2_C32C2EB96C8E",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -86.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.09,
   "hfov": 18.53
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_9743F1FD_BFED_5C83_41E5_CF714C7CD1AE, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1112FD5_D812_5987_41D1_E99F60B376BB",
   "pitch": 11.31,
   "yaw": -131.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.33,
   "distance": 100
  }
 ],
 "id": "overlay_975F422C_BFED_5F81_41E4_BC8517ABFBCC",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -131.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.31,
   "hfov": 13.33
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_93BD0101_BFEF_FD83_41D2_47B21DC63648, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C116AFD6_D812_5985_41E3_A99985B311D3",
   "pitch": 28.12,
   "yaw": 3.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.99,
   "distance": 100
  }
 ],
 "id": "overlay_93EA314C_BFEF_FD81_41D2_5BACDDCF89CC",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 3.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 28.12,
   "hfov": 11.99
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_9537C97F_BFEE_EC7F_41CF_B7238DBB62EB, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1163FDC_D812_5985_41E0_768B547A9BDC",
   "pitch": 26.41,
   "yaw": 108.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.17,
   "distance": 100
  }
 ],
 "id": "overlay_9549C9E3_BFEE_EC87_41DD_F85662F1046D",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 108.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 26.41,
   "hfov": 12.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58, this.camera_35C19967_3B2E_7F11_41BF_59A6E42AAE6A); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA944C5_A31F_93A1_41E1_44DA58198922",
   "pitch": -8.97,
   "yaw": 90.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.31,
   "distance": 100
  }
 ],
 "id": "overlay_B576E62A_A334_BEE3_41CE_CD0F139A89BE",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 90.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.97,
   "hfov": 18.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA934C5_A31F_93A1_41D9_4197BF4C2CCF",
   "pitch": 9.08,
   "yaw": -63.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.17,
   "distance": 50
  }
 ],
 "id": "overlay_B5BBA434_A335_92E7_41E3_72D305F85848",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -63.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.08,
   "hfov": 10.17
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A119024A_B0E2_E171_41D8_2ECEA0F5F27D, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1107FD4_D812_5985_41D1_C55875C6D68E",
   "pitch": -29.19,
   "yaw": 3.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.86,
   "distance": 100
  }
 ],
 "id": "overlay_A2EA326E_B0E2_E131_4197_3354EA8DE488",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 3.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.19,
   "hfov": 11.86
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A190D8AF_B0E7_E10E_41E3_47EDFE8904FC",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Terima Pesanan/Ready only:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">rentan harga (nego):</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A1A4E664_B0E3_A131_41E1_B8C662E39DDF",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A14B92F6_B0E7_A111_41DD_B7F3D92497C2",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_974EB200_BFED_5F81_41E5_1E5E0F418540",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A, this.camera_341489BE_3B2E_7F73_41B3_F3E250AA4BB3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B384F718_A17A_C555_41E2_C2278805CC8A",
   "pitch": -15.77,
   "yaw": -5.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.4,
   "distance": 100
  }
 ],
 "id": "overlay_BFDA146A_A190_39FB_41DC_183C3AF0ED1E",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.77,
   "hfov": 28.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74, this.camera_346819CF_3B2E_7F11_41C8_F59BDAB9CFF9); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B384C719_A17A_C557_41B0_FB733FE5F7D0",
   "pitch": -33.75,
   "yaw": -77.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.97,
   "distance": 50
  }
 ],
 "id": "overlay_81D05406_A190_F92A_41A9_E242C551BB9A",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -77.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.75,
   "hfov": 19.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB, this.camera_341F19C7_3B2E_7F11_41C6_0D15780B0F4D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3857719_A17A_C557_41C5_93DA1675F49F",
   "pitch": -15.49,
   "yaw": 99.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.74,
   "distance": 50
  }
 ],
 "id": "overlay_BFD9D5AD_A190_3B79_41D1_E2AE5423E596",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 99.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.49,
   "hfov": 15.74
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A194C8B0_B0E7_E112_41D6_DB18677D27EB, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C11E5FCD_D812_5987_41E5_7F6D4089F74A",
   "pitch": 2.73,
   "yaw": -165.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.57,
   "distance": 100
  }
 ],
 "id": "overlay_A166F8D4_B0E7_E112_41C2_B5B08E09C428",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -165.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.73,
   "hfov": 13.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15, this.camera_35CC897A_3B2E_7FF3_418D_42262E7D78C4); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFAE64C9_A31F_93A1_41BE_18EA9B39C6DD",
   "pitch": 8.25,
   "yaw": 40.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.24,
   "distance": 50
  }
 ],
 "id": "overlay_BC418A1E_A1B0_295B_41E3_62D37E08A29D",
 "data": {
  "label": "Circle Arrow 04 Right-Up"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 40.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.25,
   "hfov": 20.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F, this.camera_35D52982_3B2E_7F13_41B9_4A8438CCDC6A); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C16A7FE2_D812_59BC_41E1_505AB8D56852",
   "pitch": -29.22,
   "yaw": -168.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.17,
   "distance": 100
  }
 ],
 "id": "overlay_BFFABBA4_A31C_B5E7_41B2_033564E844D4",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -168.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.22,
   "hfov": 16.17
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A1D9EA6B_B0E1_A137_41C2_EF633EC274C0, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C16B9FE3_D812_59BC_41DF_CE2E64A89B56",
   "pitch": -5.16,
   "yaw": -50.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.53,
   "distance": 100
  }
 ],
 "id": "overlay_A1A1EA91_B0E1_A113_41A2_2CDE27477DA8",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -50.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.16,
   "hfov": 13.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8, this.camera_3496FA24_3B2E_7D17_41C2_6ECF3C12E7AF); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA8C4C7_A31F_93A1_41D1_5CFC753C3593",
   "pitch": -47,
   "yaw": -160.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.91,
   "distance": 100
  }
 ],
 "id": "overlay_BC440BAC_A1B0_2F7F_41D7_D951518B5152",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -160.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -47,
   "hfov": 22.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630, this.camera_348A4A1C_3B2E_7D37_41AD_C1ECAEA7A061); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA8B4C7_A31F_93A1_41DC_04C0B6D1C4A4",
   "pitch": 22.39,
   "yaw": -95.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.83,
   "distance": 50
  }
 ],
 "id": "overlay_BAC372A5_A32C_77E6_41D0_7666CB88AA67",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -95.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 22.39,
   "hfov": 13.83
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A1A0D665_B0E3_A133_41E2_5C2E08CC5B14, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1164FDF_D812_5983_41E0_E452773E0AFF",
   "pitch": 5.13,
   "yaw": -159.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.54,
   "distance": 100
  }
 ],
 "id": "overlay_A18DE689_B0E3_A1F2_41E5_39E5534C8DB2",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -159.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.13,
   "hfov": 13.54
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A16505AA_B0E2_A336_41D2_D20C19C190C4",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14, this.camera_35FAE95E_3B2E_7F33_41C8_330249A45931); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA834C4_A31F_93A7_41CA_0CF0320B602E",
   "pitch": -11.24,
   "yaw": -14.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.37,
   "distance": 100
  }
 ],
 "id": "overlay_80951774_A1B1_E7EF_41E1_C5843D89804D",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -14.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.24,
   "hfov": 24.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B05C02_A068_B180_41D0_233B6AC37F74, this.camera_35F41956_3B2E_7F33_41A0_CEF43BB01C03); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA814C4_A31F_93A7_41BA_963137E74ECE",
   "pitch": -4.86,
   "yaw": 122.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.93,
   "distance": 50
  }
 ],
 "id": "overlay_BE6E2FE5_A1B0_26E9_41E2_CB644616C7A3",
 "data": {
  "label": "Circle Arrow 04 Right-Up"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 122.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.86,
   "hfov": 20.93
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A15E9015_B0E6_A113_41E5_64D45B642373, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C11D6FD0_D812_599D_41EA_67B373C9DD11",
   "pitch": 4.44,
   "yaw": 35.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.55,
   "distance": 100
  }
 ],
 "id": "overlay_A126F03C_B0E6_A111_41E4_B232EAA7FB7B",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 35.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.44,
   "hfov": 13.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51, this.camera_2B62891B_3B2E_7F31_41CB_975B2C1851AA); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1696FEA_D812_598C_41E1_F4CF479DEC4A",
   "pitch": 0.57,
   "yaw": -25.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.3,
   "distance": 50
  }
 ],
 "id": "overlay_9558E4F9_BFFD_2483_41C3_85FAB9B84AC6",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -25.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.57,
   "hfov": 10.3
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_93DA2B7A_BFE3_2D81_41D5_7784E422346D, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C16E9FEA_D812_598C_41D6_C40262F2F8FE",
   "pitch": -3.11,
   "yaw": 13.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.57,
   "distance": 100
  }
 ],
 "id": "overlay_93FECBD2_BFE3_2C81_41B3_4FF893302307",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 13.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.11,
   "hfov": 13.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0A43264_A068_9187_41C3_90F2834CF3E6, this.camera_35EA1944_3B2E_7F17_41C9_E3325A652FE5); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C16E6FEB_D812_598C_41E3_DC8A6F095424",
   "pitch": -20.3,
   "yaw": -178.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.38,
   "distance": 100
  }
 ],
 "id": "overlay_94958A70_BFE3_2F81_41D0_1D365A00DD6C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -178.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.3,
   "hfov": 17.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B16668F7_A068_9280_41E3_8F425083DD47, this.camera_2B0EC908_3B2E_7F1F_41C0_701AF6F8AC80); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_81218960_A191_EBE7_41DD_D5BE3C13DA63",
   "pitch": -22.5,
   "yaw": -91.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.12,
   "distance": 100
  }
 ],
 "id": "overlay_BC3033C6_A193_DF2B_41E3_32ACD815C5D3",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -91.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.5,
   "hfov": 17.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B09B52FF_A068_F681_41E3_F52BF45231C9, this.camera_2B19E911_3B2E_7F31_41B0_14593FB2B4C2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFAB54C2_A31F_93A3_41E1_0F2EFE40FE1A",
   "pitch": -27.3,
   "yaw": -38.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.47,
   "distance": 100
  }
 ],
 "id": "overlay_B21B7634_A334_9EE6_41CE_1A4347C643C4",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -38.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.3,
   "hfov": 16.47
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A2BD3085_B0E7_61F3_41E6_02A2CB7ADDFF, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1186FC6_D812_5985_41B0_8D883A4C6A58",
   "pitch": -7.22,
   "yaw": 13.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.48,
   "distance": 100
  }
 ],
 "id": "overlay_A29940A9_B0E7_6133_41D0_FC573F242DFF",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 13.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.22,
   "hfov": 13.48
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A2BA5084_B0E7_61F1_417A_E7944615C192",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0D61189_A068_9280_41D8_C2D5F420FA51, this.camera_347FC9E0_3B2E_7F0F_41C5_501CD9AC9C85); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BFA8E4C6_A31F_93A3_41A9_1CE123685084",
   "pitch": 4.62,
   "yaw": -6.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.85,
   "distance": 100
  }
 ],
 "id": "overlay_BC461F4B_A1B0_6739_41D0_647CED20139B",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -6.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.62,
   "hfov": 22.85
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A1BE0457_B0E3_E11F_41D5_459FBEF7EBBB, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C117FFDD_D812_5987_41C9_B51BEBD7A05D",
   "pitch": -7.91,
   "yaw": 78.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.46,
   "distance": 100
  }
 ],
 "id": "overlay_A18DD47B_B0E3_E117_41B6_B96E693922AA",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 78.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.91,
   "hfov": 13.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5, this.camera_3475C9D8_3B2E_7F3F_41CD_05F96BED71C8); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFBA0ED3_EDE4_D5D3_41C8_6981689D6FC8",
   "pitch": -14.26,
   "yaw": -163.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.22,
   "distance": 100
  }
 ],
 "id": "overlay_FF3BF035_EDE5_EC57_41E4_CD5B7E3D7477",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -163.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.26,
   "hfov": 22.22
  }
 ]
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_A11D7248_B0E2_E171_41E1_981BD295D590",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fungsi: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Fasilitas: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rencana Pengembangan:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AE333ED7_A069_6E80_41DC_11F22479292A, this.camera_35EE294D_3B2E_7F11_41B9_881F8499D9A9); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C11FDFCE_D812_5985_41E7_AB413644F2E3",
   "pitch": -27.92,
   "yaw": 108.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.95,
   "distance": 100
  }
 ],
 "id": "overlay_81B637A7_A190_2769_41D1_F2BEB5A6963F",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 108.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.92,
   "hfov": 21.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A14FA2F7_B0E7_A11F_41B2_D835DDC673C9, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C11F6FCE_D812_5985_41D2_987641178048",
   "pitch": -13.06,
   "yaw": -86.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.24,
   "distance": 100
  }
 ],
 "id": "overlay_A159A31D_B0E7_A713_41E4_760D01DCCCAB",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -86.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.06,
   "hfov": 13.24
  }
 ]
},
{
 "maxHeight": 9000,
 "fontWeight": "bold",
 "textShadowColor": "#000000",
 "id": "Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
 "left": 0,
 "paddingLeft": 0,
 "data": {
  "name": "text 1"
 },
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "class": "Label",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "text": "Dewi VTour",
 "borderRadius": 0,
 "textShadowBlurRadius": 10,
 "propagateClick": false,
 "top": 9,
 "borderSize": 0,
 "minWidth": 1,
 "textShadowHorizontalLength": 0,
 "height": "69.072%",
 "fontSize": "5vh",
 "horizontalAlign": "left",
 "textShadowVerticalLength": 0,
 "textShadowOpacity": 1,
 "width": "100%",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none",
 "maxWidth": 9000
},
{
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "textShadowColor": "#000000",
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 3,
 "width": 236,
 "data": {
  "name": "text 2"
 },
 "paddingRight": 0,
 "class": "Label",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "text": "Desa Wisata Virtual Tour",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "textShadowBlurRadius": 10,
 "propagateClick": false,
 "bottom": 5,
 "minWidth": 1,
 "borderSize": 0,
 "height": 32,
 "textShadowHorizontalLength": 0,
 "fontSize": 18,
 "horizontalAlign": "left",
 "textShadowVerticalLength": 0,
 "textShadowOpacity": 1,
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "width": 450,
 "data": {
  "name": "Label Company Name"
 },
 "paddingRight": 0,
 "class": "Label",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "text": "Kampung Warna Warni",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "height": 60,
 "top": "0%",
 "fontSize": 31,
 "horizontalAlign": "left",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "maxHeight": 30,
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 30,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderRadius": 0,
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "propagateClick": false,
 "bottom": "0%",
 "top": "0%",
 "borderSize": 0,
 "width": "5%",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "logo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 40
},
{
 "layout": "horizontal",
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "width": 1199,
 "paddingRight": 15,
 "class": "Container",
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "height": 60,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "width": 44,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 44,
 "click": "this.showPopupImage(this.ImageResource_B9C35289_A555_9261_41B5_40F308C100CA, null, '90%', '90%', this.FadeInEffect_B9C36289_A555_9261_41C9_A613B2741A91, this.FadeOutEffect_B9C37289_A555_9261_41DC_A78A0CC8C489, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'paddingLeft':5,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0}, null, null, false)",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "width": 44,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 44,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "width": 44,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "width": 44,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://goo.gl/maps/qcSbzUSQD5yxbHQ97', '_blank')",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "width": 44,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18.png",
 "id": "IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18",
 "width": 44,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_B74E92BD_A090_3959_41E2_B32C2E223160.png",
 "id": "IconButton_B74E92BD_A090_3959_41E2_B32C2E223160",
 "width": 36.8,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_B74E92BD_A090_3959_41E2_B32C2E223160_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 39.2,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "width": 38.4,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 44.8,
 "click": "this.openLink('https://www.instagram.com/dewivtour/', '_blank')",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "width": 36,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 41.6,
 "click": "this.openLink('https://www.youtube.com/@user-gx1gq7me2z', '_blank')",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "class": "Container",
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "80%",
 "top": "10%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_3A8C6106_2B65_2006_41BC_E25C4814595D",
 "left": "15%",
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "absolute",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "children": [
  "this.Image_3A8C7106_2B65_2006_41C2_B9AF8AA95E93",
  "this.HTMLText_3A8C4106_2B65_2006_41A5_F34478BC4E22",
  "this.Image_3A8C5106_2B65_2006_41C5_7BC14C0D1F38"
 ],
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "class": "Container",
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "80%",
 "top": "10%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "absolute",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "vertical",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "class": "Container",
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "80%",
 "top": "10%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA984C9_A31F_93A1_41C3_C21F41E356DC",
 "levels": [
  {
   "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_1_HS_0_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C16ABFE2_D812_59BC_41C0_734731A049BB",
 "levels": [
  {
   "url": "media/panorama_B1499C81_A068_9280_41D4_C3C0A5E2813B_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFAB14C2_A31F_93A3_41DB_BB852F265863",
 "levels": [
  {
   "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_1_HS_0_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1191FC7_D812_5983_41E2_D065AC666E75",
 "levels": [
  {
   "url": "media/panorama_B0D5FBE7_A068_B681_41E1_3F196B70A5CB_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA884C5_A31F_93A1_41E0_F01823DCCBA9",
 "levels": [
  {
   "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_1_HS_0_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA964C5_A31F_93A1_41D3_B809E470C5A4",
 "levels": [
  {
   "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1136FD3_D812_5983_41E2_5B74CD2E48DF",
 "levels": [
  {
   "url": "media/panorama_B0C9D0A3_A06B_9280_41D3_C9749DC00FD5_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA9C4C8_A31F_93AF_41C7_B52CFD321B58",
 "levels": [
  {
   "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA9A4C9_A31F_93A1_41E0_1477630537CA",
 "levels": [
  {
   "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C115EFE1_D812_59BC_41D4_60D25BA97ABD",
 "levels": [
  {
   "url": "media/panorama_B0F1A6E8_A068_FE80_41DC_41BA1C4ADFF8_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA894C7_A31F_93A1_41B6_F75CE7101FBF",
 "levels": [
  {
   "url": "media/panorama_B16EFCE1_A068_9280_41BF_7FA551E0D630_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1685FE9_D812_598C_41E0_33490C6D7DB4",
 "levels": [
  {
   "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C169FFEA_D812_598C_41BC_D3F17513CC5F",
 "levels": [
  {
   "url": "media/panorama_973D39F2_BF1D_2C81_41A8_57AABA6326B0_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA8F4C4_A31F_93A7_41E1_5F543DA2F961",
 "levels": [
  {
   "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA8A4C4_A31F_93A7_41D2_8DC044A28CA6",
 "levels": [
  {
   "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1121FD1_D812_599F_41CC_04ED1C419957",
 "levels": [
  {
   "url": "media/panorama_B169CA5C_A06B_9180_41C3_C0CDCA10BE14_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C16B7FE3_D812_59BC_41B2_815827DBB8B2",
 "levels": [
  {
   "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1688FE3_D812_59BC_41CE_61494A24024C",
 "levels": [
  {
   "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1682FE9_D812_598C_41C2_3FC8BA3FEF8C",
 "levels": [
  {
   "url": "media/panorama_956DEF20_BF1E_E581_41CC_7E4C02F4797C_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFBAFED4_EDE4_D5D5_41DE_435C5A375DFE",
 "levels": [
  {
   "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B381071D_A17A_C54F_41D7_C964CE602F42",
 "levels": [
  {
   "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFBACED4_EDE4_D5D5_41C2_16734F163A20",
 "levels": [
  {
   "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFB90ED5_EDE4_D5D7_41E6_1671D6CDAB6B",
 "levels": [
  {
   "url": "media/panorama_B0A43264_A068_9187_41C3_90F2834CF3E6_0_HS_4_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA864C3_A31F_93A1_41D7_89136448A62A",
 "levels": [
  {
   "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA844C3_A31F_93A1_41D3_1BC2FF361251",
 "levels": [
  {
   "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_1_HS_2_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C11C1FCF_D812_5983_41E5_FFD6451609D2",
 "levels": [
  {
   "url": "media/panorama_B0B05C02_A068_B180_41D0_233B6AC37F74_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFAB94C6_A31F_93A3_41C4_5BD7585DA537",
 "levels": [
  {
   "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1112FD5_D812_5987_41D1_E99F60B376BB",
 "levels": [
  {
   "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C116AFD6_D812_5985_41E3_A99985B311D3",
 "levels": [
  {
   "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_1_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1163FDC_D812_5985_41E0_768B547A9BDC",
 "levels": [
  {
   "url": "media/panorama_B095CBCF_A06B_9681_41E0_B5AACF4C4C58_1_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA944C5_A31F_93A1_41E1_44DA58198922",
 "levels": [
  {
   "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA934C5_A31F_93A1_41D9_4197BF4C2CCF",
 "levels": [
  {
   "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1107FD4_D812_5985_41D1_C55875C6D68E",
 "levels": [
  {
   "url": "media/panorama_B0B555B9_A06B_F280_41D7_54AE9C6CE7AE_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B384F718_A17A_C555_41E2_C2278805CC8A",
 "levels": [
  {
   "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B384C719_A17A_C557_41B0_FB733FE5F7D0",
 "levels": [
  {
   "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_1_HS_2_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_B3857719_A17A_C557_41C5_93DA1675F49F",
 "levels": [
  {
   "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_1_HS_3_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C11E5FCD_D812_5987_41E5_7F6D4089F74A",
 "levels": [
  {
   "url": "media/panorama_B09B52FF_A068_F681_41E3_F52BF45231C9_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFAE64C9_A31F_93A1_41BE_18EA9B39C6DD",
 "levels": [
  {
   "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_1_HS_0_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C16A7FE2_D812_59BC_41E1_505AB8D56852",
 "levels": [
  {
   "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C16B9FE3_D812_59BC_41DF_CE2E64A89B56",
 "levels": [
  {
   "url": "media/panorama_B0D61189_A068_9280_41D8_C2D5F420FA51_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA8C4C7_A31F_93A1_41D1_5CFC753C3593",
 "levels": [
  {
   "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA8B4C7_A31F_93A1_41DC_04C0B6D1C4A4",
 "levels": [
  {
   "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_1_HS_2_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1164FDF_D812_5983_41E0_E452773E0AFF",
 "levels": [
  {
   "url": "media/panorama_B10A16F6_A06B_7E80_41E3_9629F10B6A8C_1_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA834C4_A31F_93A7_41CA_0CF0320B602E",
 "levels": [
  {
   "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA814C4_A31F_93A7_41BA_963137E74ECE",
 "levels": [
  {
   "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_1_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C11D6FD0_D812_599D_41EA_67B373C9DD11",
 "levels": [
  {
   "url": "media/panorama_B16C2283_A06B_7681_41E1_5CD30D022130_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1696FEA_D812_598C_41E1_F4CF479DEC4A",
 "levels": [
  {
   "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_1_HS_0_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C16E9FEA_D812_598C_41D6_C40262F2F8FE",
 "levels": [
  {
   "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C16E6FEB_D812_598C_41E3_DC8A6F095424",
 "levels": [
  {
   "url": "media/panorama_97BF51F9_BF1D_7C83_41AF_1AE2EF121C15_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_81218960_A191_EBE7_41DD_D5BE3C13DA63",
 "levels": [
  {
   "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFAB54C2_A31F_93A3_41E1_0F2EFE40FE1A",
 "levels": [
  {
   "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C1186FC6_D812_5985_41B0_8D883A4C6A58",
 "levels": [
  {
   "url": "media/panorama_AE333ED7_A069_6E80_41DC_11F22479292A_1_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BFA8E4C6_A31F_93A3_41A9_1CE123685084",
 "levels": [
  {
   "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C117FFDD_D812_5987_41C9_B51BEBD7A05D",
 "levels": [
  {
   "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFBA0ED3_EDE4_D5D3_41C8_6981689D6FC8",
 "levels": [
  {
   "url": "media/panorama_B082E1CD_A06B_9280_41E2_AC0958A7286F_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C11FDFCE_D812_5985_41E7_AB413644F2E3",
 "levels": [
  {
   "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C11F6FCE_D812_5985_41D2_987641178048",
 "levels": [
  {
   "url": "media/panorama_B16668F7_A068_9280_41E3_8F425083DD47_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "frameDuration": 41
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 1"
 },
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "class": "DropDown",
 "paddingBottom": 0,
 "width": 116,
 "popUpFontColor": "#F0623E",
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 15,
 "minHeight": 1,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "RECEPTION",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "height": 60,
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 2"
 },
 "height": "100%",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpShadowColor": "#000000",
 "width": 96,
 "popUpBorderRadius": 5,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "class": "DropDown",
 "paddingBottom": 0,
 "paddingLeft": 15,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "ROOMS",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "backgroundColorRatios": [
  0
 ],
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "popUpPaddingLeft": 15,
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 3"
 },
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "class": "DropDown",
 "paddingBottom": 0,
 "width": 114,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 15,
 "minHeight": 1,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "AMENITIES",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "height": 60,
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 4"
 },
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "class": "DropDown",
 "paddingBottom": 0,
 "width": 130,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 15,
 "minHeight": 1,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "label": "SPORTS AREA",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "height": 60,
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 5"
 },
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "class": "DropDown",
 "paddingBottom": 0,
 "width": 127.2,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 15,
 "minHeight": 1,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "borderRadius": 0,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#3E5CB8",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverPopUpBackgroundColor": "#0033CC",
 "label": "PRODUKSI",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#3E5CB8",
 "minWidth": 1,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "height": 60,
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 6"
 },
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "paddingRight": 15,
 "class": "DropDown",
 "paddingBottom": 0,
 "width": 125,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 8,
 "minHeight": 1,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "popUpShadowSpread": 1,
 "popUpPaddingLeft": 15,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "popUpGap": 2,
 "popUpBackgroundColor": "#3E5CB8",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "rollOverPopUpBackgroundColor": "#0033CC",
 "label": "SPOT FOTO",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#3E5CB8",
 "minWidth": 1,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "textDecoration": "none",
 "height": 60,
 "popUpShadowBlurRadius": 6
},
{
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings"
 },
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "fontStyle": "normal",
 "paddingRight": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 17,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 17,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "toggle",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "minWidth": 1,
 "fontSize": 12,
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "layout": "horizontal",
 "textDecoration": "none",
 "cursor": "hand",
 "height": 60
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "85%",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "width": 8,
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "paddingRight": 50,
 "class": "Container",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 460,
 "borderSize": 0,
 "width": "50%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "transparencyActive": false,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 512,
 "id": "Image_3A8C7106_2B65_2006_41C2_B9AF8AA95E93",
 "left": "34.99%",
 "paddingRight": 0,
 "class": "Image",
 "right": "47.03%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "url": "skin/Image_3A8C7106_2B65_2006_41C2_B9AF8AA95E93.png",
 "propagateClick": false,
 "top": "30.94%",
 "borderSize": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_3A8CA106_2B65_2006_41BE_9DEBD2BEE4CE, false, 0, null, null, false); this.playGlobalAudio(this.audio_3F565F63_2B7C_E03E_41BA_41347EFA6A9E)",
 "height": "21.638%",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Image7656"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 512
},
{
 "id": "HTMLText_3A8C4106_2B65_2006_41A5_F34478BC4E22",
 "left": "27.16%",
 "paddingRight": 10,
 "class": "HTMLText",
 "right": "22.83%",
 "paddingLeft": 10,
 "paddingBottom": 20,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 5,
 "propagateClick": false,
 "top": "5.47%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#FFFFFF",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:7.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.58vh;font-family:'Montserrat';\"><B>Pilih Bahasa Audio</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>Chose audio language</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "height": "24.678%"
},
{
 "maxHeight": 512,
 "id": "Image_3A8C5106_2B65_2006_41C5_7BC14C0D1F38",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "30.97%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "url": "skin/Image_3A8C5106_2B65_2006_41C5_7BC14C0D1F38.png",
 "propagateClick": false,
 "top": "31.09%",
 "borderSize": 0,
 "width": "17.588%",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_3A8CA106_2B65_2006_41BE_9DEBD2BEE4CE, false, 0, null, null, false); this.playGlobalAudio(this.audio_3B783A50_357E_A50E_4194_078399C2B7CC)",
 "height": "20.923%",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Image8713"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 512
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "minHeight": 1,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "insetBorder": false,
 "height": "100%"
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "transparencyActive": false,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "paddingTop": 0,
 "toolTipFontSize": "10px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "layout": "absolute",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "100%",
 "height": 140,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "55%",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "height": "100%",
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "width": 8,
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "layout": "vertical",
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingLeft": 60,
 "paddingRight": 60,
 "class": "Container",
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 460,
 "borderSize": 0,
 "width": "45%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "transparencyActive": false,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "propagateClick": false,
 "top": "0%",
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000
},
{
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "height": 60
},
{
 "layout": "vertical",
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 520,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 100,
 "borderSize": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 0,
 "width": 370,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "height": 40
},
{
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "top": 20,
 "borderSize": 0,
 "width": "100%",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "transparencyActive": false,
 "height": "36.14%",
 "horizontalAlign": "right",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "class": "ViewerArea",
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": "10px",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": "0%",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "bottom": "20%",
 "top": "20%",
 "borderSize": 0,
 "transparencyActive": false,
 "width": "14.22%",
 "mode": "push",
 "minWidth": 50,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "bottom": "20%",
 "top": "20%",
 "borderSize": 0,
 "transparencyActive": false,
 "width": "14.22%",
 "mode": "push",
 "minWidth": 50,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "top": 20,
 "borderSize": 0,
 "width": "10%",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "transparencyActive": false,
 "height": "10%",
 "horizontalAlign": "right",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "propagateClick": false,
 "top": "0%",
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "height": "100%",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000
},
{
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "height": 60
},
{
 "layout": "vertical",
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 520,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 100,
 "borderSize": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 0,
 "width": 370,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "height": 40
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "class": "HTMLText",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#F7931E",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.72vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.29vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.58vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "paddingRight": 0,
 "class": "Button",
 "paddingBottom": 0,
 "iconWidth": 32,
 "width": 180,
 "shadowSpread": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "fontWeight": "bold",
 "backgroundOpacity": 0.8,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#F7931E"
 ],
 "label": "LOREM IPSUM",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "fontSize": "1.96vh",
 "shadowColor": "#000000",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "height": 50
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "45%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.87vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>Kampung Wisata </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>Kesenian</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0
},
{
 "layout": "horizontal",
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "borderRadius": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "25%",
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 200
},
{
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "class": "HTMLText",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#F7931E",
 "width": "75%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>Bapak Agus</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.29vh;font-family:'Montserrat';\">PENGELOLA DESA</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0
}],
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "vrPolyfillScale": 0.59,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
