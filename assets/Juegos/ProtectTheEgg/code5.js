gdjs.Tutorial2Code = {};
gdjs.Tutorial2Code.localVariables = [];
gdjs.Tutorial2Code.GDTutorialObjects1= [];
gdjs.Tutorial2Code.GDTutorialObjects2= [];
gdjs.Tutorial2Code.GDTutorialObjects3= [];
gdjs.Tutorial2Code.GDskipObjects1= [];
gdjs.Tutorial2Code.GDskipObjects2= [];
gdjs.Tutorial2Code.GDskipObjects3= [];
gdjs.Tutorial2Code.GDTransitionObjects1= [];
gdjs.Tutorial2Code.GDTransitionObjects2= [];
gdjs.Tutorial2Code.GDTransitionObjects3= [];
gdjs.Tutorial2Code.GDDarkenObjects1= [];
gdjs.Tutorial2Code.GDDarkenObjects2= [];
gdjs.Tutorial2Code.GDDarkenObjects3= [];


gdjs.Tutorial2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.Tutorial2Code.GDskipObjects2);
{for(var i = 0, len = gdjs.Tutorial2Code.GDskipObjects2.length ;i < len;++i) {
    gdjs.Tutorial2Code.GDskipObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Tutorial2Code.GDskipObjects2.length ;i < len;++i) {
    gdjs.Tutorial2Code.GDskipObjects2[i].setPosition(90000000,90000000000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.Tutorial2Code.GDskipObjects2);
{for(var i = 0, len = gdjs.Tutorial2Code.GDskipObjects2.length ;i < len;++i) {
    gdjs.Tutorial2Code.GDskipObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Tutorial2Code.GDskipObjects2.length ;i < len;++i) {
    gdjs.Tutorial2Code.GDskipObjects2[i].setPosition(643,381);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("skip"), gdjs.Tutorial2Code.GDskipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tutorial2Code.GDskipObjects1.length;i<l;++i) {
    if ( gdjs.Tutorial2Code.GDskipObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Tutorial2Code.GDskipObjects1[k] = gdjs.Tutorial2Code.GDskipObjects1[i];
        ++k;
    }
}
gdjs.Tutorial2Code.GDskipObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Tutorial2Code.GDTutorialObjects1);
{for(var i = 0, len = gdjs.Tutorial2Code.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.Tutorial2Code.GDTutorialObjects1[i].setCurrentTime(108);
}
}}

}


};gdjs.Tutorial2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Tutorial2Code.GDTutorialObjects1);
{for(var i = 0, len = gdjs.Tutorial2Code.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.Tutorial2Code.GDTutorialObjects1[i].play();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19656772);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Tutorial2Code.GDTutorialObjects1);
{for(var i = 0, len = gdjs.Tutorial2Code.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.Tutorial2Code.GDTutorialObjects1[i].setCurrentTime(108);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Tutorial2Code.GDTutorialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tutorial2Code.GDTutorialObjects1.length;i<l;++i) {
    if ( gdjs.Tutorial2Code.GDTutorialObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Tutorial2Code.GDTutorialObjects1[k] = gdjs.Tutorial2Code.GDTutorialObjects1[i];
        ++k;
    }
}
gdjs.Tutorial2Code.GDTutorialObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Tutorial2Code.GDTutorialObjects1);
{for(var i = 0, len = gdjs.Tutorial2Code.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.Tutorial2Code.GDTutorialObjects1[i].setVolume(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music")));
}
}}

}


{


gdjs.Tutorial2Code.eventsList0(runtimeScene);
}


};

gdjs.Tutorial2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Tutorial2Code.GDTutorialObjects1.length = 0;
gdjs.Tutorial2Code.GDTutorialObjects2.length = 0;
gdjs.Tutorial2Code.GDTutorialObjects3.length = 0;
gdjs.Tutorial2Code.GDskipObjects1.length = 0;
gdjs.Tutorial2Code.GDskipObjects2.length = 0;
gdjs.Tutorial2Code.GDskipObjects3.length = 0;
gdjs.Tutorial2Code.GDTransitionObjects1.length = 0;
gdjs.Tutorial2Code.GDTransitionObjects2.length = 0;
gdjs.Tutorial2Code.GDTransitionObjects3.length = 0;
gdjs.Tutorial2Code.GDDarkenObjects1.length = 0;
gdjs.Tutorial2Code.GDDarkenObjects2.length = 0;
gdjs.Tutorial2Code.GDDarkenObjects3.length = 0;

gdjs.Tutorial2Code.eventsList1(runtimeScene);

return;

}

gdjs['Tutorial2Code'] = gdjs.Tutorial2Code;
