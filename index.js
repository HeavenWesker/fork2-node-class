function Class(argv){
  result = argv.initialize ? argv.initialize : function(){};
  for(var x in argv){
    if(x != 'initialize'){
      result.prototype[x] = argv[x];
    }
  }
  return result;
}
module.exports = Class;
