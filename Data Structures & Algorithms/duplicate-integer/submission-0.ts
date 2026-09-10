class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const newSet = new Set(nums);
        // console.log(newSet.size, nums.length)
        if(nums.length === newSet.size){
            return false;
        }else{
            return true;
        }
    }
}
