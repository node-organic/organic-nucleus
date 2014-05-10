# organic-nucleus

Implementation of [node-organic/Nucleus] as standalone module

## api

### buildOne(c)

  * `c.source` having value of
    * function - used as Class constructor
    * string - used as path relative to cwd to require Class implementation

All Classes instantiated by Nucleus are expected to have the following signature

    function(plasma, dna)

Where:

  * `plasma` is the Nucleus' plasma
  * `dna` is the portion of the dna used to instantiate the Class

### build(c)

Chemical having one of the following:

  * `c.source` - directly passes control flow to `buildOne` 
  * `c.branch` - selects dna node using dot notation namespace query (ex: "cell.innerNode") and iterates through the dna node by constructing all found organelles
  * `c` as String - indicates dna namespace, uses the same control flow as using `c.branch`