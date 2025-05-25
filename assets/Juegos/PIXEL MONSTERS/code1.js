gdjs.StartMenu2Code = {};
gdjs.StartMenu2Code.GDATRASObjects1= [];
gdjs.StartMenu2Code.GDATRASObjects2= [];
gdjs.StartMenu2Code.GDATRASObjects3= [];
gdjs.StartMenu2Code.GDATRASObjects4= [];
gdjs.StartMenu2Code.GDcroshairObjects1= [];
gdjs.StartMenu2Code.GDcroshairObjects2= [];
gdjs.StartMenu2Code.GDcroshairObjects3= [];
gdjs.StartMenu2Code.GDcroshairObjects4= [];
gdjs.StartMenu2Code.GDcursorObjects1= [];
gdjs.StartMenu2Code.GDcursorObjects2= [];
gdjs.StartMenu2Code.GDcursorObjects3= [];
gdjs.StartMenu2Code.GDcursorObjects4= [];
gdjs.StartMenu2Code.GDReset_95TimerObjects1= [];
gdjs.StartMenu2Code.GDReset_95TimerObjects2= [];
gdjs.StartMenu2Code.GDReset_95TimerObjects3= [];
gdjs.StartMenu2Code.GDReset_95TimerObjects4= [];
gdjs.StartMenu2Code.GDReset_95ButtonObjects1= [];
gdjs.StartMenu2Code.GDReset_95ButtonObjects2= [];
gdjs.StartMenu2Code.GDReset_95ButtonObjects3= [];
gdjs.StartMenu2Code.GDReset_95ButtonObjects4= [];

gdjs.StartMenu2Code.conditionTrue_0 = {val:false};
gdjs.StartMenu2Code.condition0IsTrue_0 = {val:false};
gdjs.StartMenu2Code.condition1IsTrue_0 = {val:false};
gdjs.StartMenu2Code.condition2IsTrue_0 = {val:false};
gdjs.StartMenu2Code.condition3IsTrue_0 = {val:false};
gdjs.StartMenu2Code.conditionTrue_1 = {val:false};
gdjs.StartMenu2Code.condition0IsTrue_1 = {val:false};
gdjs.StartMenu2Code.condition1IsTrue_1 = {val:false};
gdjs.StartMenu2Code.condition2IsTrue_1 = {val:false};
gdjs.StartMenu2Code.condition3IsTrue_1 = {val:false};


gdjs.StartMenu2Code.eventsList0 = function(runtimeScene) {

{


gdjs.StartMenu2Code.condition0IsTrue_0.val = false;
{
gdjs.StartMenu2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartMenu2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenu2Code.GDReset_95ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartMenu2Code.GDReset_95TimerObjects1);
{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95ButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95ButtonObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenu2Code.GDReset_95ButtonObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95ButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 1, 1, 5, 0.3, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95TimerObjects1[i].hide();
}
}}

}


};gdjs.StartMenu2Code.mapOfGDgdjs_46StartMenu2Code_46GDReset_9595ButtonObjects2Objects = Hashtable.newFrom({"Reset_Button": gdjs.StartMenu2Code.GDReset_95ButtonObjects2});
gdjs.StartMenu2Code.mapOfGDgdjs_46StartMenu2Code_46GDReset_9595ButtonObjects1Objects = Hashtable.newFrom({"Reset_Button": gdjs.StartMenu2Code.GDReset_95ButtonObjects1});
gdjs.StartMenu2Code.asyncCallback25808940 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame2", false);
}}
gdjs.StartMenu2Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenu2Code.asyncCallback25808940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenu2Code.asyncCallback14189788 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartMenu2Code.GDReset_95TimerObjects3);

{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95TimerObjects3[i].setString("1");
}
}{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95TimerObjects3[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenu2Code.GDReset_95TimerObjects3[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 50, 1.2);
}{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95TimerObjects3[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 7, 7, 7, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenu2Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartMenu2Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.StartMenu2Code.GDReset_95TimerObjects2) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenu2Code.asyncCallback14189788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenu2Code.asyncCallback17995340 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartMenu2Code.GDReset_95TimerObjects2);

{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95TimerObjects2[i].setString("2");
}
}{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95TimerObjects2[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenu2Code.GDReset_95TimerObjects2[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 40, 1);
}{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95TimerObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 4, 4, 4, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenu2Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartMenu2Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.StartMenu2Code.GDReset_95TimerObjects1) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenu2Code.asyncCallback17995340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenu2Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenu2Code.GDReset_95ButtonObjects2);

