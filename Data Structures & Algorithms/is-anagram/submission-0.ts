class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const map1 = new Map();
        const map2 = new Map();
        if(s.length !== t.length){
            return false
        }
        for(const s1 of s){
            if(map1.has(s1)){
                map1.set(s1, map1.get(s1)+1)
            }else{
                map1.set(s1, 1)
            }
        }
        for(const s1 of t){
            if(map2.has(s1)){
                map2.set(s1, map2.get(s1)+1)
            }else{
                map2.set(s1, 1)
            }
        }
        for(const [key, value] of map1){
            const map2val = map2.get(key);
            console.log(map2val)
            if(!map2val){
                return false;
            }
            if(map2val !== value){
                return false;
            }
        }
        return true;
    }
}
