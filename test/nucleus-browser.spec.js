var Nucleus = require('../lib/nucleus-browser')
var Organel = require('organic').Organel
var fakePlasma = {}

describe('Nucleus browser', function () {
  it('should createNamespace of objects', function (done) {
    var dna = {
      'objects': {
        'MyObject1': {
          'source': require('./data/organel')
        },
        'MyObject2': {
          'source': require('./data/organel')
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
