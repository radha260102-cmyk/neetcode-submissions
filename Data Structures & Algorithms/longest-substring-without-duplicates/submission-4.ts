class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

        //sliding window algorithm

        let i = 0;
        let j = 1;
        let maxSubstringN = 0;
        let maxSubString = [s[0]];
        if(s.length === 0){
            return 0;
        }
        while(j<s.length){
            if(!maxSubString.includes(s[j])){
                maxSubString.push(s[j]);
                j++;
            }else{
                if(maxSubString.length > maxSubstringN){
                    maxSubstringN = maxSubString.length;
                }
                
                // console.log(maxSubString, maxSubstringN)
                maxSubString.shift();
                i++;
            }
        }
        if(maxSubString.length !== 0 && maxSubString.length > maxSubstringN){
            maxSubstringN = maxSubString.length
        }
        
        return maxSubstringN;


    }
}
