const app = "I don't do much.";
var kittens=["Milo","Otis","Garfield"];
function destructivelyAppendKitten(name){
 kittens.push(name);
}
function destructivelyPrependKitten(name){
 kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
 kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name){
kittens.shift(name);
}
function appendKitten(name){
 // return (...kittens,name);
}
function prependKitten(name){
  //return (name);
}
function removeLastKitten(name){
  return kittens.slice(1,kittens.length-1);
}
function removeFirst(name){
 return kittens.slice(2,length);
}