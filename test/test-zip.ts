import test from 'ava'

/**
 * Library under test
 */

import zip from '../src/zip'

test('should zip two arrays of equal length', t => {
    const a = [1, 2, 3]
    const b = ['a', 'b', 'c']
    const expected = [
        [1, 'a'],
        [2, 'b'],
        [3, 'c']
    ]
    const zipped = zip(a, b)
    t.deepEqual(expected, zipped)
})

test('should support function currying', t => {
    const a = [1, 2, 3]
    const zipWithA = zip(a)

    const b = ['a', 'b', 'c']
    const expected = [
        [1, 'a'],
        [2, 'b'],
        [3, 'c']
    ]
    const zipped = zipWithA(b)
    t.deepEqual(expected, zipped)
    t.pass()
})

test('should use undefined for non-existing element of b', t => {
    const a = [1, 2, 3]
    const b: number[] = []
    const expected = [
        [1, undefined],
        [2, undefined],
        [3, undefined]
    ]
    const zipped = zip(a, b)
    t.deepEqual(expected, zipped)
})

/* Note: is prevented by typescript, requires JavaScript to test */
// test('should use empty list when b is null', t => {
//     const a = [1, 2, 3]
//     const b = null
//     const expected = [
//         [1, undefined],
//         [2, undefined],
//         [3, undefined]
//     ]
//     const zipped = zip(a, b)
//     t.deepEqual(expected, zipped)
// })

/* Note: is prevented by typescript, requires JavaScript to test */
// test('should return empty list when a is null', t => {
//     const a = null
//     const b = [1, 2, 3]
//     const expected: any[] = []
//     const zipped = zip(a, b)
//     t.deepEqual(expected, zipped)
// })

test('should return list with length of a when a is shorter than b', t => {
    const a = [1, 2, 3]
    const b: number[] = [11, 12, 13, 14, 15]
    const expected = [
        [1, 11],
        [2, 12],
        [3, 13]
    ]
    const zipped = zip(a, b)
    t.deepEqual(expected, zipped)
})
