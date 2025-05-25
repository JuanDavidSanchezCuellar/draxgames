gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDZOMBIESObjects1= [];
gdjs.MenuCode.GDZOMBIESObjects2= [];
gdjs.MenuCode.GDZOMBIEObjects1= [];
gdjs.MenuCode.GDZOMBIEObjects2= [];
gdjs.MenuCode.GDTITLEObjects1= [];
gdjs.MenuCode.GDTITLEObjects2= [];
gdjs.MenuCode.GDSOMBRAObjects1= [];
gdjs.MenuCode.GDSOMBRAObjects2= [];
gdjs.MenuCode.GDPRACTICAObjects1= [];
gdjs.MenuCode.GDPRACTICAObjects2= [];
gdjs.MenuCode.GDCURSORObjects1= [];
gdjs.MenuCode.GDCURSORObjects2= [];
gdjs.MenuCode.GDByJuandraxObjects1= [];
gdjs.MenuCode.GDByJuandraxObjects2= [];
gdjs.MenuCode.GDfondObjects1= [];
gdjs.MenuCode.GDfondObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDZOMBIEObjects1Objects = Hashtable.newFrom({"ZOMBIE": gdjs.MenuCode.GDZOMBIEObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDZOMBIEObjects1Objects = Hashtable.newFrom({"ZOMBIE": gdjs.MenuCode.GDZOMBIEObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDZOMBIESObjects1Objects = Hashtable.newFrom({"ZOMBIES": gdjs.MenuCode.GDZOMBIESObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16016412);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "GunSound", false, gdjs.randomFloatInRange(50, 65), gdjs.randomFloatInRange(0.7, 1));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Zombies", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDZOMBIESObjects1Objects = Hashtable.newFrom({"ZOMBIES": gdjs.MenuCode.GDZOMBIESObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDZOMBIESObjects1Objects = Hashtable.newFrom({"ZOMBIES": gdjs.MenuCode.GDZOMBIESObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPRACTICAObjects1Objects = Hashtable.newFrom({"PRACTICA": gdjs.MenuCode.GDPRACTICAObjects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16019732);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Zona de tiro", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "GunSound", false, gdjs.randomFloatInRange(50, 65), gdjs.randomFloatInRange(0.7, 1));
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPRACTICAObjects1Objects = Hashtable.newFrom({"PRACTICA": gdjs.MenuCode.GDPRACTICAObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPRACTICAObjects1Objects = Hashtable.newFrom({"PRACTICA": gdjs.MenuCode.GDPRACTICAObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDCURSORObjects1Objects = Hashtable.newFrom({"CURSOR": gdjs.MenuCode.GDCURSORObjects1});
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("ZOMBIE"), gdjs.MenuCode.GDZOMBIEObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDZOMBIEObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16013068);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDZOMBIEObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDZOMBIEObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDZOMBIEObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.2, 1, -(2), 0, 10, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Zombie Roar Sound Effect (mp3cut.net).mp3", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZOMBIE"), gdjs.MenuCode.GDZOMBIEObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDZOMBIEObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDZOMBIEObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDZOMBIEObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDZOMBIEObjects1[i].getBehavior("ShakeObject_PositionAngleScale").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ZOMBIES"), gdjs.MenuCode.GDZOMBIESObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDZOMBIESObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDZOMBIESObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDZOMBIESObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDZOMBIESObjects1[i].setColor("255;0;0");
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZOMBIES"), gdjs.MenuCode.GDZOMBIESObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDZOMBIESObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16017260);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "a5c1574d9347ce54e85312912e560c2b0f840f16a936d12a0fa5c5fe2bd578df_Walk_09.wav", false, 100, 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZOMBIES"), gdjs.MenuCode.GDZOMBIESObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDZOMBIESObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDZOMBIESObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDZOMBIESObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDZOMBIESObjects1[i].setColor("255;255;255");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PRACTICA"), gdjs.MenuCode.GDPRACTICAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPRACTICAObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDPRACTICAObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPRACTICAObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPRACTICAObjects1[i].setColor("255;0;0");
}
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PRACTICA"), gdjs.MenuCode.GDPRACTICAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPRACTICAObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16021004);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "a5c1574d9347ce54e85312912e560c2b0f840f16a936d12a0fa5c5fe2bd578df_Walk_09.wav", false, 100, 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PRACTICA"), gdjs.MenuCode.GDPRACTICAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPRACTICAObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDPRACTICAObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPRACTICAObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPRACTICAObjects1[i].setColor("255;255;255");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16022828);
}
}
if (isConditionTrue_0) {
gdjs.MenuCode.GDCURSORObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDCURSORObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.MenuCode.GDCURSORObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCURSORObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "5a4090e69f77a0e9c3d5c48043175cd1d322a52c702428a784878cf9e946bd86_Halloween Theme 1.aac", true, 50, 1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtsExt__MousePointerLock__ExitPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SOMBRA"), gdjs.MenuCode.GDSOMBRAObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSOMBRAObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSOMBRAObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDZOMBIESObjects1.length = 0;
gdjs.MenuCode.GDZOMBIESObjects2.length = 0;
gdjs.MenuCode.GDZOMBIEObjects1.length = 0;
gdjs.MenuCode.GDZOMBIEObjects2.length = 0;
gdjs.MenuCode.GDTITLEObjects1.length = 0;
gdjs.MenuCode.GDTITLEObjects2.length = 0;
gdjs.MenuCode.GDSOMBRAObjects1.length = 0;
gdjs.MenuCode.GDSOMBRAObjects2.length = 0;
gdjs.MenuCode.GDPRACTICAObjects1.length = 0;
gdjs.MenuCode.GDPRACTICAObjects2.length = 0;
gdjs.MenuCode.GDCURSORObjects1.length = 0;
gdjs.MenuCode.GDCURSORObjects2.length = 0;
gdjs.MenuCode.GDByJuandraxObjects1.length = 0;
gdjs.MenuCode.GDByJuandraxObjects2.length = 0;
gdjs.MenuCode.GDfondObjects1.length = 0;
gdjs.MenuCode.GDfondObjects2.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
