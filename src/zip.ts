/**
 * zip
 * Stitch together two arrays by like-index
 */


/**
 * Stitch together two arrays by like-index.
 *
 * @remarks
 * This function
 * - does not mutate either parameter
 * - supports currying
 * - replaces `null` or `undefined` `a` with `[]`
 * - replaces `null` `b` with `[]`
 * - returns a list of same length as `a`
 * - uses `undefined` for missing elements of `b` when `b` is shorter than `a`
 *
 * @param a - Array of values to stitch together with values from `b`
 * @param b - Array of values to stitch together with values from `a`
 * @returns Array of `a` stitched together with `b` by like-index, or
 * function to do the same
 */
function zip<T = any>(a: ReadonlyArray<T>): <U = any>(b: ReadonlyArray<U>) => [T, U][];
function zip<T = any, U = any>(a: ReadonlyArray<T>, b: ReadonlyArray<U>): [T, U][];
function zip<T = any, U = any>(a: ReadonlyArray<T>, b?: ReadonlyArray<U>): (<U>(b: ReadonlyArray<U>) => [T, U][]) | [T, U][] {

    const safeA = a === undefined || a === null ? [] : a

    const curried = <U = any>(b: ReadonlyArray<U>): [T, U][] => safeA.map((x, i) => [x, b[i]])

    if (b === undefined) {
        return curried
    }

    const safeB = b === null ? [] : b
    return curried(safeB)
}

export default zip
