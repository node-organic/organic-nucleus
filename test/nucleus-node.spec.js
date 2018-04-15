var Nucleus = require('../lib/nucleus-node')
var Organel = require('organic').Organel
var fakePlasma = {}

describe('Nucleus node', function () {
  it('should createNamespace of objects', function (done) {
    var dna = {
      'objects': {
        'MyObject1': {
          'source': './test/data/organel'
        },
        'MyObject2': {
          'source': './test/data/organel'
        }
      }
    }
    var nucleus = new Nucleus(fakePlasma, dna)
    nucleus.build('objects', function (err, objects) {
      if (err) return done(err)
      expect(objects.MyObject1 instanceof Organel).toBe(true)
      expect(objects.MyObject2 instanceof Organel).toBe(true)
      expect(dna.objects.MyObject1 instanceof Organel).toBe(false)
      done()
    })
  })
})
