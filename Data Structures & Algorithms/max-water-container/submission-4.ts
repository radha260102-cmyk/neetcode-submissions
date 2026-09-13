class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0;
        let j = heights.length - 1;
        let maxArea = 0;
        while(i < j){
            let count = (j - i) * Math.min(heights[i], heights[j]);
            // console.log(count, heights[j], heights[i])
            if(count > maxArea){
                maxArea = count;
                // i++; j--;
            }
            if(heights[i] < heights[j]){
                i++;
            }else{
                j--;
            }
        }
        // console.log(maxArea)
        return maxArea;
    }
}
