var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
 //  Either way works.
 
 //return (Object.assign(obj, obj, {[key]: value}));
 obj[key]=value;
 return obj;
}

function deleteFromObjectByKey(obj, key) {
  var tmpObj;
  // returns "true" even if key doesn not exist in object, for simple stuff
  delete Object.assign(tmpObj, obj)[key];
  return tmpObj;
}