gdjs.StartMenu2Code.condition0IsTrue_0.val = false;
gdjs.StartMenu2Code.condition1IsTrue_0.val = false;
gdjs.StartMenu2Code.condition2IsTrue_0.val = false;
{
gdjs.StartMenu2Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.StartMenu2Code.mapOfGDgdjs_46StartMenu2Code_46GDReset_9595ButtonObjects2Objects) > 0;
}if ( gdjs.StartMenu2Code.condition0IsTrue_0.val ) {
{
gdjs.StartMenu2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StartMenu2Code.condition1IsTrue_0.val ) {
{
{gdjs.StartMenu2Code.conditionTrue_1 = gdjs.StartMenu2Code.condition2IsTrue_0;
gdjs.StartMenu2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12574716);
}
}}
}
if (gdjs.StartMenu2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.StartMenu2Code.GDReset_95ButtonObjects2 */
{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95ButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95ButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Start");
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuButtomPress.wav", false, 30, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenu2Code.GDReset_95ButtonObjects1);

gdjs.StartMenu2Code.condition0IsTrue_0.val = false;
gdjs.StartMenu2Code.condition1IsTrue_0.val = false;
{
gdjs.StartMenu2Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.StartMenu2Code.mapOfGDgdjs_46StartMenu2Code_46GDReset_9595ButtonObjects1Objects) == 0;
}if ( gdjs.StartMenu2Code.condition0IsTrue_0.val ) {
{
{gdjs.StartMenu2Code.conditionTrue_1 = gdjs.StartMenu2Code.condition1IsTrue_0;
gdjs.StartMenu2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10992332);
}
}}
if (gdjs.StartMenu2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartMenu2Code.GDReset_95TimerObjects1);
{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95TimerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95TimerObjects1[i].setString("3");
}
}{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95TimerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenu2Code.GDReset_95TimerObjects1[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 30, 0.8);
}{for(var i = 0, len = gdjs.StartMenu2Code.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDReset_95TimerObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 2, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenu2Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.StartMenu2Code.mapOfGDgdjs_46StartMenu2Code_46GDcursorObjects2Objects = Hashtable.newFrom({"cursor": gdjs.StartMenu2Code.GDcursorObjects2});
gdjs.StartMenu2Code.eventsList5 = function(runtimeScene) {

{


gdjs.StartMenu2Code.condition0IsTrue_0.val = false;
{
gdjs.StartMenu2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartMenu2Code.condition0IsTrue_0.val) {
gdjs.StartMenu2Code.GDcursorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StartMenu2Code.mapOfGDgdjs_46StartMenu2Code_46GDcursorObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.StartMenu2Code.GDcursorObjects2.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDcursorObjects2[i].setZOrder(99999);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.StartMenu2Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.StartMenu2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


};gdjs.StartMenu2Code.eventsList6 = function(runtimeScene) {

{


gdjs.StartMenu2Code.condition0IsTrue_0.val = false;
{
gdjs.StartMenu2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartMenu2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.StartMenu2Code.GDcursorObjects2);
{for(var i = 0, len = gdjs.StartMenu2Code.GDcursorObjects2.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDcursorObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.StartMenu2Code.condition0IsTrue_0.val = false;
{
gdjs.StartMenu2Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left"));
}if (gdjs.StartMenu2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.StartMenu2Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.StartMenu2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.StartMenu2Code.GDcursorObjects1[i].setAnimation(0);
}
}}

}


};gdjs.StartMenu2Code.eventsList7 = function(runtimeScene) {

{


gdjs.StartMenu2Code.eventsList0(runtimeScene);
}


{


gdjs.StartMenu2Code.eventsList4(runtimeScene);
}


{


gdjs.StartMenu2Code.eventsList5(runtimeScene);
}


{


gdjs.StartMenu2Code.eventsList6(runtimeScene);
}


{


{
}

}


};

gdjs.StartMenu2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartMenu2Code.GDATRASObjects1.length = 0;
gdjs.StartMenu2Code.GDATRASObjects2.length = 0;
gdjs.StartMenu2Code.GDATRASObjects3.length = 0;
gdjs.StartMenu2Code.GDATRASObjects4.length = 0;
gdjs.StartMenu2Code.GDcroshairObjects1.length = 0;
gdjs.StartMenu2Code.GDcroshairObjects2.length = 0;
gdjs.StartMenu2Code.GDcroshairObjects3.length = 0;
gdjs.StartMenu2Code.GDcroshairObjects4.length = 0;
gdjs.StartMenu2Code.GDcursorObjects1.length = 0;
gdjs.StartMenu2Code.GDcursorObjects2.length = 0;
gdjs.StartMenu2Code.GDcursorObjects3.length = 0;
gdjs.StartMenu2Code.GDcursorObjects4.length = 0;
gdjs.StartMenu2Code.GDReset_95TimerObjects1.length = 0;
gdjs.StartMenu2Code.GDReset_95TimerObjects2.length = 0;
gdjs.StartMenu2Code.GDReset_95TimerObjects3.length = 0;
gdjs.StartMenu2Code.GDReset_95TimerObjects4.length = 0;
gdjs.StartMenu2Code.GDReset_95ButtonObjects1.length = 0;
gdjs.StartMenu2Code.GDReset_95ButtonObjects2.length = 0;
gdjs.StartMenu2Code.GDReset_95ButtonObjects3.length = 0;
gdjs.StartMenu2Code.GDReset_95ButtonObjects4.length = 0;

gdjs.StartMenu2Code.eventsList7(runtimeScene);
return;

}

gdjs['StartMenu2Code'] = gdjs.StartMenu2Code;
