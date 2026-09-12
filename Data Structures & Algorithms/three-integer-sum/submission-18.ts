class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let i = 0;
        let j = i + 1;
        let k = nums.length - 1;
        let finalAns = [];
        const sortedArr = nums.sort((a,b)=>a-b)
        console.log("SORTED:", sortedArr);
       
        // console.log(sortedArr)
        while(i<sortedArr.length - 1){
            
            if(i > 0 && sortedArr[i] === sortedArr[i-1]){
                i++;
                continue;
            }
            j = i + 1;
            k = sortedArr.length - 1;
            while(j<k){
               
                if(sortedArr[j] + sortedArr[k] +sortedArr[i] === 0){
                    
                    
                    finalAns.push([sortedArr[i], sortedArr[j], sortedArr[k]]);

                
                    j++;
                    k--;   
                    while(j<k && sortedArr[j] === sortedArr[j-1]){
                        j++;
                    }
                     while(j<k && sortedArr[k] === sortedArr[k+1]){
                        k--;
                    }
                   
                }else if(sortedArr[j] + sortedArr[k] + sortedArr[i] > 0 ){
                    k--;
                }else{
                    j++;
                }
            }
          
            i++;
            
        }
        return finalAns;      
    }
}
