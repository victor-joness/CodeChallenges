//exercicio sobre array

function getSecond(nums){
    let first = 0;
    let second = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        }

        if (nums[i] > second && nums[i] < first) {
            second = nums[i];
        }
    }

    return second;
    
}


console.log(getSecond([2,3,6,7,5]));