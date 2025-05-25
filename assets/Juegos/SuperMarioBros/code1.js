gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];
gdjs.GameOverCode.GDGameOverObjects3= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.GameOverCode.asyncCallback15917052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameOverCode.localVariables);

{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameOverCode.localVariables.length = 0;
}
gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameOverCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.GameOverCode.asyncCallback15917052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.GameOverCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameOverCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "gameover.mp3", false, 60, 1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{ //Subevents
gdjs.GameOverCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDGameOverObjects3.length = 0;

gdjs.GameOverCode.eventsList3(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
