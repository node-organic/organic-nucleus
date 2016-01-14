# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0] - 2016-01-14

**The release contains breaking changes towards v0.0.4**
Upgrade path requires modification of `dna.source` values to start with `./`.

### Changed
- constructor gets third argument - `new Nucleus(plasma, dna, root)`
- root defaults to `process.env.ORGANELLES_PATH || process.cwd()`
- `buildOne` preprends `root` only when source path is relative `./`

## [0.0.4] - 2016-01-13
### Changed
- uses `process.env.NODE_PATH || process.cwd()` for organelles root
