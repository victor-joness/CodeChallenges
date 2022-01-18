//testando arrow function


function modifyArray(nums) {
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 1){
            nums[i] = nums[i] * 3;
        }else if(nums[i] % 2 == 0){
            nums[i] = nums[i] * 2;
        }
    }

    return nums
}


console.log(modifyArray([1,2,3,4,5]));