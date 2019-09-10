const AbstractNucleus = require('./abstract-nucleus')
const resolveModule = require('resolve')

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
    resolveModule(source, {
      basedir: this.root
    }, (err, fullSourcePath) => {
      if (err) return callback && callback(err)
      let OrganelClass = require(fullSourcePath)
      let instance = new OrganelClass(this.plasma, objectConfig)
      return callback && callback(null, instance)
    })
  }
}
