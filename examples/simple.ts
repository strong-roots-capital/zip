import zip from '../src/zip'

/* Basic use */
const a = [1, 2, 3]
const b = ['a', 'b', 'c']
console.log(zip(a, b))
//=>[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]

const zipWithA = zip(a.reverse())
console.log(zipWithA(b))
//=>[ [ 3, 'a' ], [ 2, 'b' ], [ 1, 'c' ] ]
