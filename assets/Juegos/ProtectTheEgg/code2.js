gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.GDTitleButtonObjects1= [];
gdjs.GameOverCode.GDTitleButtonObjects2= [];
gdjs.GameOverCode.GDPlayButtonObjects1= [];
gdjs.GameOverCode.GDPlayButtonObjects2= [];
gdjs.GameOverCode.GDQuitButtonObjects1= [];
gdjs.GameOverCode.GDQuitButtonObjects2= [];
gdjs.GameOverCode.GDUploadScoreObjects1= [];
gdjs.GameOverCode.GDUploadScoreObjects2= [];
gdjs.GameOverCode.GDNameObjects1= [];
gdjs.GameOverCode.GDNameObjects2= [];
gdjs.GameOverCode.GDTransitionObjects1= [];
gdjs.GameOverCode.GDTransitionObjects2= [];
gdjs.GameOverCode.GDDarkenObjects1= [];
gdjs.GameOverCode.GDDarkenObjects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.GameOverCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.GameOverCode.GDQuitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UploadScore"), gdjs.GameOverCode.GDUploadScoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDPlayButtonObjects1[k] = gdjs.GameOverCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDPlayButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDQuitButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDQuitButtonObjects1[k] = gdjs.GameOverCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDQuitButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDUploadScoreObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDUploadScoreObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDUploadScoreObjects1[k] = gdjs.GameOverCode.GDUploadScoreObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDUploadScoreObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19352980);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Menu Selection Click.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19353812);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Icy Game Over.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music")), 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Settings", "Settings", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "transition", 0);
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.GameOverCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.GameOverCode.GDQuitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UploadScore"), gdjs.GameOverCode.GDUploadScoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDPlayButtonObjects1[k] = gdjs.GameOverCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDPlayButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDQuitButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDQuitButtonObjects1[k] = gdjs.GameOverCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDQuitButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDUploadScoreObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDUploadScoreObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDUploadScoreObjects1[k] = gdjs.GameOverCode.GDUploadScoreObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDUploadScoreObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDPlayButtonObjects1 */
/* Reuse gdjs.GameOverCode.GDQuitButtonObjects1 */
/* Reuse gdjs.GameOverCode.GDUploadScoreObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayButtonObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.GameOverCode.GDQuitButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDQuitButtonObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.GameOverCode.GDUploadScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDUploadScoreObjects1[i].enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.GameOverCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.GameOverCode.GDQuitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UploadScore"), gdjs.GameOverCode.GDUploadScoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.GameOverCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDPlayButtonObjects1[k] = gdjs.GameOverCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDPlayButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.GameOverCode.GDQuitButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDQuitButtonObjects1[k] = gdjs.GameOverCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDQuitButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDUploadScoreObjects1.length;i<l;++i) {
    if ( !(gdjs.GameOverCode.GDUploadScoreObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDUploadScoreObjects1[k] = gdjs.GameOverCode.GDUploadScoreObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDUploadScoreObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDPlayButtonObjects1 */
/* Reuse gdjs.GameOverCode.GDQuitButtonObjects1 */
/* Reuse gdjs.GameOverCode.GDUploadScoreObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayButtonObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.GameOverCode.GDQuitButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDQuitButtonObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.GameOverCode.GDUploadScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDUploadScoreObjects1[i].enableEffect("Effect", false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.GameOverCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDPlayButtonObjects1[k] = gdjs.GameOverCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.GameOverCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Horizontal", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.GameOverCode.GDTransitionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDTransitionObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDTransitionObjects1[k] = gdjs.GameOverCode.GDTransitionObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDTransitionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.GameOverCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDQuitButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDQuitButtonObjects1[k] = gdjs.GameOverCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDQuitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.writeStringInJSONFile("Settings", "Settings", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UploadScore"), gdjs.GameOverCode.GDUploadScoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDUploadScoreObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDUploadScoreObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDUploadScoreObjects1[k] = gdjs.GameOverCode.GDUploadScoreObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDUploadScoreObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19364268);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.GameOverCode.GDNameObjects1);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "dffd4f1b-994f-44d1-84c9-dff5a9e1382e", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), (( gdjs.GameOverCode.GDNameObjects1.length === 0 ) ? "" :gdjs.GameOverCode.GDNameObjects1[0].getText()));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "dffd4f1b-994f-44d1-84c9-dff5a9e1382e", false);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDTitleButtonObjects1.length = 0;
gdjs.GameOverCode.GDTitleButtonObjects2.length = 0;
gdjs.GameOverCode.GDPlayButtonObjects1.length = 0;
gdjs.GameOverCode.GDPlayButtonObjects2.length = 0;
gdjs.GameOverCode.GDQuitButtonObjects1.length = 0;
gdjs.GameOverCode.GDQuitButtonObjects2.length = 0;
gdjs.GameOverCode.GDUploadScoreObjects1.length = 0;
gdjs.GameOverCode.GDUploadScoreObjects2.length = 0;
gdjs.GameOverCode.GDNameObjects1.length = 0;
gdjs.GameOverCode.GDNameObjects2.length = 0;
gdjs.GameOverCode.GDTransitionObjects1.length = 0;
gdjs.GameOverCode.GDTransitionObjects2.length = 0;
gdjs.GameOverCode.GDDarkenObjects1.length = 0;
gdjs.GameOverCode.GDDarkenObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
