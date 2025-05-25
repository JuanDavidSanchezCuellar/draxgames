gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDATRASObjects1= [];
gdjs.LeaderboardCode.GDATRASObjects2= [];
gdjs.LeaderboardCode.GDATRASObjects3= [];
gdjs.LeaderboardCode.GDcroshairObjects1= [];
gdjs.LeaderboardCode.GDcroshairObjects2= [];
gdjs.LeaderboardCode.GDcroshairObjects3= [];
gdjs.LeaderboardCode.GDcursorObjects1= [];
gdjs.LeaderboardCode.GDcursorObjects2= [];
gdjs.LeaderboardCode.GDcursorObjects3= [];

gdjs.LeaderboardCode.conditionTrue_0 = {val:false};
gdjs.LeaderboardCode.condition0IsTrue_0 = {val:false};
gdjs.LeaderboardCode.condition1IsTrue_0 = {val:false};


gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDcursorObjects2Objects = Hashtable.newFrom({"cursor": gdjs.LeaderboardCode.GDcursorObjects2});
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
gdjs.LeaderboardCode.GDcursorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDcursorObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDcursorObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDcursorObjects2[i].setZOrder(99999);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LeaderboardCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "elegir personaje", false);
}}

}


{


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "53a76a45-84e5-425f-832a-47ef87b0ac6e", true);
}}

}


{


gdjs.LeaderboardCode.eventsList0(runtimeScene);
}


{


{
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDATRASObjects1.length = 0;
gdjs.LeaderboardCode.GDATRASObjects2.length = 0;
gdjs.LeaderboardCode.GDATRASObjects3.length = 0;
gdjs.LeaderboardCode.GDcroshairObjects1.length = 0;
gdjs.LeaderboardCode.GDcroshairObjects2.length = 0;
gdjs.LeaderboardCode.GDcroshairObjects3.length = 0;
gdjs.LeaderboardCode.GDcursorObjects1.length = 0;
gdjs.LeaderboardCode.GDcursorObjects2.length = 0;
gdjs.LeaderboardCode.GDcursorObjects3.length = 0;

gdjs.LeaderboardCode.eventsList1(runtimeScene);
return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
