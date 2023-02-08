function show(){
    var argArray = Array.prototype.slice.call(arguments);
    arguArray.sort();
    console.log(argArray)
}
show(2,15,6)