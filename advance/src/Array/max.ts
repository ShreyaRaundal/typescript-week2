function getMax(nums:number[]){
    let maxVal=-1234567;

    for(let i=0;i<nums.length;i++){
        if(nums[i]>maxVal){
            maxVal=nums[i];
        }   
    }
    return maxVal;
}