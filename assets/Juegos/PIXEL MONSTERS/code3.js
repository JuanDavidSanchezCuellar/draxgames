gdjs.StartMenuCode = {};
gdjs.StartMenuCode.GDATRASObjects1= [];
gdjs.StartMenuCode.GDATRASObjects2= [];
gdjs.StartMenuCode.GDATRASObjects3= [];
gdjs.StartMenuCode.GDATRASObjects4= [];
gdjs.StartMenuCode.GDcroshairObjects1= [];
gdjs.StartMenuCode.GDcroshairObjects2= [];
gdjs.StartMenuCode.GDcroshairObjects3= [];
gdjs.StartMenuCode.GDcroshairObjects4= [];
gdjs.StartMenuCode.GDcursorObjects1= [];
gdjs.StartMenuCode.GDcursorObjects2= [];
gdjs.StartMenuCode.GDcursorObjects3= [];
gdjs.StartMenuCode.GDcursorObjects4= [];
gdjs.StartMenuCode.GDReset_95TimerObjects1= [];
gdjs.StartMenuCode.GDReset_95TimerObjects2= [];
gdjs.StartMenuCode.GDReset_95TimerObjects3= [];
gdjs.StartMenuCode.GDReset_95TimerObjects4= [];
gdjs.StartMenuCode.GDReset_95ButtonObjects1= [];
gdjs.StartMenuCode.GDReset_95ButtonObjects2= [];
gdjs.StartMenuCode.GDReset_95ButtonObjects3= [];
gdjs.StartMenuCode.GDReset_95ButtonObjects4= [];

gdjs.StartMenuCode.conditionTrue_0 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition2IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition3IsTrue_0 = {val:false};
gdjs.StartMenuCode.conditionTrue_1 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition2IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition3IsTrue_1 = {val:false};


gdjs.StartMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenuCode.GDReset_95ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_95TimerObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95ButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95ButtonObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_95ButtonObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95ButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 1, 1, 5, 0.3, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects1[i].hide();
}
}}

}


};gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDReset_9595ButtonObjects2Objects = Hashtable.newFrom({"Reset_Button": gdjs.StartMenuCode.GDReset_95ButtonObjects2});
gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDReset_9595ButtonObjects1Objects = Hashtable.newFrom({"Reset_Button": gdjs.StartMenuCode.GDReset_95ButtonObjects1});
gdjs.StartMenuCode.asyncCallback14215836 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}}
gdjs.StartMenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback14215836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.asyncCallback16534420 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_95TimerObjects3);

{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects3[i].setString("1");
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects3[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_95TimerObjects3[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 50, 1.2);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects3[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 7, 7, 7, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartMenuCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.StartMenuCode.GDReset_95TimerObjects2) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback16534420(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.asyncCallback27811316 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_95TimerObjects2);

{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects2[i].setString("2");
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects2[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_95TimerObjects2[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 40, 1);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 4, 4, 4, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartMenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.StartMenuCode.GDReset_95TimerObjects1) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback27811316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenuCode.GDReset_95ButtonObjects2);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
gdjs.StartMenuCode.condition1IsTrue_0.val = false;
gdjs.StartMenuCode.condition2IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDReset_9595ButtonObjects2Objects) > 0;
}if ( gdjs.StartMenuCode.condition0IsTrue_0.val ) {
{
gdjs.StartMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StartMenuCode.condition1IsTrue_0.val ) {
{
{gdjs.StartMenuCode.conditionTrue_1 = gdjs.StartMenuCode.condition2IsTrue_0;
gdjs.StartMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11952060);
}
}}
}
if (gdjs.StartMenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDReset_95ButtonObjects2 */
{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95ButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95ButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Start");
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuButtomPress.wav", false, 30, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenuCode.GDReset_95ButtonObjects1);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
gdjs.StartMenuCode.condition1IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDReset_9595ButtonObjects1Objects) == 0;
}if ( gdjs.StartMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.StartMenuCode.conditionTrue_1 = gdjs.StartMenuCode.condition1IsTrue_0;
gdjs.StartMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14207308);
}
}}
if (gdjs.StartMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_95TimerObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects1[i].setString("3");
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_95TimerObjects1[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 30, 0.8);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 2, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDcursorObjects2Objects = Hashtable.newFrom({"cursor": gdjs.StartMenuCode.GDcursorObjects2});
gdjs.StartMenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
gdjs.StartMenuCode.GDcursorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDcursorObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.StartMenuCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDcursorObjects2[i].setZOrder(99999);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.StartMenuCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


};gdjs.StartMenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.StartMenuCode.GDcursorObjects2);
{for(var i = 0, len = gdjs.StartMenuCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDcursorObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left"));
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.StartMenuCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDcursorObjects1[i].setAnimation(0);
}
}}

}


};gdjs.StartMenuCode.eventsList7 = function(runtimeScene) {

{


gdjs.StartMenuCode.eventsList0(runtimeScene);
}


{


gdjs.StartMenuCode.eventsList4(runtimeScene);
}


{


gdjs.StartMenuCode.eventsList5(runtimeScene);
}


{


gdjs.StartMenuCode.eventsList6(runtimeScene);
}


{


{
}

}


};

gdjs.StartMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartMenuCode.GDATRASObjects1.length = 0;
gdjs.StartMenuCode.GDATRASObjects2.length = 0;
gdjs.StartMenuCode.GDATRASObjects3.length = 0;
gdjs.StartMenuCode.GDATRASObjects4.length = 0;
gdjs.StartMenuCode.GDcroshairObjects1.length = 0;
gdjs.StartMenuCode.GDcroshairObjects2.length = 0;
gdjs.StartMenuCode.GDcroshairObjects3.length = 0;
gdjs.StartMenuCode.GDcroshairObjects4.length = 0;
gdjs.StartMenuCode.GDcursorObjects1.length = 0;
gdjs.StartMenuCode.GDcursorObjects2.length = 0;
gdjs.StartMenuCode.GDcursorObjects3.length = 0;
gdjs.StartMenuCode.GDcursorObjects4.length = 0;
gdjs.StartMenuCode.GDReset_95TimerObjects1.length = 0;
gdjs.StartMenuCode.GDReset_95TimerObjects2.length = 0;
gdjs.StartMenuCode.GDReset_95TimerObjects3.length = 0;
gdjs.StartMenuCode.GDReset_95TimerObjects4.length = 0;
gdjs.StartMenuCode.GDReset_95ButtonObjects1.length = 0;
gdjs.StartMenuCode.GDReset_95ButtonObjects2.length = 0;
gdjs.StartMenuCode.GDReset_95ButtonObjects3.length = 0;
gdjs.StartMenuCode.GDReset_95ButtonObjects4.length = 0;

gdjs.StartMenuCode.eventsList7(runtimeScene);
return;

}

gdjs['StartMenuCode'] = gdjs.StartMenuCode;
