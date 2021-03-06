# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [major.minor.patch] - YYYY-MM-DD

### Changed
### Added
### Removed

## 3.0.0 - 2019-09-10

:warning: the release contains important changes towards v2.0.0 when used in node

Any organelle source paths found in dna branches to be build will be passed to custom [path resolving method](https://github.com/browserify/resolve) with base dir the one passed to Nucleus' `root` argument during construction.

This allows more fine grained organelles construction while using the nucleus symlinked & alike on different than the cell's orignal codebase location.

## 2.0.0 - 2018-04-15

**The release contains breaking changes towards v1.0.0 when used in browser**
Effective when the library is compiled/packaged for browser usage and the compiler respects package.json's `browser` property. 

Breaking change is that `dna.source` is **only** expected to be Organelle's class implementation.

## 1.0.0 - 2016-01-14

**The release contains breaking changes towards v0.0.4**
Upgrade path requires modification of `dna.source` values to start with `./`.

### Changed
- constructor gets third argument - `new Nucleus(plasma, dna, root)`
- root defaults to `process.env.ORGANELLES_PATH || process.cwd()`
- `buildOne` preprends `root` only when source path is relative `./`

## 0.0.4 - 2016-01-13
### Changed
- uses `process.env.NODE_PATH || process.cwd()` for organelles root
