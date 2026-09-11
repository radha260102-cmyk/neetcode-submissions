class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const finalOutput = [];
        const fonalOutputIndex = [];
        const strsnew = strs[0];
        // console.log(strsnew)
        for(const str in strs){
            const innnerOutputArr = [];
            console.log('safsafsadf', str, fonalOutputIndex, fonalOutputIndex.includes(str))
             if(fonalOutputIndex.includes(Number(str))){
                console.log('outside check',fonalOutputIndex)
                continue;
            }
            for(let i : any = Number(str) + 1; i<strs.length; i++){
                
                if(fonalOutputIndex.includes(i)){
                    console.log(fonalOutputIndex)
                    continue;
                }
                console.log(finalOutput)
                console.log(strs[i], strs[str])
                const str2 = strs[i]
                const str1 = strs[str]
                if(str1.length != str2.length){
                    continue;
                }
                const map1 = new Map();
                const map2 = new Map();
                for(const s of str1){
                    // console.log(str1)
                    if(map1.has(s)){
                        map1.set(s, map1.get(s)+1)
                    }else{
                        map1.set(s, 1)
                    }
                    
                }
                for(const s1 of str2){
                    // console.log(str2) 
                     if(map2.has(s1)){
                        map2.set(s1, map2.get(s1)+1)
                    }else{
                        map2.set(s1, 1)
                    }   
                }
                let isAnagram = true;
                for(const [key, value] of map1){
                    
                    if(map2.get(key) !== value){
                        isAnagram = false;
                    }
                }
                if(!innnerOutputArr.includes(str1)){
                    console.log('this is trouble', str1, fonalOutputIndex)
                        innnerOutputArr.push(str1)
                    // }else{
                    }    
                if(isAnagram){
                    
                    fonalOutputIndex.push(i)
                    innnerOutputArr.push(str2)

                }
                // else{
                //      if(!innnerOutputArr.includes(str1)){
                //         // innnerOutputArr.push(str1, str2)
                //         innnerOutputArr.push(str1)
                //     }  
                // }
                // console.log(map1, map2)
            }
            if(innnerOutputArr.length !== 0){
                finalOutput.push(innnerOutputArr)
            }
            if(Number(str) === strs.length - 1){
                if(!fonalOutputIndex.includes(strs.length - 1)){
                    finalOutput.push(strs[str])
                }
            }
           
            
            
        }
        return finalOutput;


    }
}
