const AbstractNucleus = require('./abstract-nucleus')
const path = require('path')

module.exports = class NucleusNode extends AbstractNucleus {
  buildOne (c, callback) {
    if (typeof c.source === 'function') {
      return super.buildOne.call(this, c, callback)
    }

    let objectConfig = c
    if (!objectConfig) return callback && callback()
    if (!objectConfig.source && typeof objectConfig !== 'string') {
      let err = new Error('can not create object without source but with ' + JSON.stringify(c))
      return callback && callback(err)
    }
    let source = objectConfig.source || objectConfig
    if (source.indexOf('./') === 0 || source.indexOf('.\\') === 0) {
      source = path.join(this.root, source)
    }
    let OrganelClass = require(source)
    let instance = new OrganelClass(this.plasma, objectConfig)
    return callback && callback(null, instance)
  }
}
