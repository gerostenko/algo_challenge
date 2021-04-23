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