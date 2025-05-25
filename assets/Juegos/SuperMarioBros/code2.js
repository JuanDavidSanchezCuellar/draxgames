gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDInicioObjects1= [];
gdjs.MenuCode.GDInicioObjects2= [];
gdjs.MenuCode.GDpisoObjects1= [];
gdjs.MenuCode.GDpisoObjects2= [];
gdjs.MenuCode.GDPLayObjects1= [];
gdjs.MenuCode.GDPLayObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPLayObjects1Objects = Hashtable.newFrom({"PLay": gdjs.MenuCode.GDPLayObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPLayObjects1Objects = Hashtable.newFrom({"PLay": gdjs.MenuCode.GDPLayObjects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PLay"), gdjs.MenuCode.GDPLayObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDPLayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPLayObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PLay"), gdjs.MenuCode.GDPLayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPLayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inicio"), gdjs.MenuCode.GDInicioObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDInicioObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDInicioObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PLay"), gdjs.MenuCode.GDPLayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPLayObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inicio"), gdjs.MenuCode.GDInicioObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDInicioObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDInicioObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDInicioObjects1.length = 0;
gdjs.MenuCode.GDInicioObjects2.length = 0;
gdjs.MenuCode.GDpisoObjects1.length = 0;
gdjs.MenuCode.GDpisoObjects2.length = 0;
gdjs.MenuCode.GDPLayObjects1.length = 0;
gdjs.MenuCode.GDPLayObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
