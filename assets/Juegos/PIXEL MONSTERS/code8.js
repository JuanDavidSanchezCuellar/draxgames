gdjs.miganda_32shhoterCode = {};
gdjs.miganda_32shhoterCode.GDATRASObjects1= [];
gdjs.miganda_32shhoterCode.GDATRASObjects2= [];
gdjs.miganda_32shhoterCode.GDATRASObjects3= [];
gdjs.miganda_32shhoterCode.GDcroshairObjects1= [];
gdjs.miganda_32shhoterCode.GDcroshairObjects2= [];
gdjs.miganda_32shhoterCode.GDcroshairObjects3= [];
gdjs.miganda_32shhoterCode.GDcursorObjects1= [];
gdjs.miganda_32shhoterCode.GDcursorObjects2= [];
gdjs.miganda_32shhoterCode.GDcursorObjects3= [];
gdjs.miganda_32shhoterCode.GDmsObjects1= [];
gdjs.miganda_32shhoterCode.GDmsObjects2= [];
gdjs.miganda_32shhoterCode.GDmsObjects3= [];
gdjs.miganda_32shhoterCode.GDNewSpriteObjects1= [];
gdjs.miganda_32shhoterCode.GDNewSpriteObjects2= [];
gdjs.miganda_32shhoterCode.GDNewSpriteObjects3= [];

gdjs.miganda_32shhoterCode.conditionTrue_0 = {val:false};
gdjs.miganda_32shhoterCode.condition0IsTrue_0 = {val:false};
gdjs.miganda_32shhoterCode.condition1IsTrue_0 = {val:false};


gdjs.miganda_32shhoterCode.mapOfGDgdjs_46miganda_9532shhoterCode_46GDcursorObjects2Objects = Hashtable.newFrom({"cursor": gdjs.miganda_32shhoterCode.GDcursorObjects2});
gdjs.miganda_32shhoterCode.eventsList0 = function(runtimeScene) {

{


gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = false;
{
gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.miganda_32shhoterCode.condition0IsTrue_0.val) {
gdjs.miganda_32shhoterCode.GDcursorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.miganda_32shhoterCode.mapOfGDgdjs_46miganda_9532shhoterCode_46GDcursorObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.miganda_32shhoterCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.miganda_32shhoterCode.GDcursorObjects2[i].setZOrder(99999);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.miganda_32shhoterCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.miganda_32shhoterCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.miganda_32shhoterCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


};gdjs.miganda_32shhoterCode.eventsList1 = function(runtimeScene) {

{


gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = false;
{
gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.miganda_32shhoterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.miganda_32shhoterCode.GDcursorObjects2);
{for(var i = 0, len = gdjs.miganda_32shhoterCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.miganda_32shhoterCode.GDcursorObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = false;
{
gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left"));
}if (gdjs.miganda_32shhoterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.miganda_32shhoterCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.miganda_32shhoterCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.miganda_32shhoterCode.GDcursorObjects1[i].setAnimation(0);
}
}}

}


};gdjs.miganda_32shhoterCode.eventsList2 = function(runtimeScene) {

{


gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = false;
{
gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.miganda_32shhoterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ms");
}}

}


{


gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = false;
{
gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ms") >= 1;
}if (gdjs.miganda_32shhoterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.miganda_32shhoterCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("ms"), gdjs.miganda_32shhoterCode.GDmsObjects1);
{for(var i = 0, len = gdjs.miganda_32shhoterCode.GDmsObjects1.length ;i < len;++i) {
    gdjs.miganda_32shhoterCode.GDmsObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.miganda_32shhoterCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.miganda_32shhoterCode.GDNewSpriteObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = false;
{
gdjs.miganda_32shhoterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ms") >= 1.5;
}if (gdjs.miganda_32shhoterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "elegir personaje", false);
}}

}


{


gdjs.miganda_32shhoterCode.eventsList0(runtimeScene);
}


{


gdjs.miganda_32shhoterCode.eventsList1(runtimeScene);
}


{


{
}

}


};

gdjs.miganda_32shhoterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.miganda_32shhoterCode.GDATRASObjects1.length = 0;
gdjs.miganda_32shhoterCode.GDATRASObjects2.length = 0;
gdjs.miganda_32shhoterCode.GDATRASObjects3.length = 0;
gdjs.miganda_32shhoterCode.GDcroshairObjects1.length = 0;
gdjs.miganda_32shhoterCode.GDcroshairObjects2.length = 0;
gdjs.miganda_32shhoterCode.GDcroshairObjects3.length = 0;
gdjs.miganda_32shhoterCode.GDcursorObjects1.length = 0;
gdjs.miganda_32shhoterCode.GDcursorObjects2.length = 0;
gdjs.miganda_32shhoterCode.GDcursorObjects3.length = 0;
gdjs.miganda_32shhoterCode.GDmsObjects1.length = 0;
gdjs.miganda_32shhoterCode.GDmsObjects2.length = 0;
gdjs.miganda_32shhoterCode.GDmsObjects3.length = 0;
gdjs.miganda_32shhoterCode.GDNewSpriteObjects1.length = 0;
gdjs.miganda_32shhoterCode.GDNewSpriteObjects2.length = 0;
gdjs.miganda_32shhoterCode.GDNewSpriteObjects3.length = 0;

gdjs.miganda_32shhoterCode.eventsList2(runtimeScene);
return;

}

gdjs['miganda_32shhoterCode'] = gdjs.miganda_32shhoterCode;
