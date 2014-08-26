var Nucleus = require("../index");
var Organel = require("organic").Organel
var fakePlasma = {}

describe("Nucleus", function(){
  
  it("should create new instance", function(){
    nucleus = new Nucleus();
  });

  it("should createNamespace of objects", function(done){
    var dna = {
      "objects": {
        "MyObject1": {
          "source": "test/data/organel"
        },
        "MyObject2": {
          "source": "test/data/organel"
        }
      }
    }
    nucleus = new Nucleus(fakePlasma, dna);

    nucleus.build("objects", function(err, objects){
      expect(objects.MyObject1 instanceof Organel).toBe(true)
      expect(objects.MyObject2 instanceof Organel).toBe(true)
      expect(dna.objects.MyObject1 instanceof Organel).toBe(false)
      done()
    });
  });
});