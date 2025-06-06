
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale || {};

/**
 * Behavior generated from Shake object (position, angle, scale)
 */
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale = class ShakeObject_PositionAngleScale extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

// Methods:
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext = {};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects3= [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].resetTimer("__ShakeObject_DurationTimer");
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerX")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerX")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerY")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerY")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerAngle")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerAngle")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerScale")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerScale")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TimeBetweenShakes")) || 0 : 0));
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ShakeForever"), false);
}
}}

}


{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShakeForever") : false);
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ShakeForever"), true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")) == 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")).setNumber(0.5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes")) == 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes")).setNumber(0.08);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")) < (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes"))) ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes"))));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ShakeInProgress")) == 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_InitialShake")).setNumber(1);
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ShakeInProgress")).setNumber(1);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScale = function(Duration, PowerX, PowerY, PowerAngle, PowerScale, TimeBetweenShakes, ShakeForever, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Duration") return Duration;
if (argName === "PowerX") return PowerX;
if (argName === "PowerY") return PowerY;
if (argName === "PowerAngle") return PowerAngle;
if (argName === "PowerScale") return PowerScale;
if (argName === "TimeBetweenShakes") return TimeBetweenShakes;
if (argName === "ShakeForever") return ShakeForever;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final = [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final = [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final = [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects7= [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final.length = 0;gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);
}
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].setX(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getX() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementTravelledX")))));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].setY(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getY() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementTravelledY")))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerAngle")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].setAngle(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getAngle() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_AngleTravelled")))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerScale")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].setScale(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getScale() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_ScaleTravelled")))));
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementTravelledX")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementTravelledY")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_AngleTravelled")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_ScaleTravelled")).setNumber(0);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_DisplacementX")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_PowerX"))));
}
}}

}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementY")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerY"))));
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementX")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerX"))) * gdjs.randomWithStep(-(1), 1, 2));
}
}}

}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementY")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerY"))) * gdjs.randomWithStep(-(1), 1, 2));
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_InitialShake")) == 1 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_InitialShake")) == 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[0].getVariables()).get("__ShakeObject_ShakeCounter"))), 2) == 0);
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementAngle")).setNumber(-(1) * ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerAngle"))));
}
}}

}


{



}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[0].getVariables()).get("__ShakeObject_ShakeCounter"))), 2) == 1);
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementAngle")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerAngle"))));
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[0].getVariables()).get("__ShakeObject_ShakeCounter"))), 2) == 0);
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementScale")).setNumber(-(1) * ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerScale"))) * (1 / 100));
}
}}

}


{



}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[0].getVariables()).get("__ShakeObject_ShakeCounter"))), 2) == 1);
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementScale")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerScale"))) * (1 / 100));
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.length = 0;gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);
}
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerAngle")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerScale")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_InitialShake")).setNumber(0);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.length = 0;gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_InitialShake")) == 1 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].timerElapsedTime("__ShakeObject_ShakeTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_TimeBetweenShakes")))) ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);
}
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].resetTimer("__ShakeObject_ShakeTimer");
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_ShakeCounter")).add(1);
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementTravelledX")).add(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementX"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementTravelledY")).add(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementY"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_AngleTravelled")).add(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementAngle"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_ScaleTravelled")).add(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementScale"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.length = 0;gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);
}
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].setX(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getX() + (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementX"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].setY(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getY() + (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementY"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[0].getVariables()).get("__ShakeObject_PowerAngle"))) != 0);
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].setAngle(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getAngle() + (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementAngle"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[0].getVariables()).get("__ShakeObject_PowerScale"))) != 0);
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].setScale(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getScale() + (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementScale"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementTravelledX")).sub(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementX"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementTravelledY")).sub(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementY"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_AngleTravelled")).sub(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementAngle"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ScaleTravelled")).sub(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_DisplacementScale"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.length = 0;gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);
}
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].setX(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getX() - (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementX"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].setY(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getY() - (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementY"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[0].getVariables()).get("__ShakeObject_PowerAngle"))) != 0);
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].setAngle(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getAngle() - (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementAngle"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[0].getVariables()).get("__ShakeObject_PowerScale"))) != 0);
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].setScale(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getScale() - (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_DisplacementScale"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")).setNumber(Math.min(1, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_TimeBetweenShakes")))));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].timerElapsedTime("__ShakeObject_ShakeTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_TimeBetweenShakes"))) / 2)) ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].timerElapsedTime("__ShakeObject_ShakeTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes"))) / 2) ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_ShakeForever"), true) ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_Duration")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].resetTimer("__ShakeObject_DurationTimer");
}
}}

}


{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList16(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ShakeInProgress")) == 1 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList17(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final.length = 0;gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);

for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);
}
}
}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].setX(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getX() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_DisplacementTravelledX")))));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].setY(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getY() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_DisplacementTravelledY")))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerAngle")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].setAngle(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getAngle() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_AngleTravelled")))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerScale")) != 0 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].setScale(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getScale() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ScaleTravelled")))));
}
}}

}


{



}


{


{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_DisplacementTravelledX")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_DisplacementTravelledY")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_AngleTravelled")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ScaleTravelled")).setNumber(0);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList19(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].timerElapsedTime("__ShakeObject_DurationTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")))) ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ShakeInProgress")) == -(1) ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
}if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8605196);
}
}}
if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ShakeInProgress")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ShakeCounter")).setNumber(0);
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList20(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList22 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList18(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList21(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList23 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList22(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects7.length = 0;

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList23(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext = {};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects2= [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1);

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ShakeInProgress")).setNumber(-(1));
}
}}

}


};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShaking = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext = {};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects2= [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1);

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ShakeInProgress")) == 1 ) {
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShaking = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("ShakeObject::ShakeObject_PositionAngleScale", gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale);
