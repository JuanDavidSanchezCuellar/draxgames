gdjs.GameCode = {};
gdjs.GameCode.GDDirtObjects1= [];
gdjs.GameCode.GDDirtObjects2= [];
gdjs.GameCode.GDDirtObjects3= [];
gdjs.GameCode.GDDirtObjects4= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDCameraObjects1= [];
gdjs.GameCode.GDCameraObjects2= [];
gdjs.GameCode.GDCameraObjects3= [];
gdjs.GameCode.GDCameraObjects4= [];
gdjs.GameCode.GDCursorObjects1= [];
gdjs.GameCode.GDCursorObjects2= [];
gdjs.GameCode.GDCursorObjects3= [];
gdjs.GameCode.GDCursorObjects4= [];
gdjs.GameCode.GDBarObjects1= [];
gdjs.GameCode.GDBarObjects2= [];
gdjs.GameCode.GDBarObjects3= [];
gdjs.GameCode.GDBarObjects4= [];
gdjs.GameCode.GDWood1Objects1= [];
gdjs.GameCode.GDWood1Objects2= [];
gdjs.GameCode.GDWood1Objects3= [];
gdjs.GameCode.GDWood1Objects4= [];
gdjs.GameCode.GDWood2Objects1= [];
gdjs.GameCode.GDWood2Objects2= [];
gdjs.GameCode.GDWood2Objects3= [];
gdjs.GameCode.GDWood2Objects4= [];
gdjs.GameCode.GDStoneObjects1= [];
gdjs.GameCode.GDStoneObjects2= [];
gdjs.GameCode.GDStoneObjects3= [];
gdjs.GameCode.GDStoneObjects4= [];
gdjs.GameCode.GDGrassObjects1= [];
gdjs.GameCode.GDGrassObjects2= [];
gdjs.GameCode.GDGrassObjects3= [];
gdjs.GameCode.GDGrassObjects4= [];
gdjs.GameCode.GDTroncoObjects1= [];
gdjs.GameCode.GDTroncoObjects2= [];
gdjs.GameCode.GDTroncoObjects3= [];
gdjs.GameCode.GDTroncoObjects4= [];
gdjs.GameCode.GDArbustoObjects1= [];
gdjs.GameCode.GDArbustoObjects2= [];
gdjs.GameCode.GDArbustoObjects3= [];
gdjs.GameCode.GDArbustoObjects4= [];
gdjs.GameCode.GDStone2Objects1= [];
gdjs.GameCode.GDStone2Objects2= [];
gdjs.GameCode.GDStone2Objects3= [];
gdjs.GameCode.GDStone2Objects4= [];
gdjs.GameCode.GDGlassObjects1= [];
gdjs.GameCode.GDGlassObjects2= [];
gdjs.GameCode.GDGlassObjects3= [];
gdjs.GameCode.GDGlassObjects4= [];
gdjs.GameCode.GDBedrockObjects1= [];
gdjs.GameCode.GDBedrockObjects2= [];
gdjs.GameCode.GDBedrockObjects3= [];
gdjs.GameCode.GDBedrockObjects4= [];
gdjs.GameCode.GDBarrersObjects1= [];
gdjs.GameCode.GDBarrersObjects2= [];
gdjs.GameCode.GDBarrersObjects3= [];
gdjs.GameCode.GDBarrersObjects4= [];
gdjs.GameCode.GDmanoObjects1= [];
gdjs.GameCode.GDmanoObjects2= [];
gdjs.GameCode.GDmanoObjects3= [];
gdjs.GameCode.GDmanoObjects4= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects2ObjectsGDgdjs_9546GameCode_9546GDWood1Objects2ObjectsGDgdjs_9546GameCode_9546GDWood2Objects2ObjectsGDgdjs_9546GameCode_9546GDStoneObjects2ObjectsGDgdjs_9546GameCode_9546GDGrassObjects2ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects2ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects2ObjectsGDgdjs_9546GameCode_9546GDStone2Objects2ObjectsGDgdjs_9546GameCode_9546GDGlassObjects2ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects2ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects2Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects2, "Wood1": gdjs.GameCode.GDWood1Objects2, "Wood2": gdjs.GameCode.GDWood2Objects2, "Stone": gdjs.GameCode.GDStoneObjects2, "Grass": gdjs.GameCode.GDGrassObjects2, "Tronco": gdjs.GameCode.GDTroncoObjects2, "Arbusto": gdjs.GameCode.GDArbustoObjects2, "Stone2": gdjs.GameCode.GDStone2Objects2, "Glass": gdjs.GameCode.GDGlassObjects2, "Bedrock": gdjs.GameCode.GDBedrockObjects2, "Barrers": gdjs.GameCode.GDBarrersObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBedrockObjects2Objects = Hashtable.newFrom({"Bedrock": gdjs.GameCode.GDBedrockObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCameraObjects2Objects = Hashtable.newFrom({"Camera": gdjs.GameCode.GDCameraObjects2});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Walk3D").SimulateMoveForwardKey((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Walk3D").SimulateMoveLeftKey((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Walk3D").SimulateMoveBackwardKey((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Walk3D").SimulateMoveRightKey((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Jump3D").SimulateJumpKey((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Arbusto"), gdjs.GameCode.GDArbustoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bedrock"), gdjs.GameCode.GDBedrockObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.GameCode.GDDirtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Glass"), gdjs.GameCode.GDGlassObjects2);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.GameCode.GDGrassObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.GameCode.GDStoneObjects2);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.GameCode.GDStone2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Tronco"), gdjs.GameCode.GDTroncoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wood1"), gdjs.GameCode.GDWood1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Wood2"), gdjs.GameCode.GDWood2Objects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Jump3D").SeparateFromPlatforms(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects2ObjectsGDgdjs_9546GameCode_9546GDWood1Objects2ObjectsGDgdjs_9546GameCode_9546GDWood2Objects2ObjectsGDgdjs_9546GameCode_9546GDStoneObjects2ObjectsGDgdjs_9546GameCode_9546GDGrassObjects2ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects2ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects2ObjectsGDgdjs_9546GameCode_9546GDStone2Objects2ObjectsGDgdjs_9546GameCode_9546GDGlassObjects2ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects2ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects2Objects, "Object3D", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Jump3D").SeparateFromPlatforms(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBedrockObjects2Objects, "Object3D", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarObjects2[i].setPosition(0,0);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.GameCode.GDCameraObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCameraObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCameraObjects2[i].setAngle(gdjs.GameCode.GDCameraObjects2[i].getAngle() + (gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 6));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAngle((( gdjs.GameCode.GDCameraObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCameraObjects2[0].getAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDCameraObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCameraObjects2[i].getBehavior("Object3D").setRotationY(gdjs.GameCode.GDCameraObjects2[i].getBehavior("Object3D").getRotationY() + (gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 7));
}
}{for(var i = 0, len = gdjs.GameCode.GDCameraObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCameraObjects2[i].getBehavior("Object3D").setRotationY(gdjs.evtTools.common.clamp((gdjs.GameCode.GDCameraObjects2[i].getBehavior("Object3D").getRotationY()), -(90), 90));
}
}{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.GameCode.GDCameraObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCameraObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCameraObjects2[i].setCenterPositionInScene((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterXInScene()),(( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.GameCode.GDCameraObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCameraObjects2[i].getBehavior("Object3D").setCenterZInScene((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getBehavior("Object3D").getCenterZInScene()) + 70);
}
}{gdjs.evtsExt__FirstPersonCamera__LookFromObjectEyes.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCameraObjects2Objects, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.GameCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.GameCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCursorObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "GUI", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "GUI", 0));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects3, "Wood1": gdjs.GameCode.GDWood1Objects3, "Wood2": gdjs.GameCode.GDWood2Objects3, "Stone": gdjs.GameCode.GDStoneObjects3, "Grass": gdjs.GameCode.GDGrassObjects3, "Tronco": gdjs.GameCode.GDTroncoObjects3, "Arbusto": gdjs.GameCode.GDArbustoObjects3, "Stone2": gdjs.GameCode.GDStone2Objects3, "Glass": gdjs.GameCode.GDGlassObjects3, "Bedrock": gdjs.GameCode.GDBedrockObjects3, "Barrers": gdjs.GameCode.GDBarrersObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects3});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Arbusto"), gdjs.GameCode.GDArbustoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects3);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bedrock"), gdjs.GameCode.GDBedrockObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.GameCode.GDDirtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Glass"), gdjs.GameCode.GDGlassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.GameCode.GDGrassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.GameCode.GDStoneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.GameCode.GDStone2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Tronco"), gdjs.GameCode.GDTroncoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wood1"), gdjs.GameCode.GDWood1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Wood2"), gdjs.GameCode.GDWood2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBarObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBarObjects3[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBarObjects3[k] = gdjs.GameCode.GDBarObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBarObjects3.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16406084);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDArbustoObjects3 */
/* Reuse gdjs.GameCode.GDBarrersObjects3 */
/* Reuse gdjs.GameCode.GDBedrockObjects3 */
/* Reuse gdjs.GameCode.GDDirtObjects3 */
/* Reuse gdjs.GameCode.GDGlassObjects3 */
/* Reuse gdjs.GameCode.GDGrassObjects3 */
/* Reuse gdjs.GameCode.GDStoneObjects3 */
/* Reuse gdjs.GameCode.GDStone2Objects3 */
/* Reuse gdjs.GameCode.GDTroncoObjects3 */
/* Reuse gdjs.GameCode.GDWood1Objects3 */
/* Reuse gdjs.GameCode.GDWood2Objects3 */
{gdjs.evtsExt__Create3D__Function.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3Objects, "Object3D", (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getX()) :gdjs.GameCode.GDWood1Objects3[0].getX()) :gdjs.GameCode.GDWood2Objects3[0].getX()) :gdjs.GameCode.GDStoneObjects3[0].getX()) :gdjs.GameCode.GDGrassObjects3[0].getX()) :gdjs.GameCode.GDTroncoObjects3[0].getX()) :gdjs.GameCode.GDArbustoObjects3[0].getX()) :gdjs.GameCode.GDStone2Objects3[0].getX()) :gdjs.GameCode.GDGlassObjects3[0].getX()) :gdjs.GameCode.GDBedrockObjects3[0].getX()) :gdjs.GameCode.GDBarrersObjects3[0].getX()) + (gdjs.evtsExt__Raycaster3D__NormalX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getY()) :gdjs.GameCode.GDWood1Objects3[0].getY()) :gdjs.GameCode.GDWood2Objects3[0].getY()) :gdjs.GameCode.GDStoneObjects3[0].getY()) :gdjs.GameCode.GDGrassObjects3[0].getY()) :gdjs.GameCode.GDTroncoObjects3[0].getY()) :gdjs.GameCode.GDArbustoObjects3[0].getY()) :gdjs.GameCode.GDStone2Objects3[0].getY()) :gdjs.GameCode.GDGlassObjects3[0].getY()) :gdjs.GameCode.GDBedrockObjects3[0].getY()) :gdjs.GameCode.GDBarrersObjects3[0].getY()) + (gdjs.evtsExt__Raycaster3D__NormalY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood1Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStoneObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGrassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDTroncoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDArbustoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStone2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGlassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBedrockObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBarrersObjects3[0].getBehavior("Object3D").getZ()) + (gdjs.evtsExt__Raycaster3D__NormalZ.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects2ObjectsGDgdjs_9546GameCode_9546GDWood1Objects2ObjectsGDgdjs_9546GameCode_9546GDWood2Objects2ObjectsGDgdjs_9546GameCode_9546GDStoneObjects2ObjectsGDgdjs_9546GameCode_9546GDGrassObjects2ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects2ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects2ObjectsGDgdjs_9546GameCode_9546GDStone2Objects2ObjectsGDgdjs_9546GameCode_9546GDGlassObjects2ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects2ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects2Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects2, "Wood1": gdjs.GameCode.GDWood1Objects2, "Wood2": gdjs.GameCode.GDWood2Objects2, "Stone": gdjs.GameCode.GDStoneObjects2, "Grass": gdjs.GameCode.GDGrassObjects2, "Tronco": gdjs.GameCode.GDTroncoObjects2, "Arbusto": gdjs.GameCode.GDArbustoObjects2, "Stone2": gdjs.GameCode.GDStone2Objects2, "Glass": gdjs.GameCode.GDGlassObjects2, "Bedrock": gdjs.GameCode.GDBedrockObjects2, "Barrers": gdjs.GameCode.GDBarrersObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWood1Objects2Objects = Hashtable.newFrom({"Wood1": gdjs.GameCode.GDWood1Objects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Arbusto"), gdjs.GameCode.GDArbustoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bedrock"), gdjs.GameCode.GDBedrockObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.GameCode.GDDirtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Glass"), gdjs.GameCode.GDGlassObjects2);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.GameCode.GDGrassObjects2);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.GameCode.GDStoneObjects2);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.GameCode.GDStone2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Tronco"), gdjs.GameCode.GDTroncoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wood1"), gdjs.GameCode.GDWood1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Wood2"), gdjs.GameCode.GDWood2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects2ObjectsGDgdjs_9546GameCode_9546GDWood1Objects2ObjectsGDgdjs_9546GameCode_9546GDWood2Objects2ObjectsGDgdjs_9546GameCode_9546GDStoneObjects2ObjectsGDgdjs_9546GameCode_9546GDGrassObjects2ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects2ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects2ObjectsGDgdjs_9546GameCode_9546GDStone2Objects2ObjectsGDgdjs_9546GameCode_9546GDGlassObjects2ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects2ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects2Objects, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBarObjects2[i].getBehavior("Animation").getAnimationIndex() == 2 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBarObjects2[k] = gdjs.GameCode.GDBarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBarObjects2.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16409532);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDArbustoObjects2 */
/* Reuse gdjs.GameCode.GDBarrersObjects2 */
/* Reuse gdjs.GameCode.GDBedrockObjects2 */
/* Reuse gdjs.GameCode.GDDirtObjects2 */
/* Reuse gdjs.GameCode.GDGlassObjects2 */
/* Reuse gdjs.GameCode.GDGrassObjects2 */
/* Reuse gdjs.GameCode.GDStoneObjects2 */
/* Reuse gdjs.GameCode.GDStone2Objects2 */
/* Reuse gdjs.GameCode.GDTroncoObjects2 */
/* Reuse gdjs.GameCode.GDWood1Objects2 */
/* Reuse gdjs.GameCode.GDWood2Objects2 */
{gdjs.evtsExt__Create3D__Function.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWood1Objects2Objects, "Object3D", (( gdjs.GameCode.GDBarrersObjects2.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects2.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects2.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects2.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects2.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects2.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects2.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects2.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects2[0].getX()) :gdjs.GameCode.GDWood1Objects2[0].getX()) :gdjs.GameCode.GDWood2Objects2[0].getX()) :gdjs.GameCode.GDStoneObjects2[0].getX()) :gdjs.GameCode.GDGrassObjects2[0].getX()) :gdjs.GameCode.GDTroncoObjects2[0].getX()) :gdjs.GameCode.GDArbustoObjects2[0].getX()) :gdjs.GameCode.GDStone2Objects2[0].getX()) :gdjs.GameCode.GDGlassObjects2[0].getX()) :gdjs.GameCode.GDBedrockObjects2[0].getX()) :gdjs.GameCode.GDBarrersObjects2[0].getX()) + (gdjs.evtsExt__Raycaster3D__NormalX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects2.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects2.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects2.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects2.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects2.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects2.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects2.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects2.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects2[0].getY()) :gdjs.GameCode.GDWood1Objects2[0].getY()) :gdjs.GameCode.GDWood2Objects2[0].getY()) :gdjs.GameCode.GDStoneObjects2[0].getY()) :gdjs.GameCode.GDGrassObjects2[0].getY()) :gdjs.GameCode.GDTroncoObjects2[0].getY()) :gdjs.GameCode.GDArbustoObjects2[0].getY()) :gdjs.GameCode.GDStone2Objects2[0].getY()) :gdjs.GameCode.GDGlassObjects2[0].getY()) :gdjs.GameCode.GDBedrockObjects2[0].getY()) :gdjs.GameCode.GDBarrersObjects2[0].getY()) + (gdjs.evtsExt__Raycaster3D__NormalY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects2.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects2.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects2.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects2.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects2.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects2.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects2.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects2.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood1Objects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood2Objects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStoneObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGrassObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDTroncoObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDArbustoObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStone2Objects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGlassObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBedrockObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBarrersObjects2[0].getBehavior("Object3D").getZ()) + (gdjs.evtsExt__Raycaster3D__NormalZ.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects3, "Wood1": gdjs.GameCode.GDWood1Objects3, "Wood2": gdjs.GameCode.GDWood2Objects3, "Stone": gdjs.GameCode.GDStoneObjects3, "Grass": gdjs.GameCode.GDGrassObjects3, "Tronco": gdjs.GameCode.GDTroncoObjects3, "Arbusto": gdjs.GameCode.GDArbustoObjects3, "Stone2": gdjs.GameCode.GDStone2Objects3, "Glass": gdjs.GameCode.GDGlassObjects3, "Bedrock": gdjs.GameCode.GDBedrockObjects3, "Barrers": gdjs.GameCode.GDBarrersObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWood2Objects3Objects = Hashtable.newFrom({"Wood2": gdjs.GameCode.GDWood2Objects3});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Arbusto"), gdjs.GameCode.GDArbustoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects3);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bedrock"), gdjs.GameCode.GDBedrockObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.GameCode.GDDirtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Glass"), gdjs.GameCode.GDGlassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.GameCode.GDGrassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.GameCode.GDStoneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.GameCode.GDStone2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Tronco"), gdjs.GameCode.GDTroncoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wood1"), gdjs.GameCode.GDWood1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Wood2"), gdjs.GameCode.GDWood2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBarObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBarObjects3[i].getBehavior("Animation").getAnimationIndex() == 3 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBarObjects3[k] = gdjs.GameCode.GDBarObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBarObjects3.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16412628);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDArbustoObjects3 */
/* Reuse gdjs.GameCode.GDBarrersObjects3 */
/* Reuse gdjs.GameCode.GDBedrockObjects3 */
/* Reuse gdjs.GameCode.GDDirtObjects3 */
/* Reuse gdjs.GameCode.GDGlassObjects3 */
/* Reuse gdjs.GameCode.GDGrassObjects3 */
/* Reuse gdjs.GameCode.GDStoneObjects3 */
/* Reuse gdjs.GameCode.GDStone2Objects3 */
/* Reuse gdjs.GameCode.GDTroncoObjects3 */
/* Reuse gdjs.GameCode.GDWood1Objects3 */
/* Reuse gdjs.GameCode.GDWood2Objects3 */
{gdjs.evtsExt__Create3D__Function.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWood2Objects3Objects, "Object3D", (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getX()) :gdjs.GameCode.GDWood1Objects3[0].getX()) :gdjs.GameCode.GDWood2Objects3[0].getX()) :gdjs.GameCode.GDStoneObjects3[0].getX()) :gdjs.GameCode.GDGrassObjects3[0].getX()) :gdjs.GameCode.GDTroncoObjects3[0].getX()) :gdjs.GameCode.GDArbustoObjects3[0].getX()) :gdjs.GameCode.GDStone2Objects3[0].getX()) :gdjs.GameCode.GDGlassObjects3[0].getX()) :gdjs.GameCode.GDBedrockObjects3[0].getX()) :gdjs.GameCode.GDBarrersObjects3[0].getX()) + (gdjs.evtsExt__Raycaster3D__NormalX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getY()) :gdjs.GameCode.GDWood1Objects3[0].getY()) :gdjs.GameCode.GDWood2Objects3[0].getY()) :gdjs.GameCode.GDStoneObjects3[0].getY()) :gdjs.GameCode.GDGrassObjects3[0].getY()) :gdjs.GameCode.GDTroncoObjects3[0].getY()) :gdjs.GameCode.GDArbustoObjects3[0].getY()) :gdjs.GameCode.GDStone2Objects3[0].getY()) :gdjs.GameCode.GDGlassObjects3[0].getY()) :gdjs.GameCode.GDBedrockObjects3[0].getY()) :gdjs.GameCode.GDBarrersObjects3[0].getY()) + (gdjs.evtsExt__Raycaster3D__NormalY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood1Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStoneObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGrassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDTroncoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDArbustoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStone2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGlassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBedrockObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBarrersObjects3[0].getBehavior("Object3D").getZ()) + (gdjs.evtsExt__Raycaster3D__NormalZ.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects3, "Wood1": gdjs.GameCode.GDWood1Objects3, "Wood2": gdjs.GameCode.GDWood2Objects3, "Stone": gdjs.GameCode.GDStoneObjects3, "Grass": gdjs.GameCode.GDGrassObjects3, "Tronco": gdjs.GameCode.GDTroncoObjects3, "Arbusto": gdjs.GameCode.GDArbustoObjects3, "Stone2": gdjs.GameCode.GDStone2Objects3, "Glass": gdjs.GameCode.GDGlassObjects3, "Bedrock": gdjs.GameCode.GDBedrockObjects3, "Barrers": gdjs.GameCode.GDBarrersObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStoneObjects3Objects = Hashtable.newFrom({"Stone": gdjs.GameCode.GDStoneObjects3});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Arbusto"), gdjs.GameCode.GDArbustoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects3);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bedrock"), gdjs.GameCode.GDBedrockObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.GameCode.GDDirtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Glass"), gdjs.GameCode.GDGlassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.GameCode.GDGrassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.GameCode.GDStoneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.GameCode.GDStone2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Tronco"), gdjs.GameCode.GDTroncoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wood1"), gdjs.GameCode.GDWood1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Wood2"), gdjs.GameCode.GDWood2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBarObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBarObjects3[i].getBehavior("Animation").getAnimationIndex() == 4 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBarObjects3[k] = gdjs.GameCode.GDBarObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBarObjects3.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16416004);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDArbustoObjects3 */
/* Reuse gdjs.GameCode.GDBarrersObjects3 */
/* Reuse gdjs.GameCode.GDBedrockObjects3 */
/* Reuse gdjs.GameCode.GDDirtObjects3 */
/* Reuse gdjs.GameCode.GDGlassObjects3 */
/* Reuse gdjs.GameCode.GDGrassObjects3 */
/* Reuse gdjs.GameCode.GDStoneObjects3 */
/* Reuse gdjs.GameCode.GDStone2Objects3 */
/* Reuse gdjs.GameCode.GDTroncoObjects3 */
/* Reuse gdjs.GameCode.GDWood1Objects3 */
/* Reuse gdjs.GameCode.GDWood2Objects3 */
{gdjs.evtsExt__Create3D__Function.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStoneObjects3Objects, "Object3D", (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getX()) :gdjs.GameCode.GDWood1Objects3[0].getX()) :gdjs.GameCode.GDWood2Objects3[0].getX()) :gdjs.GameCode.GDStoneObjects3[0].getX()) :gdjs.GameCode.GDGrassObjects3[0].getX()) :gdjs.GameCode.GDTroncoObjects3[0].getX()) :gdjs.GameCode.GDArbustoObjects3[0].getX()) :gdjs.GameCode.GDStone2Objects3[0].getX()) :gdjs.GameCode.GDGlassObjects3[0].getX()) :gdjs.GameCode.GDBedrockObjects3[0].getX()) :gdjs.GameCode.GDBarrersObjects3[0].getX()) + (gdjs.evtsExt__Raycaster3D__NormalX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getY()) :gdjs.GameCode.GDWood1Objects3[0].getY()) :gdjs.GameCode.GDWood2Objects3[0].getY()) :gdjs.GameCode.GDStoneObjects3[0].getY()) :gdjs.GameCode.GDGrassObjects3[0].getY()) :gdjs.GameCode.GDTroncoObjects3[0].getY()) :gdjs.GameCode.GDArbustoObjects3[0].getY()) :gdjs.GameCode.GDStone2Objects3[0].getY()) :gdjs.GameCode.GDGlassObjects3[0].getY()) :gdjs.GameCode.GDBedrockObjects3[0].getY()) :gdjs.GameCode.GDBarrersObjects3[0].getY()) + (gdjs.evtsExt__Raycaster3D__NormalY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood1Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStoneObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGrassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDTroncoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDArbustoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStone2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGlassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBedrockObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBarrersObjects3[0].getBehavior("Object3D").getZ()) + (gdjs.evtsExt__Raycaster3D__NormalZ.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects3, "Wood1": gdjs.GameCode.GDWood1Objects3, "Wood2": gdjs.GameCode.GDWood2Objects3, "Stone": gdjs.GameCode.GDStoneObjects3, "Grass": gdjs.GameCode.GDGrassObjects3, "Tronco": gdjs.GameCode.GDTroncoObjects3, "Arbusto": gdjs.GameCode.GDArbustoObjects3, "Stone2": gdjs.GameCode.GDStone2Objects3, "Glass": gdjs.GameCode.GDGlassObjects3, "Bedrock": gdjs.GameCode.GDBedrockObjects3, "Barrers": gdjs.GameCode.GDBarrersObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGrassObjects3Objects = Hashtable.newFrom({"Grass": gdjs.GameCode.GDGrassObjects3});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Arbusto"), gdjs.GameCode.GDArbustoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects3);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bedrock"), gdjs.GameCode.GDBedrockObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.GameCode.GDDirtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Glass"), gdjs.GameCode.GDGlassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.GameCode.GDGrassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.GameCode.GDStoneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.GameCode.GDStone2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Tronco"), gdjs.GameCode.GDTroncoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wood1"), gdjs.GameCode.GDWood1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Wood2"), gdjs.GameCode.GDWood2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBarObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBarObjects3[i].getBehavior("Animation").getAnimationIndex() == 5 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBarObjects3[k] = gdjs.GameCode.GDBarObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBarObjects3.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16419364);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDArbustoObjects3 */
/* Reuse gdjs.GameCode.GDBarrersObjects3 */
/* Reuse gdjs.GameCode.GDBedrockObjects3 */
/* Reuse gdjs.GameCode.GDDirtObjects3 */
/* Reuse gdjs.GameCode.GDGlassObjects3 */
/* Reuse gdjs.GameCode.GDGrassObjects3 */
/* Reuse gdjs.GameCode.GDStoneObjects3 */
/* Reuse gdjs.GameCode.GDStone2Objects3 */
/* Reuse gdjs.GameCode.GDTroncoObjects3 */
/* Reuse gdjs.GameCode.GDWood1Objects3 */
/* Reuse gdjs.GameCode.GDWood2Objects3 */
{gdjs.evtsExt__Create3D__Function.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGrassObjects3Objects, "Object3D", (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getX()) :gdjs.GameCode.GDWood1Objects3[0].getX()) :gdjs.GameCode.GDWood2Objects3[0].getX()) :gdjs.GameCode.GDStoneObjects3[0].getX()) :gdjs.GameCode.GDGrassObjects3[0].getX()) :gdjs.GameCode.GDTroncoObjects3[0].getX()) :gdjs.GameCode.GDArbustoObjects3[0].getX()) :gdjs.GameCode.GDStone2Objects3[0].getX()) :gdjs.GameCode.GDGlassObjects3[0].getX()) :gdjs.GameCode.GDBedrockObjects3[0].getX()) :gdjs.GameCode.GDBarrersObjects3[0].getX()) + (gdjs.evtsExt__Raycaster3D__NormalX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getY()) :gdjs.GameCode.GDWood1Objects3[0].getY()) :gdjs.GameCode.GDWood2Objects3[0].getY()) :gdjs.GameCode.GDStoneObjects3[0].getY()) :gdjs.GameCode.GDGrassObjects3[0].getY()) :gdjs.GameCode.GDTroncoObjects3[0].getY()) :gdjs.GameCode.GDArbustoObjects3[0].getY()) :gdjs.GameCode.GDStone2Objects3[0].getY()) :gdjs.GameCode.GDGlassObjects3[0].getY()) :gdjs.GameCode.GDBedrockObjects3[0].getY()) :gdjs.GameCode.GDBarrersObjects3[0].getY()) + (gdjs.evtsExt__Raycaster3D__NormalY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood1Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStoneObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGrassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDTroncoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDArbustoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStone2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGlassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBedrockObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBarrersObjects3[0].getBehavior("Object3D").getZ()) + (gdjs.evtsExt__Raycaster3D__NormalZ.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects3, "Wood1": gdjs.GameCode.GDWood1Objects3, "Wood2": gdjs.GameCode.GDWood2Objects3, "Stone": gdjs.GameCode.GDStoneObjects3, "Grass": gdjs.GameCode.GDGrassObjects3, "Tronco": gdjs.GameCode.GDTroncoObjects3, "Arbusto": gdjs.GameCode.GDArbustoObjects3, "Stone2": gdjs.GameCode.GDStone2Objects3, "Glass": gdjs.GameCode.GDGlassObjects3, "Bedrock": gdjs.GameCode.GDBedrockObjects3, "Barrers": gdjs.GameCode.GDBarrersObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTroncoObjects3Objects = Hashtable.newFrom({"Tronco": gdjs.GameCode.GDTroncoObjects3});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Arbusto"), gdjs.GameCode.GDArbustoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects3);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bedrock"), gdjs.GameCode.GDBedrockObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.GameCode.GDDirtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Glass"), gdjs.GameCode.GDGlassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.GameCode.GDGrassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.GameCode.GDStoneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.GameCode.GDStone2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Tronco"), gdjs.GameCode.GDTroncoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wood1"), gdjs.GameCode.GDWood1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Wood2"), gdjs.GameCode.GDWood2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBarObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBarObjects3[i].getBehavior("Animation").getAnimationIndex() == 6 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBarObjects3[k] = gdjs.GameCode.GDBarObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBarObjects3.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16422756);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDArbustoObjects3 */
/* Reuse gdjs.GameCode.GDBarrersObjects3 */
/* Reuse gdjs.GameCode.GDBedrockObjects3 */
/* Reuse gdjs.GameCode.GDDirtObjects3 */
/* Reuse gdjs.GameCode.GDGlassObjects3 */
/* Reuse gdjs.GameCode.GDGrassObjects3 */
/* Reuse gdjs.GameCode.GDStoneObjects3 */
/* Reuse gdjs.GameCode.GDStone2Objects3 */
/* Reuse gdjs.GameCode.GDTroncoObjects3 */
/* Reuse gdjs.GameCode.GDWood1Objects3 */
/* Reuse gdjs.GameCode.GDWood2Objects3 */
{gdjs.evtsExt__Create3D__Function.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTroncoObjects3Objects, "Object3D", (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getX()) :gdjs.GameCode.GDWood1Objects3[0].getX()) :gdjs.GameCode.GDWood2Objects3[0].getX()) :gdjs.GameCode.GDStoneObjects3[0].getX()) :gdjs.GameCode.GDGrassObjects3[0].getX()) :gdjs.GameCode.GDTroncoObjects3[0].getX()) :gdjs.GameCode.GDArbustoObjects3[0].getX()) :gdjs.GameCode.GDStone2Objects3[0].getX()) :gdjs.GameCode.GDGlassObjects3[0].getX()) :gdjs.GameCode.GDBedrockObjects3[0].getX()) :gdjs.GameCode.GDBarrersObjects3[0].getX()) + (gdjs.evtsExt__Raycaster3D__NormalX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getY()) :gdjs.GameCode.GDWood1Objects3[0].getY()) :gdjs.GameCode.GDWood2Objects3[0].getY()) :gdjs.GameCode.GDStoneObjects3[0].getY()) :gdjs.GameCode.GDGrassObjects3[0].getY()) :gdjs.GameCode.GDTroncoObjects3[0].getY()) :gdjs.GameCode.GDArbustoObjects3[0].getY()) :gdjs.GameCode.GDStone2Objects3[0].getY()) :gdjs.GameCode.GDGlassObjects3[0].getY()) :gdjs.GameCode.GDBedrockObjects3[0].getY()) :gdjs.GameCode.GDBarrersObjects3[0].getY()) + (gdjs.evtsExt__Raycaster3D__NormalY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood1Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStoneObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGrassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDTroncoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDArbustoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStone2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGlassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBedrockObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBarrersObjects3[0].getBehavior("Object3D").getZ()) + (gdjs.evtsExt__Raycaster3D__NormalZ.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects3, "Wood1": gdjs.GameCode.GDWood1Objects3, "Wood2": gdjs.GameCode.GDWood2Objects3, "Stone": gdjs.GameCode.GDStoneObjects3, "Grass": gdjs.GameCode.GDGrassObjects3, "Tronco": gdjs.GameCode.GDTroncoObjects3, "Arbusto": gdjs.GameCode.GDArbustoObjects3, "Stone2": gdjs.GameCode.GDStone2Objects3, "Glass": gdjs.GameCode.GDGlassObjects3, "Bedrock": gdjs.GameCode.GDBedrockObjects3, "Barrers": gdjs.GameCode.GDBarrersObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDArbustoObjects3Objects = Hashtable.newFrom({"Arbusto": gdjs.GameCode.GDArbustoObjects3});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Arbusto"), gdjs.GameCode.GDArbustoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects3);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bedrock"), gdjs.GameCode.GDBedrockObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.GameCode.GDDirtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Glass"), gdjs.GameCode.GDGlassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.GameCode.GDGrassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.GameCode.GDStoneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.GameCode.GDStone2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Tronco"), gdjs.GameCode.GDTroncoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wood1"), gdjs.GameCode.GDWood1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Wood2"), gdjs.GameCode.GDWood2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBarObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBarObjects3[i].getBehavior("Animation").getAnimationIndex() == 7 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBarObjects3[k] = gdjs.GameCode.GDBarObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBarObjects3.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16426116);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDArbustoObjects3 */
/* Reuse gdjs.GameCode.GDBarrersObjects3 */
/* Reuse gdjs.GameCode.GDBedrockObjects3 */
/* Reuse gdjs.GameCode.GDDirtObjects3 */
/* Reuse gdjs.GameCode.GDGlassObjects3 */
/* Reuse gdjs.GameCode.GDGrassObjects3 */
/* Reuse gdjs.GameCode.GDStoneObjects3 */
/* Reuse gdjs.GameCode.GDStone2Objects3 */
/* Reuse gdjs.GameCode.GDTroncoObjects3 */
/* Reuse gdjs.GameCode.GDWood1Objects3 */
/* Reuse gdjs.GameCode.GDWood2Objects3 */
{gdjs.evtsExt__Create3D__Function.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDArbustoObjects3Objects, "Object3D", (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getX()) :gdjs.GameCode.GDWood1Objects3[0].getX()) :gdjs.GameCode.GDWood2Objects3[0].getX()) :gdjs.GameCode.GDStoneObjects3[0].getX()) :gdjs.GameCode.GDGrassObjects3[0].getX()) :gdjs.GameCode.GDTroncoObjects3[0].getX()) :gdjs.GameCode.GDArbustoObjects3[0].getX()) :gdjs.GameCode.GDStone2Objects3[0].getX()) :gdjs.GameCode.GDGlassObjects3[0].getX()) :gdjs.GameCode.GDBedrockObjects3[0].getX()) :gdjs.GameCode.GDBarrersObjects3[0].getX()) + (gdjs.evtsExt__Raycaster3D__NormalX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getY()) :gdjs.GameCode.GDWood1Objects3[0].getY()) :gdjs.GameCode.GDWood2Objects3[0].getY()) :gdjs.GameCode.GDStoneObjects3[0].getY()) :gdjs.GameCode.GDGrassObjects3[0].getY()) :gdjs.GameCode.GDTroncoObjects3[0].getY()) :gdjs.GameCode.GDArbustoObjects3[0].getY()) :gdjs.GameCode.GDStone2Objects3[0].getY()) :gdjs.GameCode.GDGlassObjects3[0].getY()) :gdjs.GameCode.GDBedrockObjects3[0].getY()) :gdjs.GameCode.GDBarrersObjects3[0].getY()) + (gdjs.evtsExt__Raycaster3D__NormalY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood1Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStoneObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGrassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDTroncoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDArbustoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStone2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGlassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBedrockObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBarrersObjects3[0].getBehavior("Object3D").getZ()) + (gdjs.evtsExt__Raycaster3D__NormalZ.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects3, "Wood1": gdjs.GameCode.GDWood1Objects3, "Wood2": gdjs.GameCode.GDWood2Objects3, "Stone": gdjs.GameCode.GDStoneObjects3, "Grass": gdjs.GameCode.GDGrassObjects3, "Tronco": gdjs.GameCode.GDTroncoObjects3, "Arbusto": gdjs.GameCode.GDArbustoObjects3, "Stone2": gdjs.GameCode.GDStone2Objects3, "Glass": gdjs.GameCode.GDGlassObjects3, "Bedrock": gdjs.GameCode.GDBedrockObjects3, "Barrers": gdjs.GameCode.GDBarrersObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStone2Objects3Objects = Hashtable.newFrom({"Stone2": gdjs.GameCode.GDStone2Objects3});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Arbusto"), gdjs.GameCode.GDArbustoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects3);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects3);
gdjs.copyArray(runtimeScene.getObjects("Bedrock"), gdjs.GameCode.GDBedrockObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.GameCode.GDDirtObjects3);
gdjs.copyArray(runtimeScene.getObjects("Glass"), gdjs.GameCode.GDGlassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.GameCode.GDGrassObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.GameCode.GDStoneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.GameCode.GDStone2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Tronco"), gdjs.GameCode.GDTroncoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wood1"), gdjs.GameCode.GDWood1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Wood2"), gdjs.GameCode.GDWood2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects3ObjectsGDgdjs_9546GameCode_9546GDWood1Objects3ObjectsGDgdjs_9546GameCode_9546GDWood2Objects3ObjectsGDgdjs_9546GameCode_9546GDStoneObjects3ObjectsGDgdjs_9546GameCode_9546GDGrassObjects3ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects3ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects3ObjectsGDgdjs_9546GameCode_9546GDStone2Objects3ObjectsGDgdjs_9546GameCode_9546GDGlassObjects3ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects3ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects3Objects, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBarObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBarObjects3[i].getBehavior("Animation").getAnimationIndex() == 8 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBarObjects3[k] = gdjs.GameCode.GDBarObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBarObjects3.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16429476);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDArbustoObjects3 */
/* Reuse gdjs.GameCode.GDBarrersObjects3 */
/* Reuse gdjs.GameCode.GDBedrockObjects3 */
/* Reuse gdjs.GameCode.GDDirtObjects3 */
/* Reuse gdjs.GameCode.GDGlassObjects3 */
/* Reuse gdjs.GameCode.GDGrassObjects3 */
/* Reuse gdjs.GameCode.GDStoneObjects3 */
/* Reuse gdjs.GameCode.GDStone2Objects3 */
/* Reuse gdjs.GameCode.GDTroncoObjects3 */
/* Reuse gdjs.GameCode.GDWood1Objects3 */
/* Reuse gdjs.GameCode.GDWood2Objects3 */
{gdjs.evtsExt__Create3D__Function.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStone2Objects3Objects, "Object3D", (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getX()) :gdjs.GameCode.GDWood1Objects3[0].getX()) :gdjs.GameCode.GDWood2Objects3[0].getX()) :gdjs.GameCode.GDStoneObjects3[0].getX()) :gdjs.GameCode.GDGrassObjects3[0].getX()) :gdjs.GameCode.GDTroncoObjects3[0].getX()) :gdjs.GameCode.GDArbustoObjects3[0].getX()) :gdjs.GameCode.GDStone2Objects3[0].getX()) :gdjs.GameCode.GDGlassObjects3[0].getX()) :gdjs.GameCode.GDBedrockObjects3[0].getX()) :gdjs.GameCode.GDBarrersObjects3[0].getX()) + (gdjs.evtsExt__Raycaster3D__NormalX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getY()) :gdjs.GameCode.GDWood1Objects3[0].getY()) :gdjs.GameCode.GDWood2Objects3[0].getY()) :gdjs.GameCode.GDStoneObjects3[0].getY()) :gdjs.GameCode.GDGrassObjects3[0].getY()) :gdjs.GameCode.GDTroncoObjects3[0].getY()) :gdjs.GameCode.GDArbustoObjects3[0].getY()) :gdjs.GameCode.GDStone2Objects3[0].getY()) :gdjs.GameCode.GDGlassObjects3[0].getY()) :gdjs.GameCode.GDBedrockObjects3[0].getY()) :gdjs.GameCode.GDBarrersObjects3[0].getY()) + (gdjs.evtsExt__Raycaster3D__NormalY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects3.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects3.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects3.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects3.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects3.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects3.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects3.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects3.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects3.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood1Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStoneObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGrassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDTroncoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDArbustoObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStone2Objects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGlassObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBedrockObjects3[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBarrersObjects3[0].getBehavior("Object3D").getZ()) + (gdjs.evtsExt__Raycaster3D__NormalZ.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects2ObjectsGDgdjs_9546GameCode_9546GDWood1Objects2ObjectsGDgdjs_9546GameCode_9546GDWood2Objects2ObjectsGDgdjs_9546GameCode_9546GDStoneObjects2ObjectsGDgdjs_9546GameCode_9546GDGrassObjects2ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects2ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects2ObjectsGDgdjs_9546GameCode_9546GDStone2Objects2ObjectsGDgdjs_9546GameCode_9546GDGlassObjects2ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects2ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects2Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects2, "Wood1": gdjs.GameCode.GDWood1Objects2, "Wood2": gdjs.GameCode.GDWood2Objects2, "Stone": gdjs.GameCode.GDStoneObjects2, "Grass": gdjs.GameCode.GDGrassObjects2, "Tronco": gdjs.GameCode.GDTroncoObjects2, "Arbusto": gdjs.GameCode.GDArbustoObjects2, "Stone2": gdjs.GameCode.GDStone2Objects2, "Glass": gdjs.GameCode.GDGlassObjects2, "Bedrock": gdjs.GameCode.GDBedrockObjects2, "Barrers": gdjs.GameCode.GDBarrersObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGlassObjects2Objects = Hashtable.newFrom({"Glass": gdjs.GameCode.GDGlassObjects2});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Arbusto"), gdjs.GameCode.GDArbustoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bedrock"), gdjs.GameCode.GDBedrockObjects2);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.GameCode.GDDirtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Glass"), gdjs.GameCode.GDGlassObjects2);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.GameCode.GDGrassObjects2);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.GameCode.GDStoneObjects2);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.GameCode.GDStone2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Tronco"), gdjs.GameCode.GDTroncoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wood1"), gdjs.GameCode.GDWood1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Wood2"), gdjs.GameCode.GDWood2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects2ObjectsGDgdjs_9546GameCode_9546GDWood1Objects2ObjectsGDgdjs_9546GameCode_9546GDWood2Objects2ObjectsGDgdjs_9546GameCode_9546GDStoneObjects2ObjectsGDgdjs_9546GameCode_9546GDGrassObjects2ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects2ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects2ObjectsGDgdjs_9546GameCode_9546GDStone2Objects2ObjectsGDgdjs_9546GameCode_9546GDGlassObjects2ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects2ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects2Objects, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBarObjects2[i].getBehavior("Animation").getAnimationIndex() == 9 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBarObjects2[k] = gdjs.GameCode.GDBarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBarObjects2.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16432836);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDArbustoObjects2 */
/* Reuse gdjs.GameCode.GDBarrersObjects2 */
/* Reuse gdjs.GameCode.GDBedrockObjects2 */
/* Reuse gdjs.GameCode.GDDirtObjects2 */
/* Reuse gdjs.GameCode.GDGlassObjects2 */
/* Reuse gdjs.GameCode.GDGrassObjects2 */
/* Reuse gdjs.GameCode.GDStoneObjects2 */
/* Reuse gdjs.GameCode.GDStone2Objects2 */
/* Reuse gdjs.GameCode.GDTroncoObjects2 */
/* Reuse gdjs.GameCode.GDWood1Objects2 */
/* Reuse gdjs.GameCode.GDWood2Objects2 */
{gdjs.evtsExt__Create3D__Function.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGlassObjects2Objects, "Object3D", (( gdjs.GameCode.GDBarrersObjects2.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects2.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects2.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects2.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects2.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects2.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects2.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects2.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects2[0].getX()) :gdjs.GameCode.GDWood1Objects2[0].getX()) :gdjs.GameCode.GDWood2Objects2[0].getX()) :gdjs.GameCode.GDStoneObjects2[0].getX()) :gdjs.GameCode.GDGrassObjects2[0].getX()) :gdjs.GameCode.GDTroncoObjects2[0].getX()) :gdjs.GameCode.GDArbustoObjects2[0].getX()) :gdjs.GameCode.GDStone2Objects2[0].getX()) :gdjs.GameCode.GDGlassObjects2[0].getX()) :gdjs.GameCode.GDBedrockObjects2[0].getX()) :gdjs.GameCode.GDBarrersObjects2[0].getX()) + (gdjs.evtsExt__Raycaster3D__NormalX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects2.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects2.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects2.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects2.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects2.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects2.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects2.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects2.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects2[0].getY()) :gdjs.GameCode.GDWood1Objects2[0].getY()) :gdjs.GameCode.GDWood2Objects2[0].getY()) :gdjs.GameCode.GDStoneObjects2[0].getY()) :gdjs.GameCode.GDGrassObjects2[0].getY()) :gdjs.GameCode.GDTroncoObjects2[0].getY()) :gdjs.GameCode.GDArbustoObjects2[0].getY()) :gdjs.GameCode.GDStone2Objects2[0].getY()) :gdjs.GameCode.GDGlassObjects2[0].getY()) :gdjs.GameCode.GDBedrockObjects2[0].getY()) :gdjs.GameCode.GDBarrersObjects2[0].getY()) + (gdjs.evtsExt__Raycaster3D__NormalY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (( gdjs.GameCode.GDBarrersObjects2.length === 0 ) ? (( gdjs.GameCode.GDBedrockObjects2.length === 0 ) ? (( gdjs.GameCode.GDGlassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStone2Objects2.length === 0 ) ? (( gdjs.GameCode.GDArbustoObjects2.length === 0 ) ? (( gdjs.GameCode.GDTroncoObjects2.length === 0 ) ? (( gdjs.GameCode.GDGrassObjects2.length === 0 ) ? (( gdjs.GameCode.GDStoneObjects2.length === 0 ) ? (( gdjs.GameCode.GDWood2Objects2.length === 0 ) ? (( gdjs.GameCode.GDWood1Objects2.length === 0 ) ? (( gdjs.GameCode.GDDirtObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDirtObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood1Objects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDWood2Objects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStoneObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGrassObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDTroncoObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDArbustoObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDStone2Objects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDGlassObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBedrockObjects2[0].getBehavior("Object3D").getZ()) :gdjs.GameCode.GDBarrersObjects2[0].getBehavior("Object3D").getZ()) + (gdjs.evtsExt__Raycaster3D__NormalZ.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 100), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects1ObjectsGDgdjs_9546GameCode_9546GDWood1Objects1ObjectsGDgdjs_9546GameCode_9546GDWood2Objects1ObjectsGDgdjs_9546GameCode_9546GDStoneObjects1ObjectsGDgdjs_9546GameCode_9546GDGrassObjects1ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects1ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects1ObjectsGDgdjs_9546GameCode_9546GDStone2Objects1ObjectsGDgdjs_9546GameCode_9546GDGlassObjects1ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects1ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects1Objects = Hashtable.newFrom({"Dirt": gdjs.GameCode.GDDirtObjects1, "Wood1": gdjs.GameCode.GDWood1Objects1, "Wood2": gdjs.GameCode.GDWood2Objects1, "Stone": gdjs.GameCode.GDStoneObjects1, "Grass": gdjs.GameCode.GDGrassObjects1, "Tronco": gdjs.GameCode.GDTroncoObjects1, "Arbusto": gdjs.GameCode.GDArbustoObjects1, "Stone2": gdjs.GameCode.GDStone2Objects1, "Glass": gdjs.GameCode.GDGlassObjects1, "Bedrock": gdjs.GameCode.GDBedrockObjects1, "Barrers": gdjs.GameCode.GDBarrersObjects1});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Arbusto"), gdjs.GameCode.GDArbustoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bedrock"), gdjs.GameCode.GDBedrockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.GameCode.GDDirtObjects1);
gdjs.copyArray(runtimeScene.getObjects("Glass"), gdjs.GameCode.GDGlassObjects1);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.GameCode.GDGrassObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.GameCode.GDStoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stone2"), gdjs.GameCode.GDStone2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tronco"), gdjs.GameCode.GDTroncoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wood1"), gdjs.GameCode.GDWood1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wood2"), gdjs.GameCode.GDWood2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Raycaster3D__RaycastFromCameraCenter.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDirtObjects1ObjectsGDgdjs_9546GameCode_9546GDWood1Objects1ObjectsGDgdjs_9546GameCode_9546GDWood2Objects1ObjectsGDgdjs_9546GameCode_9546GDStoneObjects1ObjectsGDgdjs_9546GameCode_9546GDGrassObjects1ObjectsGDgdjs_9546GameCode_9546GDTroncoObjects1ObjectsGDgdjs_9546GameCode_9546GDArbustoObjects1ObjectsGDgdjs_9546GameCode_9546GDStone2Objects1ObjectsGDgdjs_9546GameCode_9546GDGlassObjects1ObjectsGDgdjs_9546GameCode_9546GDBedrockObjects1ObjectsGDgdjs_9546GameCode_9546GDBarrersObjects1Objects, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDArbustoObjects1 */
/* Reuse gdjs.GameCode.GDDirtObjects1 */
/* Reuse gdjs.GameCode.GDGlassObjects1 */
/* Reuse gdjs.GameCode.GDGrassObjects1 */
/* Reuse gdjs.GameCode.GDStoneObjects1 */
/* Reuse gdjs.GameCode.GDStone2Objects1 */
/* Reuse gdjs.GameCode.GDTroncoObjects1 */
/* Reuse gdjs.GameCode.GDWood1Objects1 */
/* Reuse gdjs.GameCode.GDWood2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDDirtObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDirtObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDWood1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDWood1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDWood2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDWood2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDStoneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDStoneObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDGrassObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGrassObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDTroncoObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTroncoObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDArbustoObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDArbustoObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDStone2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDStone2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDGlassObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGlassObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16434988);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16436884);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16437500);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarObjects2[i].getBehavior("Animation").setAnimationIndex(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16438884);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarObjects2[i].getBehavior("Animation").setAnimationIndex(3);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num4");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16439876);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarObjects2[i].getBehavior("Animation").setAnimationIndex(4);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num5");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16440580);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarObjects2[i].getBehavior("Animation").setAnimationIndex(5);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num6");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16441700);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarObjects2[i].getBehavior("Animation").setAnimationIndex(6);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num7");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16443060);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarObjects2[i].getBehavior("Animation").setAnimationIndex(7);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num8");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16443764);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarObjects2[i].getBehavior("Animation").setAnimationIndex(8);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num9");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16445124);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarObjects2[i].getBehavior("Animation").setAnimationIndex(9);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bar"), gdjs.GameCode.GDBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Barrers"), gdjs.GameCode.GDBarrersObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBarObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBarObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBarrersObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBarrersObjects1[i].hide();
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


{


gdjs.GameCode.eventsList13(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDDirtObjects1.length = 0;
gdjs.GameCode.GDDirtObjects2.length = 0;
gdjs.GameCode.GDDirtObjects3.length = 0;
gdjs.GameCode.GDDirtObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDCameraObjects1.length = 0;
gdjs.GameCode.GDCameraObjects2.length = 0;
gdjs.GameCode.GDCameraObjects3.length = 0;
gdjs.GameCode.GDCameraObjects4.length = 0;
gdjs.GameCode.GDCursorObjects1.length = 0;
gdjs.GameCode.GDCursorObjects2.length = 0;
gdjs.GameCode.GDCursorObjects3.length = 0;
gdjs.GameCode.GDCursorObjects4.length = 0;
gdjs.GameCode.GDBarObjects1.length = 0;
gdjs.GameCode.GDBarObjects2.length = 0;
gdjs.GameCode.GDBarObjects3.length = 0;
gdjs.GameCode.GDBarObjects4.length = 0;
gdjs.GameCode.GDWood1Objects1.length = 0;
gdjs.GameCode.GDWood1Objects2.length = 0;
gdjs.GameCode.GDWood1Objects3.length = 0;
gdjs.GameCode.GDWood1Objects4.length = 0;
gdjs.GameCode.GDWood2Objects1.length = 0;
gdjs.GameCode.GDWood2Objects2.length = 0;
gdjs.GameCode.GDWood2Objects3.length = 0;
gdjs.GameCode.GDWood2Objects4.length = 0;
gdjs.GameCode.GDStoneObjects1.length = 0;
gdjs.GameCode.GDStoneObjects2.length = 0;
gdjs.GameCode.GDStoneObjects3.length = 0;
gdjs.GameCode.GDStoneObjects4.length = 0;
gdjs.GameCode.GDGrassObjects1.length = 0;
gdjs.GameCode.GDGrassObjects2.length = 0;
gdjs.GameCode.GDGrassObjects3.length = 0;
gdjs.GameCode.GDGrassObjects4.length = 0;
gdjs.GameCode.GDTroncoObjects1.length = 0;
gdjs.GameCode.GDTroncoObjects2.length = 0;
gdjs.GameCode.GDTroncoObjects3.length = 0;
gdjs.GameCode.GDTroncoObjects4.length = 0;
gdjs.GameCode.GDArbustoObjects1.length = 0;
gdjs.GameCode.GDArbustoObjects2.length = 0;
gdjs.GameCode.GDArbustoObjects3.length = 0;
gdjs.GameCode.GDArbustoObjects4.length = 0;
gdjs.GameCode.GDStone2Objects1.length = 0;
gdjs.GameCode.GDStone2Objects2.length = 0;
gdjs.GameCode.GDStone2Objects3.length = 0;
gdjs.GameCode.GDStone2Objects4.length = 0;
gdjs.GameCode.GDGlassObjects1.length = 0;
gdjs.GameCode.GDGlassObjects2.length = 0;
gdjs.GameCode.GDGlassObjects3.length = 0;
gdjs.GameCode.GDGlassObjects4.length = 0;
gdjs.GameCode.GDBedrockObjects1.length = 0;
gdjs.GameCode.GDBedrockObjects2.length = 0;
gdjs.GameCode.GDBedrockObjects3.length = 0;
gdjs.GameCode.GDBedrockObjects4.length = 0;
gdjs.GameCode.GDBarrersObjects1.length = 0;
gdjs.GameCode.GDBarrersObjects2.length = 0;
gdjs.GameCode.GDBarrersObjects3.length = 0;
gdjs.GameCode.GDBarrersObjects4.length = 0;
gdjs.GameCode.GDmanoObjects1.length = 0;
gdjs.GameCode.GDmanoObjects2.length = 0;
gdjs.GameCode.GDmanoObjects3.length = 0;
gdjs.GameCode.GDmanoObjects4.length = 0;

gdjs.GameCode.eventsList14(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
