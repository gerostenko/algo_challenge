/**
 * Quick Sort uses divide and conquer approach, which means that this sort if breaking down the problem into subproblems to perform the task;
 * Can be implemented recursively or itertivaly.
 *  Algorithm:
 *  1. Select an element in a set (pivot), it should be either the first or the last element in the array.
 *  2. Rearrange the items in the set so that all the items to the left of the pivot are smaller than the pivot, and all the elements to the right are larger than the pivot (partitioning).
 *     If an item has the same value as the pivot, it can go either side,
 *  3. Repeat step 2 for left and right sides of the pivot, until reach the end on both sides.
 *
 * Explanation: https://www.youtube.com/watch?v=ywWBy6J5gz8&ab_channel=AlgoRythmics
 */

 function partition(array, start, end) {
     const pivot = array[end];
     let pivotIndex = start;

     for (let i = start; i < end; i++) {
        if(array[i] < pivot) {
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            pivotIndex++;
        }
     }
     [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]]; //this will place pivot item at the
     return pivotIndex;
 }

 function quickSort(array, start, end){
    if (start >= end) {
        return;
    }
    const index = partition(array, start, end);
    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);
 }

 export function quickSortRecursive(array) {
    quickSort(array, 0, array.length - 1);
 }