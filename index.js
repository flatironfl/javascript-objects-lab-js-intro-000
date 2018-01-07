var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
 //  return (Object.assign(obj, obj, {[key]: value}));
 return obj[key]=value;
}

function deleteFromObjectByKey(obj, key) {
  
  // returns "true" even if key doesn not exist in object, for simple stuff
  delete obj[key];
  
  return Object.assign({}, obj);
}