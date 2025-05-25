gdjs.MenuCode = {};
gdjs.MenuCode.GDFondObjects1= [];
gdjs.MenuCode.GDFondObjects2= [];
gdjs.MenuCode.GDFondObjects3= [];
gdjs.MenuCode.GDLogObjects1= [];
gdjs.MenuCode.GDLogObjects2= [];
gdjs.MenuCode.GDLogObjects3= [];
gdjs.MenuCode.GDSingleObjects1= [];
gdjs.MenuCode.GDSingleObjects2= [];
gdjs.MenuCode.GDSingleObjects3= [];
gdjs.MenuCode.GDsalirObjects1= [];
gdjs.MenuCode.GDsalirObjects2= [];
gdjs.MenuCode.GDsalirObjects3= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSingleObjects2Objects = Hashtable.newFrom({"Single": gdjs.MenuCode.GDSingleObjects2});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17016956);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "b269d9a0a2e04d9b928d91cf538a30732681a119260676abf93ccb8e001bee8e_No Ammo.aac", false, 100, 1);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSingleObjects2Objects = Hashtable.newFrom({"Single": gdjs.MenuCode.GDSingleObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSingleObjects1Objects = Hashtable.newFrom({"Single": gdjs.MenuCode.GDSingleObjects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Single"), gdjs.MenuCode.GDSingleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSingleObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDSingleObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDSingleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSingleObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Single"), gdjs.MenuCode.GDSingleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSingleObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17017492);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "1d25d4838e2dcd4b481e4a251664ece92f5a40c72e8ece6cfe58efb6e56cf22f_Hard_Run_07.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Single"), gdjs.MenuCode.GDSingleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSingleObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDSingleObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSingleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSingleObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDsalirObjects2Objects = Hashtable.newFrom({"salir": gdjs.MenuCode.GDsalirObjects2});
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17020476);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtTools.sound.playSound(runtimeScene, "b269d9a0a2e04d9b928d91cf538a30732681a119260676abf93ccb8e001bee8e_No Ammo.aac", false, 100, 1);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDsalirObjects2Objects = Hashtable.newFrom({"salir": gdjs.MenuCode.GDsalirObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDsalirObjects1Objects = Hashtable.newFrom({"salir": gdjs.MenuCode.GDsalirObjects1});
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.MenuCode.GDsalirObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDsalirObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDsalirObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDsalirObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDsalirObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.MenuCode.GDsalirObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDsalirObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17021428);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "1d25d4838e2dcd4b481e4a251664ece92f5a40c72e8ece6cfe58efb6e56cf22f_Hard_Run_07.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("salir"), gdjs.MenuCode.GDsalirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDsalirObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDsalirObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDsalirObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDsalirObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fond"), gdjs.MenuCode.GDFondObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDFondObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFondObjects1[i].play();
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.MenuCode.eventsList1(runtimeScene);
}


{


gdjs.MenuCode.eventsList3(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDFondObjects1.length = 0;
gdjs.MenuCode.GDFondObjects2.length = 0;
gdjs.MenuCode.GDFondObjects3.length = 0;
gdjs.MenuCode.GDLogObjects1.length = 0;
gdjs.MenuCode.GDLogObjects2.length = 0;
gdjs.MenuCode.GDLogObjects3.length = 0;
gdjs.MenuCode.GDSingleObjects1.length = 0;
gdjs.MenuCode.GDSingleObjects2.length = 0;
gdjs.MenuCode.GDSingleObjects3.length = 0;
gdjs.MenuCode.GDsalirObjects1.length = 0;
gdjs.MenuCode.GDsalirObjects2.length = 0;
gdjs.MenuCode.GDsalirObjects3.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
