/**
 * Merge sort is using divide and conquer approach, by dividng the data set, performing sort on each subset and then joining them together.
 * Here is the general algorithm:
 *   1. Split the data in half
 *   2. Continue dividing the subsets of data until left with only one element in each array
 *   3. Starting with the single elements sets, merge the subsets so that each merged subset is sorted.
 *   4. Repeat step 3 till end up with sorted set of the same length as the received data set
 */

function mergeTwoArrays(left, right) {
     const array = [];
     while(left.length && right.length) {
         if(left[0] < right[0]) {
             array.push(left.shift())
         } else {
            array.push(right.shift());
         }
     }
     return [...array, ...right, ...left];
}

export function merge(array) {
    const halfLength = array.length / 2;

    if(array.length < 2) return array;
    return mergeTwoArrays(merge(array.slice(0, halfLength)), merge(array.slice(halfLength, array.length)));
}