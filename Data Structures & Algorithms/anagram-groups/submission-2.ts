class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map();
        for(const s of strs){
            const key = s.split('').sort().join('');
            console.log(key)
            if(!map.has(key)){
                map.set(key,[])
            }
            console.log(map)
            const group = map.get(key)
            console.log(group)
            group.push(s);
        }
        return Array.from(map.values())
    }
}
