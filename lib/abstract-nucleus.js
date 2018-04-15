const Nucleus = require('organic').Nucleus
const R = require('reactions')
const selectBranch = require('organic-dna-branches').selectBranch

module.exports = class AbstractNucleus extends Nucleus {
  constructor (plasma, dna, root) {
    super()
    this.dna = dna
    this.plasma = plasma
    this.root = root || process.env.ORGANELLES_PATH || process.cwd()
  }

  buildOne (c, callback) {
    let OrganelClass = c.source || c
    let instance = new OrganelClass(this.plasma, c)
    return callback && callback(null, instance)
  }

  build (c, callback) {
    if (c.source) {
      return this.buildOne(c, callback)
    }
    if (c.branch) {
      c = selectBranch(this.dna, c.branch)
    }
    if (typeof c === 'string') {
      c = selectBranch(this.dna, c)
    }

    R.fn.mapHash((buildChemical, done) => {
      this.buildOne(buildChemical, done)
    }, c, callback || this.defaultBuildHandler)
  }

  defaultBuildHandler () {

  }
}
