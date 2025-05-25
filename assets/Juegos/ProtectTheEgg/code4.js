gdjs.TutorialCode = {};
gdjs.TutorialCode.localVariables = [];
gdjs.TutorialCode.GDTutorialObjects1= [];
gdjs.TutorialCode.GDTutorialObjects2= [];
gdjs.TutorialCode.GDTutorialObjects3= [];
gdjs.TutorialCode.GDskipObjects1= [];
gdjs.TutorialCode.GDskipObjects2= [];
gdjs.TutorialCode.GDskipObjects3= [];
gdjs.TutorialCode.GDTransitionObjects1= [];
gdjs.TutorialCode.GDTransitionObjects2= [];
gdjs.TutorialCode.GDTransitionObjects3= [];
gdjs.TutorialCode.GDDarkenObjects1= [];
gdjs.TutorialCode.GDDarkenObjects2= [];
gdjs.TutorialCode.GDDarkenObjects3= [];


gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.TutorialCode.GDskipObjects2);
{for(var i = 0, len = gdjs.TutorialCode.GDskipObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDskipObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.TutorialCode.GDskipObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDskipObjects2[i].setPosition(90000000,90000000000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.TutorialCode.GDskipObjects2);
{for(var i = 0, len = gdjs.TutorialCode.GDskipObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDskipObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDskipObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDskipObjects2[i].setPosition(643,381);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.TutorialCode.GDskipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDskipObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDskipObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDskipObjects1[k] = gdjs.TutorialCode.GDskipObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDskipObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.TutorialCode.GDTutorialObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDTutorialObjects1[i].setCurrentTime(108);
}
}}

}


};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19632420);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.writeNumberInJSONFile("Tutorial", "Juego", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Tutorial", "Juego", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19635572);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.TutorialCode.GDTutorialObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDTutorialObjects1[i].play();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19636388);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.TutorialCode.GDTutorialObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDTutorialObjects1[i].setCurrentTime(108);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.TutorialCode.GDTutorialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDTutorialObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDTutorialObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDTutorialObjects1[k] = gdjs.TutorialCode.GDTutorialObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDTutorialObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
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
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.TutorialCode.GDTutorialObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDTutorialObjects1[i].setVolume(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music")));
}
}}

}


{


gdjs.TutorialCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDTutorialObjects1.length = 0;
gdjs.TutorialCode.GDTutorialObjects2.length = 0;
gdjs.TutorialCode.GDTutorialObjects3.length = 0;
gdjs.TutorialCode.GDskipObjects1.length = 0;
gdjs.TutorialCode.GDskipObjects2.length = 0;
gdjs.TutorialCode.GDskipObjects3.length = 0;
gdjs.TutorialCode.GDTransitionObjects1.length = 0;
gdjs.TutorialCode.GDTransitionObjects2.length = 0;
gdjs.TutorialCode.GDTransitionObjects3.length = 0;
gdjs.TutorialCode.GDDarkenObjects1.length = 0;
gdjs.TutorialCode.GDDarkenObjects2.length = 0;
gdjs.TutorialCode.GDDarkenObjects3.length = 0;

gdjs.TutorialCode.eventsList1(runtimeScene);

return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
