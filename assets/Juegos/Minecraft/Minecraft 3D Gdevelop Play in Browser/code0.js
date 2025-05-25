gdjs.IntroCode = {};
gdjs.IntroCode.GDintroObjects1= [];
gdjs.IntroCode.GDintroObjects2= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.IntroCode.GDintroObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDintroObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDintroObjects1[i].play();
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.IntroCode.GDintroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDintroObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDintroObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDintroObjects1[k] = gdjs.IntroCode.GDintroObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDintroObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDintroObjects1.length = 0;
gdjs.IntroCode.GDintroObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
