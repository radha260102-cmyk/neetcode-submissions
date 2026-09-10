class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        for(const n of nums){
            if(map.has(n)){
                map.set(n, map.get(n)+1);
            }else{
                map.set(n,1)
            }
        }
        const finalArr = [];
        const sortedMap = new Map([...map].sort((a,b)=> b[1]-a[1]))
        let i = 0;
        for(const[key,value] of sortedMap){
            // console.log(key)
       
            // console.log(sortedMap)
            finalArr.push(key)
            if(i === k - 1){
                return finalArr;
        
            }
            i++;
        }
        // return finalArr;
    }
}
