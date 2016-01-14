# organic-nucleus

Implementation of [node-organic/Nucleus](https://github.com/VarnaLab/node-organic/blob/master/docs/Nucleus.md)

## api

### buildOne(c [, callback])

Builds once organelle using data wrapped in chemical `c`.

Chemical should have the following structure:

    {
      "source": "relative/path/to/organelle",
      // ... organelle's own dna data
    }


  * `c.source` having value typeof
    * Function - used as Class constructor
    * String - used as path relative to `process.env.ROOT_PATH` || `process.cwd()`  to require Class implementation

All Modules representing Organelles instantiated by Nucleus are expected to have the following signature

    module.exports = function(plasma, dna) {}

Where:

  * `plasma` is the Nucleus' plasma
  * `dna` is the portion of the dna used to instantiate the Class

### build(c [, callback])

Builds organelles using data wrapped in chemical `c`.

Chemical should have one of the following structures:

    {
      "source": "cwd/relative/path/to/organelle",
      // ... organelle's own dna data

      -- or --

      "branch": "branch.innerBranch"
    }

    -- or --

    "branch.innerBranch"


  * `c.source` - directly passes control flow to `buildOne`
  * `c.branch` - selects dna node using dot notation namespace query (ex: "branch.innerNode") and iterates through the dna node by constructing all found organelles (those dna branches who have `source` property).
  * `c` as String - indicates dna namespace, uses the same control flow as with chemicals having `c.branch`
