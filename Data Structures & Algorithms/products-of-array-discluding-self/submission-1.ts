class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let totalPrd = 1;
        let zeroCount = 0;
        for(let i = 0; i<nums.length; i++){
            if(nums[i] === 0){
                zeroCount++;
            }else{
                totalPrd = totalPrd * nums[i];  

            }
        }
        const finalArr = [];
         for(let i = 0; i<nums.length; i++){
            if(zeroCount > 1){
                finalArr.push(0)
            }else if(zeroCount === 1){
                if(nums[i] === 0){
                    finalArr.push(totalPrd)
                    
                }else{
                    finalArr.push(0)
                }
            }else{
                finalArr.push(totalPrd / nums[i])
            }
            
        }
        return finalArr;
    }
}
