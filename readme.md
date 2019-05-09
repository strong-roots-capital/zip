# zip [![Build status](https://travis-ci.org/strong-roots-capital/zip.svg?branch=master)](https://travis-ci.org/strong-roots-capital/zip) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/zip.svg)](https://npmjs.org/package/@strong-roots-capital/zip) [![codecov](https://codecov.io/gh/strong-roots-capital/zip/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/zip)

> Stitch together two arrays by like-index

Why yet-another `zip`?

I needed a `zip` that

- doesn't modify `Array` prototype
- is strongly-typed
- supports currying

## Install

```shell
npm install @strong-roots-capital/zip
```

## Use

```typescript
import zip from '@strong-roots-capital/zip'

/* Basic use */
const a = [1, 2, 3]
const b = ['a', 'b', 'c']
console.log(zip(a, b))
//=>[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]

const zipWithA = zip(a.reverse())
console.log(zipWithA(b))
//=>[ [ 3, 'a' ], [ 2, 'b' ], [ 1, 'c' ] ]
```

## Related

- [small-array-zip](https://github.com/Olian04/small-array-zip)
