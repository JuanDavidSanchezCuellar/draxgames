
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled || {};

/**
 * Behavior generated from 3D Plane Projection from Tiled Sprite
 */
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled = class PlaneProjectionFromTiled extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Id = "";
    this._behaviorData.FirstFrame = true;
    this._behaviorData.Hide = behaviorData.Hide !== undefined ? behaviorData.Hide : true;
    this._behaviorData.AlphaTest = behaviorData.AlphaTest !== undefined ? behaviorData.AlphaTest : Number("0") || 0;
    this._behaviorData.AntiAliasing = behaviorData.AntiAliasing !== undefined ? behaviorData.AntiAliasing : true;
    this._behaviorData.Blend = behaviorData.Blend !== undefined ? behaviorData.Blend : "Normal";
    this._behaviorData.Rotate90 = behaviorData.Rotate90 !== undefined ? behaviorData.Rotate90 : false;
    this._behaviorData.Depth = behaviorData.Depth !== undefined ? behaviorData.Depth : Number("0") || 0;
    this._behaviorData.TextureId = "";
    this._behaviorData.OffsetV = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Id !== newBehaviorData.Id)
      this._behaviorData.Id = newBehaviorData.Id;
    if (oldBehaviorData.FirstFrame !== newBehaviorData.FirstFrame)
      this._behaviorData.FirstFrame = newBehaviorData.FirstFrame;
    if (oldBehaviorData.Hide !== newBehaviorData.Hide)
      this._behaviorData.Hide = newBehaviorData.Hide;
    if (oldBehaviorData.AlphaTest !== newBehaviorData.AlphaTest)
      this._behaviorData.AlphaTest = newBehaviorData.AlphaTest;
    if (oldBehaviorData.AntiAliasing !== newBehaviorData.AntiAliasing)
      this._behaviorData.AntiAliasing = newBehaviorData.AntiAliasing;
    if (oldBehaviorData.Blend !== newBehaviorData.Blend)
      this._behaviorData.Blend = newBehaviorData.Blend;
    if (oldBehaviorData.Rotate90 !== newBehaviorData.Rotate90)
      this._behaviorData.Rotate90 = newBehaviorData.Rotate90;
    if (oldBehaviorData.Depth !== newBehaviorData.Depth)
      this._behaviorData.Depth = newBehaviorData.Depth;
    if (oldBehaviorData.TextureId !== newBehaviorData.TextureId)
      this._behaviorData.TextureId = newBehaviorData.TextureId;
    if (oldBehaviorData.OffsetV !== newBehaviorData.OffsetV)
      this._behaviorData.OffsetV = newBehaviorData.OffsetV;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Id: this._behaviorData.Id,
    FirstFrame: this._behaviorData.FirstFrame,
    Hide: this._behaviorData.Hide,
    AlphaTest: this._behaviorData.AlphaTest,
    AntiAliasing: this._behaviorData.AntiAliasing,
    Blend: this._behaviorData.Blend,
    Rotate90: this._behaviorData.Rotate90,
    Depth: this._behaviorData.Depth,
    TextureId: this._behaviorData.TextureId,
    OffsetV: this._behaviorData.OffsetV,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Id !== undefined)
      this._behaviorData.Id = networkSyncData.props.Id;
    if (networkSyncData.props.FirstFrame !== undefined)
      this._behaviorData.FirstFrame = networkSyncData.props.FirstFrame;
    if (networkSyncData.props.Hide !== undefined)
      this._behaviorData.Hide = networkSyncData.props.Hide;
    if (networkSyncData.props.AlphaTest !== undefined)
      this._behaviorData.AlphaTest = networkSyncData.props.AlphaTest;
    if (networkSyncData.props.AntiAliasing !== undefined)
      this._behaviorData.AntiAliasing = networkSyncData.props.AntiAliasing;
    if (networkSyncData.props.Blend !== undefined)
      this._behaviorData.Blend = networkSyncData.props.Blend;
    if (networkSyncData.props.Rotate90 !== undefined)
      this._behaviorData.Rotate90 = networkSyncData.props.Rotate90;
    if (networkSyncData.props.Depth !== undefined)
      this._behaviorData.Depth = networkSyncData.props.Depth;
    if (networkSyncData.props.TextureId !== undefined)
      this._behaviorData.TextureId = networkSyncData.props.TextureId;
    if (networkSyncData.props.OffsetV !== undefined)
      this._behaviorData.OffsetV = networkSyncData.props.OffsetV;
  }

  // Properties:
  
  _getId() {
    return this._behaviorData.Id !== undefined ? this._behaviorData.Id : "";
  }
  _setId(newValue) {
    this._behaviorData.Id = newValue;
  }
  _getFirstFrame() {
    return this._behaviorData.FirstFrame !== undefined ? this._behaviorData.FirstFrame : true;
  }
  _setFirstFrame(newValue) {
    this._behaviorData.FirstFrame = newValue;
  }
  _toggleFirstFrame() {
    this._setFirstFrame(!this._getFirstFrame());
  }
  _getHide() {
    return this._behaviorData.Hide !== undefined ? this._behaviorData.Hide : true;
  }
  _setHide(newValue) {
    this._behaviorData.Hide = newValue;
  }
  _toggleHide() {
    this._setHide(!this._getHide());
  }
  _getAlphaTest() {
    return this._behaviorData.AlphaTest !== undefined ? this._behaviorData.AlphaTest : Number("0") || 0;
  }
  _setAlphaTest(newValue) {
    this._behaviorData.AlphaTest = newValue;
  }
  _getAntiAliasing() {
    return this._behaviorData.AntiAliasing !== undefined ? this._behaviorData.AntiAliasing : true;
  }
  _setAntiAliasing(newValue) {
    this._behaviorData.AntiAliasing = newValue;
  }
  _toggleAntiAliasing() {
    this._setAntiAliasing(!this._getAntiAliasing());
  }
  _getBlend() {
    return this._behaviorData.Blend !== undefined ? this._behaviorData.Blend : "Normal";
  }
  _setBlend(newValue) {
    this._behaviorData.Blend = newValue;
  }
  _getRotate90() {
    return this._behaviorData.Rotate90 !== undefined ? this._behaviorData.Rotate90 : false;
  }
  _setRotate90(newValue) {
    this._behaviorData.Rotate90 = newValue;
  }
  _toggleRotate90() {
    this._setRotate90(!this._getRotate90());
  }
  _getDepth() {
    return this._behaviorData.Depth !== undefined ? this._behaviorData.Depth : Number("0") || 0;
  }
  _setDepth(newValue) {
    this._behaviorData.Depth = newValue;
  }
  _getTextureId() {
    return this._behaviorData.TextureId !== undefined ? this._behaviorData.TextureId : "";
  }
  _setTextureId(newValue) {
    this._behaviorData.TextureId = newValue;
  }
  _getOffsetV() {
    return this._behaviorData.OffsetV !== undefined ? this._behaviorData.OffsetV : Number("") || 0;
  }
  _setOffsetV(newValue) {
    this._behaviorData.OffsetV = newValue;
  }
}

