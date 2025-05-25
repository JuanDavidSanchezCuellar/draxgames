
if (typeof gdjs.evtsExt__Create3D__Function !== "undefined") {
  gdjs.evtsExt__Create3D__Function.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Create3D__Function = {};
gdjs.evtsExt__Create3D__Function.GDParameterObjects1= [];
gdjs.evtsExt__Create3D__Function.GDParameterObjects2= [];


gdjs.evtsExt__Create3D__Function.mapOfGDgdjs_9546evtsExt_9595_9595Create3D_9595_9595Function_9546GDParameterObjects1Objects = Hashtable.newFrom({"Parameter": gdjs.evtsExt__Create3D__Function.GDParameterObjects1});
gdjs.evtsExt__Create3D__Function.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__Create3D__Function.GDParameterObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Create3D__Function.mapOfGDgdjs_9546evtsExt_9595_9595Create3D_9595_9595Function_9546GDParameterObjects1Objects, eventsFunctionContext.getArgument("Parameter3"), eventsFunctionContext.getArgument("Parameter4"), "");
}{for(var i = 0, len = gdjs.evtsExt__Create3D__Function.GDParameterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Create3D__Function.GDParameterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter2")).setZ(eventsFunctionContext.getArgument("Parameter5"));
}
}}

}


};

gdjs.evtsExt__Create3D__Function.func = function(runtimeScene, Parameter, Parameter2, Parameter3, Parameter4, Parameter5, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Parameter": Parameter
},
  _objectArraysMap: {
"Parameter": gdjs.objectsListsToArray(Parameter)
},
  _behaviorNamesMap: {
"Parameter2": Parameter2
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
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
if (argName === "Parameter3") return Parameter3;
if (argName === "Parameter4") return Parameter4;
if (argName === "Parameter5") return Parameter5;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Create3D__Function.GDParameterObjects1.length = 0;
gdjs.evtsExt__Create3D__Function.GDParameterObjects2.length = 0;

gdjs.evtsExt__Create3D__Function.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Create3D__Function.registeredGdjsCallbacks = [];