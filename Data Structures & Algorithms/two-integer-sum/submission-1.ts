class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let finalAns = [];
        for(const num in nums){
            // console.log(num)
            for(let i : any = nums.length; i>num; i--){
                // console.log(i)
                if(nums[num] + nums[i] === target){
                    console.log(nums[num], nums[i], target)
                    finalAns =  [Number(num), i]
                }
            }
        }
        return finalAns
    }
}
