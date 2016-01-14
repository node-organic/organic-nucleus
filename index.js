var Nucleus = require("organic").Nucleus
var util = require("util")
var R = require("reactions")
var selectBranch = require("organic-dna-branches").selectBranch

module.exports = function(plasma, dna){
  this.dna = dna
  this.plasma = plasma
}

util.inherits(module.exports, Nucleus);

module.exports.prototype.buildOne = function(c, callback){
  if(typeof c.source == "function") {
    var OrganelClass = c.source;
    var instance = new OrganelClass(this.plasma, c);
    return callback && callback(null, instance);
  }

  var objectConfig = c;
  if(!objectConfig) return callback && callback()
  if(!objectConfig.source)
    return callback && callback(new Error("can not create object without source but with "+util.inspect(c)));
  var source = objectConfig.source;
  if(source.indexOf("/") !== -1 || source.indexOf("\\") !== -1)
    source = process.cwd()+"/"+source;
  var OrganelClass = require(source);
  var instance = new OrganelClass(this.plasma, objectConfig);
  return callback && callback(null, instance);
}

module.exports.prototype.build = function(c, callback) {
  if(c.source)
    return this.buildOne(c, callback)
  if(c.branch)
    c = selectBranch(this.dna, c.branch)
  if(typeof c == "string")
    c = selectBranch(this.dna, c)

  var self = this
  R.fn.mapHash(function(buildChemical, done){
    self.buildOne(buildChemical, done)
  }, c, callback || self.defaultBuildHandler)
}

module.exports.prototype.defaultBuildHandler = function(){

}