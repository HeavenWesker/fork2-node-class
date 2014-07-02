function Class(argv){
  return argv.initialize ? argv.initialize : function(){};
}
module.exports = Class;
