# organic-nucleus

Implementation of [node-organic/Nucleus](https://github.com/VarnaLab/node-organic/blob/master/docs/Nucleus.md)

## api

### constructor (plasma, dna, root)

___arguments___
* `plasma` - organic plasma instance
* `dna` - dna containing definitions of organelles and their respective `source` paths.
* `root` - organelles root, will be prepended **only when `source` starts with `./`**
  * defaults to `process.env.ORGANELLES_PATH || process.cwd()`

### buildOne(c [, callback])

Builds once organelle using data wrapped in chemical `c`.

Chemical should have the following structure:

    {
      "source": "relative/path/to/organelle",
      // ... organelle's own dna data
    }

___arguments___
* `c.source` having value typeof
  * `Function` - used as Organelle constructor
  * `String` - used as path to require Organelle implementation

All Modules representing Organelles instantiated by Nucleus are expected to have the following signature

    module.exports = function(plasma, dna) {}

Where:

  * `plasma` is the Nucleus' plasma
  * `dna` is the portion of the dna used to instantiate the Organelle

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

___arguments___
  * `c` as `Object`
    * `c.source` - directly passes control flow to `buildOne`
    * `c.branch` - selects dna node using dot notation namespace query (ex: "branch.innerNode") and iterates through the dna node by constructing all found organelles (those dna branches who have `source` property).
  * `c` as `String` - indicates dna namespace, uses the same control flow as with chemicals having `c.branch`
