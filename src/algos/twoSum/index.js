export default function twoSum(nums, target) {
    let indexes = [];
    for(let i = 0; i < nums.length; i++) {
        let secondIndex;
        const addNumTo = nums.find((num, index) => {
            if(index <= i) return;
            if(target === (nums[i]+num)) {
                secondIndex = index;
                return true;
            }
        });
        if(addNumTo !== undefined) {
          indexes.push(i, secondIndex)
            break;
        }
    }
    return indexes;
};