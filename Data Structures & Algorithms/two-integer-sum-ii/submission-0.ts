class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = 0;
        let j = numbers.length - 1;
        let finaloutput = [];
        while(i<j){
            // console.log(numbers[i] + numbers[j])
            if(numbers[i] + numbers[j] === target){
                finaloutput = [i + 1, j + 1]
                break;
            }
            else if(numbers[i] + numbers[j] > target){
                j--;
            }
            else{
                i++;
            }
        }
        return finaloutput;
    }
}