/**
 * Shared data generated from 3D Plane Projection from Tiled Sprite
 */
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.SharedData = class PlaneProjectionFromTiledSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WithThreeJS_PlaneProjectionFromTiledSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WithThreeJS_PlaneProjectionFromTiledSharedData = new gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.SharedData(
      initialData
    );
  }
  return instanceContainer._WithThreeJS_PlaneProjectionFromTiledSharedData;
}

// Methods:
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.userFunc0xb1ed08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Textures")) {
    gdjs.__WithThreeJS.set("Textures", new Map());
}
const Scene = gdjs.__WithThreeJS.get("Scene");
let Textures = gdjs.__WithThreeJS.get("Textures");
//
const Behavior = objects[0].getBehavior("PlaneProjectionFromTiled");
const Id = objects[0].name + objects[0].id;
// const X = objects[0].getCenterXInScene();
// const Y = objects[0].getCenterYInScene();
// const Z = objects[0].zOrder;
const Width = objects[0].getWidth();
const Height = objects[0].getHeight();
const ProjectionScale = gdjs.__WithThreeJS.get("ProjectionScale");//Behavior.ProjectionScale();
const ViewMode = gdjs.__WithThreeJS.get("ViewMode");//Behavior.ViewMode();
const AlphaTest = Behavior.AlphaTest();
const Transparent = AlphaTest !== 0;
const AntiAliasing = Behavior.AntiAliasing();
const Depth = Behavior.Depth();
let Blend = THREE.NormalBlending;
if (Behavior.Blend() == "Additive") {
    Blend = THREE.AdditiveBlending;
} else if (Behavior.Blend() == "Subtractive") {
    Blend = THREE.SubtractiveBlending;
} else if (Behavior.Blend() == "Multiply") {
    Blend = THREE.MultiplyBlending;
}
// const Opacity = 1.0;
//
//タイルの画像を取得
const Resource = objects[0].getRendererObject().texture.baseTexture.resource;
const TextureWidth = Resource.width;
const TextureHeight = Resource.height;
//
// インスタンスごとのマテリアルとテクスチャ生成
// Plane は FrontRear のみ
//リピート数
const RepeatU = Width / TextureWidth;
const RepeatV = Height / TextureHeight;
const TextureId = "_" + Id + "_" + Resource.url;
Behavior.SetTextureId(TextureId);
Behavior.SetOffsetV(1 - (RepeatV % 1));
//
const Texture = new THREE.Texture();
Texture.image = Resource.source;
Texture.wrapS = THREE.RepeatWrapping;
Texture.wrapT = THREE.RepeatWrapping;
if (!AntiAliasing) {
    Texture.magFilter = THREE.NearestFilter;// THREE.LinearFilter
    Texture.minFilter = THREE.NearestFilter;// THREE.LinearMipmapLinearFilter
}
Texture.repeat.set(RepeatU, RepeatV);
Texture.colorSpace = THREE.SRGBColorSpace;
Texture.needsUpdate = true;//必須
Textures.set(TextureId, Texture);
//
// const Material = new THREE.MeshBasicMaterial({map: Texture, side: THREE.DoubleSide, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
const Material = new THREE.MeshLambertMaterial({map: Texture, side: THREE.DoubleSide, transparent:Transparent, alphaTest:AlphaTest, blending:Blend});
const Geometry = new THREE.PlaneGeometry(Width * ProjectionScale, Height * ProjectionScale, 1, 1);
Geometry.computeBoundingBox();
Geometry.boundingBox.expandByVector(new THREE.Vector3(0, 0, (Depth * ProjectionScale) / 2));
const Obj = new THREE.Mesh(Geometry, Material);
Obj.name = Id;
Obj.castShadow = true;
Obj.receiveShadow = true;
Obj.userData.Use3DProjectionBehavior = true;
Behavior.SetId(Id);
if (ViewMode === "Built-In 3D") {
    Obj.scale.y = -1;
}
Scene.add(Obj);


};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects2);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.userFunc0xb1ed08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{

/* Reuse gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i].hide();
}
}}

}


};gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.userFunc0xde33c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Textures")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
let Textures = gdjs.__WithThreeJS.get("Textures");
//
const Behavior = objects[0].getBehavior("PlaneProjectionFromTiled");
const Id = Behavior.Id();
const X = objects[0].getCenterXInScene();
const Y = objects[0].getCenterYInScene();
const Z = objects[0].zOrder;
const ProjectionScale = gdjs.__WithThreeJS.get("ProjectionScale");//Behavior.ProjectionScale();
const ViewMode = gdjs.__WithThreeJS.get("ViewMode");//Behavior.ViewMode();
const Rotate90 = Behavior.Rotate90();
//
const Obj = Scene.getObjectByName(Id);
// Move & Rotate
const Angle = objects[0].angle;
if (ViewMode == "Top Down") {
    Obj.position.set(X * ProjectionScale, Z * ProjectionScale, Y * ProjectionScale);
    if (Rotate90) {
        Obj.rotation.set(gdjs.toRad(0), gdjs.toRad(Angle * -1), gdjs.toRad(0));
    } else {
        Obj.rotation.set(gdjs.toRad(-90), gdjs.toRad(0), gdjs.toRad(Angle * -1));
    }
} else if (ViewMode == "Side") {
    Obj.position.set(X * ProjectionScale, -Y * ProjectionScale, Z * ProjectionScale);
    if (Rotate90) {
        Obj.rotation.set(gdjs.toRad(-90), gdjs.toRad(Angle), gdjs.toRad(0));
    } else {
        Obj.rotation.set(gdjs.toRad(0), gdjs.toRad(0), gdjs.toRad(Angle * -1));
    }
} else {
    Obj.position.set(X * ProjectionScale, Y * ProjectionScale, Z * ProjectionScale);
    if (Rotate90) {
        Obj.rotation.set(gdjs.toRad(-90), gdjs.toRad(Angle * -1), gdjs.toRad(0));
    } else {
        Obj.rotation.set(gdjs.toRad(0), gdjs.toRad(0), gdjs.toRad(Angle));
    }
}
// Opacity
const Opacity = objects[0].getOpacity() / 255;
if (!Obj.material.transparent) {
    if (Obj.material.alphaTest !== 0 || Opacity !== 1) {
        Obj.material.transparent = true;
        Obj.material.needsUpdate = true;
    }
}
Obj.material.opacity = Opacity;
// Offset
const Texture = Textures.get(Behavior.TextureId());
const TextureWidth = Texture.image.width;
const TextureHeight = Texture.image.height;
Texture.offset.set(objects[0].getXOffset() / TextureWidth, -(objects[0].getYOffset() / TextureHeight) + Behavior.OffsetV());


};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFirstFrame(false);
}
}
{ //Subevents
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.userFunc0xde33c8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.onDestroyContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.onDestroyContext.userFunc0xe09e60 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// 生成と同時に削除された場合、3D化されていないので回避
// FirstFrame == true のほうが理想的だが取得がめんどくさいので Id を利用。
const Behavior = objects[0].getBehavior("PlaneProjectionFromTiled");
const Id = Behavior.Id();
if (Id === "") {
    return;
}
//
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
if (!gdjs.__WithThreeJS.has("Textures")) {
    gdjs.__WithThreeJS.set("Textures", new Map());
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Textures = gdjs.__WithThreeJS.get("Textures");
const Obj = Scene.getObjectByName(Id);
if (!Obj) {
    console.warn("3D Object not found.");
    return;
}
//
const TextureId = Behavior.TextureId();
const Texture = Textures.get(TextureId);
// インスタンスごとなので全て削除
Texture.dispose();
Textures.delete(TextureId);
Obj.material.dispose();
Obj.removeFromParent();


};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.onDestroyContext.userFunc0xe09e60(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.IdContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.IdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.IdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.IdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.IdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.IdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.IdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Id = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.IdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.IdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AlphaTestContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AlphaTestContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAlphaTest()); }}}

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AlphaTest = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AlphaTestContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AlphaTestContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.BlendContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.BlendContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.BlendContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.BlendContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.BlendContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.BlendContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.BlendContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBlend()); }}}

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Blend = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.BlendContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.BlendContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.BlendContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAntiAliasing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAntiAliasing()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasing = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.AntiAliasingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotate90() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotate90()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90 = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Rotate90Context.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.TextureIdContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.TextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.TextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.TextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.TextureIdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.TextureIdContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.TextureIdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTextureId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.TextureId = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.TextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.TextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.TextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.OffsetVContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.OffsetVContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.OffsetVContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.OffsetVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.OffsetVContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.OffsetVContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.OffsetVContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetV()); }}}

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.OffsetV = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.OffsetVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.OffsetVContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.OffsetVContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.DepthContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.DepthContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.DepthContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.DepthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.DepthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.DepthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.DepthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDepth()); }}}

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.Depth = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.DepthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.DepthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.DepthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetIdContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetId = function(Id, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Id") return Id;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetTextureIdContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetTextureIdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetTextureIdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetTextureIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetTextureIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetTextureIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetTextureIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTextureId((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Id") : ""));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetTextureId = function(Id, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Id") return Id;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetTextureIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetTextureIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetTextureIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetOffsetVContext = {};
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetOffsetVContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetOffsetVContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetOffsetVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetOffsetVContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetOffsetVContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetOffsetVContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffsetV((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetOffsetV = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetOffsetVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetOffsetVContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.SetOffsetVContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WithThreeJS::PlaneProjectionFromTiled", gdjs.evtsExt__WithThreeJS__PlaneProjectionFromTiled.PlaneProjectionFromTiled);
