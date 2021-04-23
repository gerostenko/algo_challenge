export function binarySearch(array, target) {

    let rangeStart = 0;
    let rangeEnd = array.length - 1;

    while(rangeStart <= rangeEnd) {
        let index = Math.floor((rangeStart + rangeEnd) / 2);

        if(array[index] > target) {
            rangeEnd = index -1;
        } else if(array[index] < target) {
            rangeStart = index + 1;
        } else {
            return index;
        }
    }
    return -1;
}

export function binarySearchRecursive(array, target) {
    let rangeStart = 0;
    let rangeEnd = array.length - 1;
    return binarySearchRecursiveStep(array, target, rangeStart, rangeEnd)
}

function binarySearchRecursiveStep(array, target, startIndex, endIndex) {
    if(startIndex > endIndex) return -1;

    const index = Math.floor((startIndex + endIndex) / 2);
    if(array[index] === target) return index;
    return (array[index] < target) ?  binarySearchRecursiveStep(array, target, startIndex + 1, endIndex) : binarySearchRecursiveStep(array, target, startIndex, endIndex - 1);
}