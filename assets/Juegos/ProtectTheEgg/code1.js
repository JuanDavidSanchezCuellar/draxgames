gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDTitleObjects3= [];
gdjs.MainMenuCode.GDPlayObjects1= [];
gdjs.MainMenuCode.GDPlayObjects2= [];
gdjs.MainMenuCode.GDPlayObjects3= [];
gdjs.MainMenuCode.GDSettingsObjects1= [];
gdjs.MainMenuCode.GDSettingsObjects2= [];
gdjs.MainMenuCode.GDSettingsObjects3= [];
gdjs.MainMenuCode.GDSoundVolumeObjects1= [];
gdjs.MainMenuCode.GDSoundVolumeObjects2= [];
gdjs.MainMenuCode.GDSoundVolumeObjects3= [];
gdjs.MainMenuCode.GDMusicVolumeObjects1= [];
gdjs.MainMenuCode.GDMusicVolumeObjects2= [];
gdjs.MainMenuCode.GDMusicVolumeObjects3= [];
gdjs.MainMenuCode.GDBackObjects1= [];
gdjs.MainMenuCode.GDBackObjects2= [];
gdjs.MainMenuCode.GDBackObjects3= [];
gdjs.MainMenuCode.GDQuitObjects1= [];
gdjs.MainMenuCode.GDQuitObjects2= [];
gdjs.MainMenuCode.GDQuitObjects3= [];
gdjs.MainMenuCode.GDMarkerObjects1= [];
gdjs.MainMenuCode.GDMarkerObjects2= [];
gdjs.MainMenuCode.GDMarkerObjects3= [];
gdjs.MainMenuCode.GDSettingsMarkerObjects1= [];
gdjs.MainMenuCode.GDSettingsMarkerObjects2= [];
gdjs.MainMenuCode.GDSettingsMarkerObjects3= [];
gdjs.MainMenuCode.GDSoundSliderObjects1= [];
gdjs.MainMenuCode.GDSoundSliderObjects2= [];
gdjs.MainMenuCode.GDSoundSliderObjects3= [];
gdjs.MainMenuCode.GDMusicSliderObjects1= [];
gdjs.MainMenuCode.GDMusicSliderObjects2= [];
gdjs.MainMenuCode.GDMusicSliderObjects3= [];
gdjs.MainMenuCode.GDTitleButtonObjects1= [];
gdjs.MainMenuCode.GDTitleButtonObjects2= [];
gdjs.MainMenuCode.GDTitleButtonObjects3= [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDPlayButtonObjects3= [];
gdjs.MainMenuCode.GDSettingsButtonObjects1= [];
gdjs.MainMenuCode.GDSettingsButtonObjects2= [];
gdjs.MainMenuCode.GDSettingsButtonObjects3= [];
gdjs.MainMenuCode.GDQuitButtonObjects1= [];
gdjs.MainMenuCode.GDQuitButtonObjects2= [];
gdjs.MainMenuCode.GDQuitButtonObjects3= [];
gdjs.MainMenuCode.GDCRTObjects1= [];
gdjs.MainMenuCode.GDCRTObjects2= [];
gdjs.MainMenuCode.GDCRTObjects3= [];
gdjs.MainMenuCode.GDTitleButtonEggObjects1= [];
gdjs.MainMenuCode.GDTitleButtonEggObjects2= [];
gdjs.MainMenuCode.GDTitleButtonEggObjects3= [];
gdjs.MainMenuCode.GDCRT2Objects1= [];
gdjs.MainMenuCode.GDCRT2Objects2= [];
gdjs.MainMenuCode.GDCRT2Objects3= [];
gdjs.MainMenuCode.GDSoundObjects1= [];
gdjs.MainMenuCode.GDSoundObjects2= [];
gdjs.MainMenuCode.GDSoundObjects3= [];
gdjs.MainMenuCode.GDMusicObjects1= [];
gdjs.MainMenuCode.GDMusicObjects2= [];
gdjs.MainMenuCode.GDMusicObjects3= [];
gdjs.MainMenuCode.GDBackButtonObjects1= [];
gdjs.MainMenuCode.GDBackButtonObjects2= [];
gdjs.MainMenuCode.GDBackButtonObjects3= [];
gdjs.MainMenuCode.GDTutorialObjects1= [];
gdjs.MainMenuCode.GDTutorialObjects2= [];
gdjs.MainMenuCode.GDTutorialObjects3= [];
gdjs.MainMenuCode.GDByDraxGamesObjects1= [];
gdjs.MainMenuCode.GDByDraxGamesObjects2= [];
gdjs.MainMenuCode.GDByDraxGamesObjects3= [];
gdjs.MainMenuCode.GDTransitionObjects1= [];
gdjs.MainMenuCode.GDTransitionObjects2= [];
gdjs.MainMenuCode.GDTransitionObjects3= [];
gdjs.MainMenuCode.GDDarkenObjects1= [];
gdjs.MainMenuCode.GDDarkenObjects2= [];
gdjs.MainMenuCode.GDDarkenObjects3= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.MainMenuCode.asyncCallback19262604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback19262604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19167876);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Menu_loop.mp3", true, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music")), 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CRT"), gdjs.MainMenuCode.GDCRTObjects1);
gdjs.copyArray(runtimeScene.getObjects("CRT2"), gdjs.MainMenuCode.GDCRT2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.MainMenuCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.MainMenuCode.GDMusicSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.MainMenuCode.GDSettingsMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.MainMenuCode.GDSoundSliderObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMarkerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDSettingsMarkerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsMarkerObjects1[i].hide();
}
}{gdjs.evtTools.storage.readStringFromJSONFile("Settings", "Settings", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), runtimeScene.getGame().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.MainMenuCode.GDSoundSliderObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSoundSliderObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMusicSliderObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "transition", 0);
}{for(var i = 0, len = gdjs.MainMenuCode.GDCRTObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCRTObjects1[i].getBehavior("Opacity").setOpacity(80);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDCRTObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCRTObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDCRT2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCRT2Objects1[i].getBehavior("Opacity").setOpacity(80);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDCRT2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCRT2Objects1[i].setPosition(768,2);
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MainMenuCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ByDraxGames"), gdjs.MainMenuCode.GDByDraxGamesObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MainMenuCode.GDQuitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MainMenuCode.GDSettingsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.MainMenuCode.GDTutorialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSettingsButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSettingsButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSettingsButtonObjects1[k] = gdjs.MainMenuCode.GDSettingsButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSettingsButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDQuitButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuitButtonObjects1[k] = gdjs.MainMenuCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuitButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects1[k] = gdjs.MainMenuCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTutorialObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTutorialObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTutorialObjects1[k] = gdjs.MainMenuCode.GDTutorialObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTutorialObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDByDraxGamesObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDByDraxGamesObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDByDraxGamesObjects1[k] = gdjs.MainMenuCode.GDByDraxGamesObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDByDraxGamesObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBackButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDByDraxGamesObjects1 */
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDQuitButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDSettingsButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDTutorialObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDSettingsButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsButtonObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDQuitButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuitButtonObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackButtonObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTutorialObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDByDraxGamesObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDByDraxGamesObjects1[i].enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MainMenuCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ByDraxGames"), gdjs.MainMenuCode.GDByDraxGamesObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MainMenuCode.GDQuitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MainMenuCode.GDSettingsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.MainMenuCode.GDTutorialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSettingsButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSettingsButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSettingsButtonObjects1[k] = gdjs.MainMenuCode.GDSettingsButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSettingsButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDQuitButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuitButtonObjects1[k] = gdjs.MainMenuCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuitButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects1[k] = gdjs.MainMenuCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTutorialObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTutorialObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTutorialObjects1[k] = gdjs.MainMenuCode.GDTutorialObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTutorialObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDByDraxGamesObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDByDraxGamesObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDByDraxGamesObjects1[k] = gdjs.MainMenuCode.GDByDraxGamesObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDByDraxGamesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19250844);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Menu Selection Click.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MainMenuCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ByDraxGames"), gdjs.MainMenuCode.GDByDraxGamesObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MainMenuCode.GDQuitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MainMenuCode.GDSettingsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.MainMenuCode.GDTutorialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSettingsButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDSettingsButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSettingsButtonObjects1[k] = gdjs.MainMenuCode.GDSettingsButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSettingsButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDQuitButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuitButtonObjects1[k] = gdjs.MainMenuCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuitButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects1[k] = gdjs.MainMenuCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTutorialObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDTutorialObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTutorialObjects1[k] = gdjs.MainMenuCode.GDTutorialObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTutorialObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDByDraxGamesObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDByDraxGamesObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDByDraxGamesObjects1[k] = gdjs.MainMenuCode.GDByDraxGamesObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDByDraxGamesObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBackButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDByDraxGamesObjects1 */
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDQuitButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDSettingsButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDTutorialObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDSettingsButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsButtonObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDQuitButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuitButtonObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackButtonObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTutorialObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDByDraxGamesObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDByDraxGamesObjects1[i].enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.MainMenuCode.GDSoundSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSoundSliderObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSoundSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSoundSliderObjects1[k] = gdjs.MainMenuCode.GDSoundSliderObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSoundSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSoundSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").setNumber((( gdjs.MainMenuCode.GDSoundSliderObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDSoundSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.MainMenuCode.GDMusicSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDMusicSliderObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDMusicSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDMusicSliderObjects1[k] = gdjs.MainMenuCode.GDMusicSliderObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDMusicSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDMusicSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").setNumber((( gdjs.MainMenuCode.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDMusicSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19257292);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.MainMenuCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Horizontal", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19259452);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.MainMenuCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Horizontal", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Tutorial", "Juego", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MainMenuCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDQuitButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuitButtonObjects1[k] = gdjs.MainMenuCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuitButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19261652);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), 1);
}
{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MainMenuCode.GDSettingsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSettingsButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSettingsButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSettingsButtonObjects1[k] = gdjs.MainMenuCode.GDSettingsButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSettingsButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19263732);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.MainMenuCode.GDSettingsMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera(runtimeScene, "CameraMove", (( gdjs.MainMenuCode.GDSettingsMarkerObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDSettingsMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", 1000, "easeInOutQuad");
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MainMenuCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects1[k] = gdjs.MainMenuCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19265772);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.MainMenuCode.GDMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera(runtimeScene, "CameraMove", (( gdjs.MainMenuCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", 1000, "easeInOutQuad");
}{gdjs.evtTools.storage.writeStringInJSONFile("Settings", "Settings", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.MainMenuCode.GDTutorialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTutorialObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTutorialObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTutorialObjects1[k] = gdjs.MainMenuCode.GDTutorialObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTutorialObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19268484);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.MainMenuCode.GDMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera(runtimeScene, "CameraMove", (( gdjs.MainMenuCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", 1000, "easeInOutQuad");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ByDraxGames"), gdjs.MainMenuCode.GDByDraxGamesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDByDraxGamesObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDByDraxGamesObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDByDraxGamesObjects1[k] = gdjs.MainMenuCode.GDByDraxGamesObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDByDraxGamesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19271084);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.MainMenuCode.GDMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera(runtimeScene, "CameraMove", (( gdjs.MainMenuCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", 1000, "easeInOutQuad");
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), 1);
}{gdjs.evtTools.window.openURL("https://draxgames.itch.io", runtimeScene);
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
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Tutorial", "Juego", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TitleButtonEgg"), gdjs.MainMenuCode.GDTitleButtonEggObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTitleButtonEggObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTitleButtonEggObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTitleButtonEggObjects1[k] = gdjs.MainMenuCode.GDTitleButtonEggObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTitleButtonEggObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDTitleButtonEggObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDTitleButtonEggObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTitleButtonEggObjects1[i].setColor("74;144;226");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TitleButtonEgg"), gdjs.MainMenuCode.GDTitleButtonEggObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTitleButtonEggObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDTitleButtonEggObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTitleButtonEggObjects1[k] = gdjs.MainMenuCode.GDTitleButtonEggObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTitleButtonEggObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDTitleButtonEggObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDTitleButtonEggObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTitleButtonEggObjects1[i].setColor("238;226;76");
}
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDPlayObjects1.length = 0;
gdjs.MainMenuCode.GDPlayObjects2.length = 0;
gdjs.MainMenuCode.GDPlayObjects3.length = 0;
gdjs.MainMenuCode.GDSettingsObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsObjects3.length = 0;
gdjs.MainMenuCode.GDSoundVolumeObjects1.length = 0;
gdjs.MainMenuCode.GDSoundVolumeObjects2.length = 0;
gdjs.MainMenuCode.GDSoundVolumeObjects3.length = 0;
gdjs.MainMenuCode.GDMusicVolumeObjects1.length = 0;
gdjs.MainMenuCode.GDMusicVolumeObjects2.length = 0;
gdjs.MainMenuCode.GDMusicVolumeObjects3.length = 0;
gdjs.MainMenuCode.GDBackObjects1.length = 0;
gdjs.MainMenuCode.GDBackObjects2.length = 0;
gdjs.MainMenuCode.GDBackObjects3.length = 0;
gdjs.MainMenuCode.GDQuitObjects1.length = 0;
gdjs.MainMenuCode.GDQuitObjects2.length = 0;
gdjs.MainMenuCode.GDQuitObjects3.length = 0;
gdjs.MainMenuCode.GDMarkerObjects1.length = 0;
gdjs.MainMenuCode.GDMarkerObjects2.length = 0;
gdjs.MainMenuCode.GDMarkerObjects3.length = 0;
gdjs.MainMenuCode.GDSettingsMarkerObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsMarkerObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsMarkerObjects3.length = 0;
gdjs.MainMenuCode.GDSoundSliderObjects1.length = 0;
gdjs.MainMenuCode.GDSoundSliderObjects2.length = 0;
gdjs.MainMenuCode.GDSoundSliderObjects3.length = 0;
gdjs.MainMenuCode.GDMusicSliderObjects1.length = 0;
gdjs.MainMenuCode.GDMusicSliderObjects2.length = 0;
gdjs.MainMenuCode.GDMusicSliderObjects3.length = 0;
gdjs.MainMenuCode.GDTitleButtonObjects1.length = 0;
gdjs.MainMenuCode.GDTitleButtonObjects2.length = 0;
gdjs.MainMenuCode.GDTitleButtonObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDSettingsButtonObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsButtonObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsButtonObjects3.length = 0;
gdjs.MainMenuCode.GDQuitButtonObjects1.length = 0;
gdjs.MainMenuCode.GDQuitButtonObjects2.length = 0;
gdjs.MainMenuCode.GDQuitButtonObjects3.length = 0;
gdjs.MainMenuCode.GDCRTObjects1.length = 0;
gdjs.MainMenuCode.GDCRTObjects2.length = 0;
gdjs.MainMenuCode.GDCRTObjects3.length = 0;
gdjs.MainMenuCode.GDTitleButtonEggObjects1.length = 0;
gdjs.MainMenuCode.GDTitleButtonEggObjects2.length = 0;
gdjs.MainMenuCode.GDTitleButtonEggObjects3.length = 0;
gdjs.MainMenuCode.GDCRT2Objects1.length = 0;
gdjs.MainMenuCode.GDCRT2Objects2.length = 0;
gdjs.MainMenuCode.GDCRT2Objects3.length = 0;
gdjs.MainMenuCode.GDSoundObjects1.length = 0;
gdjs.MainMenuCode.GDSoundObjects2.length = 0;
gdjs.MainMenuCode.GDSoundObjects3.length = 0;
gdjs.MainMenuCode.GDMusicObjects1.length = 0;
gdjs.MainMenuCode.GDMusicObjects2.length = 0;
gdjs.MainMenuCode.GDMusicObjects3.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects1.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects2.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects3.length = 0;
gdjs.MainMenuCode.GDTutorialObjects1.length = 0;
gdjs.MainMenuCode.GDTutorialObjects2.length = 0;
gdjs.MainMenuCode.GDTutorialObjects3.length = 0;
gdjs.MainMenuCode.GDByDraxGamesObjects1.length = 0;
gdjs.MainMenuCode.GDByDraxGamesObjects2.length = 0;
gdjs.MainMenuCode.GDByDraxGamesObjects3.length = 0;
gdjs.MainMenuCode.GDTransitionObjects1.length = 0;
gdjs.MainMenuCode.GDTransitionObjects2.length = 0;
gdjs.MainMenuCode.GDTransitionObjects3.length = 0;
gdjs.MainMenuCode.GDDarkenObjects1.length = 0;
gdjs.MainMenuCode.GDDarkenObjects2.length = 0;
gdjs.MainMenuCode.GDDarkenObjects3.length = 0;

gdjs.MainMenuCode.eventsList3(runtimeScene);

return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
