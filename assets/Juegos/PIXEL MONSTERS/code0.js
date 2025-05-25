gdjs.introCode = {};
gdjs.introCode.GDATRASObjects1= [];
gdjs.introCode.GDATRASObjects2= [];
gdjs.introCode.GDATRASObjects3= [];
gdjs.introCode.GDcroshairObjects1= [];
gdjs.introCode.GDcroshairObjects2= [];
gdjs.introCode.GDcroshairObjects3= [];
gdjs.introCode.GDcursorObjects1= [];
gdjs.introCode.GDcursorObjects2= [];
gdjs.introCode.GDcursorObjects3= [];
gdjs.introCode.GDintroObjects1= [];
gdjs.introCode.GDintroObjects2= [];
gdjs.introCode.GDintroObjects3= [];
gdjs.introCode.GDMergedFullBackgroundObjects1= [];
gdjs.introCode.GDMergedFullBackgroundObjects2= [];
gdjs.introCode.GDMergedFullBackgroundObjects3= [];

gdjs.introCode.conditionTrue_0 = {val:false};
gdjs.introCode.condition0IsTrue_0 = {val:false};
gdjs.introCode.condition1IsTrue_0 = {val:false};


gdjs.introCode.mapOfGDgdjs_46introCode_46GDcursorObjects2Objects = Hashtable.newFrom({"cursor": gdjs.introCode.GDcursorObjects2});
gdjs.introCode.eventsList0 = function(runtimeScene) {

{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.introCode.GDcursorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.introCode.mapOfGDgdjs_46introCode_46GDcursorObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.introCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects2[i].setZOrder(99999);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.introCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.introCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


};gdjs.introCode.eventsList1 = function(runtimeScene) {

{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.introCode.GDcursorObjects2);
{for(var i = 0, len = gdjs.introCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left"));
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.introCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.introCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects1[i].setAnimation(0);
}
}}

}


};gdjs.introCode.eventsList2 = function(runtimeScene) {

{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.introCode.GDintroObjects1);
{for(var i = 0, len = gdjs.introCode.GDintroObjects1.length ;i < len;++i) {
    gdjs.introCode.GDintroObjects1[i].play();
}
}}

}


{


gdjs.introCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.introCode.GDintroObjects1);

gdjs.introCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.introCode.GDintroObjects1.length;i<l;++i) {
    if ( gdjs.introCode.GDintroObjects1[i].isEnded() ) {
        gdjs.introCode.condition0IsTrue_0.val = true;
        gdjs.introCode.GDintroObjects1[k] = gdjs.introCode.GDintroObjects1[i];
        ++k;
    }
}
gdjs.introCode.GDintroObjects1.length = k;}if (gdjs.introCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "miganda shhoter", false);
}}

}


{


gdjs.introCode.eventsList1(runtimeScene);
}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDATRASObjects1.length = 0;
gdjs.introCode.GDATRASObjects2.length = 0;
gdjs.introCode.GDATRASObjects3.length = 0;
gdjs.introCode.GDcroshairObjects1.length = 0;
gdjs.introCode.GDcroshairObjects2.length = 0;
gdjs.introCode.GDcroshairObjects3.length = 0;
gdjs.introCode.GDcursorObjects1.length = 0;
gdjs.introCode.GDcursorObjects2.length = 0;
gdjs.introCode.GDcursorObjects3.length = 0;
gdjs.introCode.GDintroObjects1.length = 0;
gdjs.introCode.GDintroObjects2.length = 0;
gdjs.introCode.GDintroObjects3.length = 0;
gdjs.introCode.GDMergedFullBackgroundObjects1.length = 0;
gdjs.introCode.GDMergedFullBackgroundObjects2.length = 0;
gdjs.introCode.GDMergedFullBackgroundObjects3.length = 0;

gdjs.introCode.eventsList2(runtimeScene);
return;

}

gdjs['introCode'] = gdjs.introCode;
