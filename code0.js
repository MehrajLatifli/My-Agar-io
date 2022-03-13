gdjs.play_32fieldCode = {};
gdjs.play_32fieldCode.GDplayerObjects1= [];
gdjs.play_32fieldCode.GDplayerObjects2= [];
gdjs.play_32fieldCode.GDfoodObjects1= [];
gdjs.play_32fieldCode.GDfoodObjects2= [];
gdjs.play_32fieldCode.GDenemyObjects1= [];
gdjs.play_32fieldCode.GDenemyObjects2= [];

gdjs.play_32fieldCode.conditionTrue_0 = {val:false};
gdjs.play_32fieldCode.condition0IsTrue_0 = {val:false};
gdjs.play_32fieldCode.condition1IsTrue_0 = {val:false};


gdjs.play_32fieldCode.eventsList0 = function(runtimeScene) {

};gdjs.play_32fieldCode.eventsList1 = function(runtimeScene) {

};gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDfoodObjects1Objects = Hashtable.newFrom({"food": gdjs.play_32fieldCode.GDfoodObjects1});gdjs.play_32fieldCode.eventsList2 = function(runtimeScene) {

};gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.play_32fieldCode.GDplayerObjects1});gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDfoodObjects1Objects = Hashtable.newFrom({"food": gdjs.play_32fieldCode.GDfoodObjects1});gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.play_32fieldCode.GDplayerObjects1});gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.play_32fieldCode.GDenemyObjects1});gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.play_32fieldCode.GDplayerObjects1});gdjs.play_32fieldCode.eventsList3 = function(runtimeScene) {

{


gdjs.play_32fieldCode.eventsList0(runtimeScene);
}


{


{
}

}


{


gdjs.play_32fieldCode.eventsList1(runtimeScene);
}


{


gdjs.play_32fieldCode.condition0IsTrue_0.val = false;
{
gdjs.play_32fieldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "foodspawn") > 1;
}if (gdjs.play_32fieldCode.condition0IsTrue_0.val) {
gdjs.play_32fieldCode.GDfoodObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "foodspawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDfoodObjects1Objects, gdjs.random(800), gdjs.random(600), "");
}{for(var i = 0, len = gdjs.play_32fieldCode.GDfoodObjects1.length ;i < len;++i) {
    gdjs.play_32fieldCode.GDfoodObjects1[i].setHeight(18);
}
}{for(var i = 0, len = gdjs.play_32fieldCode.GDfoodObjects1.length ;i < len;++i) {
    gdjs.play_32fieldCode.GDfoodObjects1[i].setWidth(18);
}
}}

}


{


gdjs.play_32fieldCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("food"), gdjs.play_32fieldCode.GDfoodObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.play_32fieldCode.GDplayerObjects1);

gdjs.play_32fieldCode.condition0IsTrue_0.val = false;
{
gdjs.play_32fieldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDplayerObjects1Objects, gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDfoodObjects1Objects, false, runtimeScene, false);
}if (gdjs.play_32fieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.play_32fieldCode.GDfoodObjects1 */
/* Reuse gdjs.play_32fieldCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.play_32fieldCode.GDfoodObjects1.length ;i < len;++i) {
    gdjs.play_32fieldCode.GDfoodObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.play_32fieldCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.play_32fieldCode.GDplayerObjects1[i].setScale(gdjs.play_32fieldCode.GDplayerObjects1[i].getScale() + (0.01));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.play_32fieldCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.play_32fieldCode.GDplayerObjects1);

gdjs.play_32fieldCode.condition0IsTrue_0.val = false;
{
gdjs.play_32fieldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDplayerObjects1Objects, gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.play_32fieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.play_32fieldCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.play_32fieldCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.play_32fieldCode.GDplayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.play_32fieldCode.mapOfGDgdjs_46play_9532fieldCode_46GDplayerObjects1Objects, gdjs.random(800), gdjs.random(600), "");
}}

}


};

gdjs.play_32fieldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.play_32fieldCode.GDplayerObjects1.length = 0;
gdjs.play_32fieldCode.GDplayerObjects2.length = 0;
gdjs.play_32fieldCode.GDfoodObjects1.length = 0;
gdjs.play_32fieldCode.GDfoodObjects2.length = 0;
gdjs.play_32fieldCode.GDenemyObjects1.length = 0;
gdjs.play_32fieldCode.GDenemyObjects2.length = 0;

gdjs.play_32fieldCode.eventsList3(runtimeScene);
return;

}

gdjs['play_32fieldCode'] = gdjs.play_32fieldCode;
