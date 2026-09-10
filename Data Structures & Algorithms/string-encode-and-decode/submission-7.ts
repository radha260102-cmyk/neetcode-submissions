class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   encode(strs: string[]): string {
        // const encodedstring = strs.split('')
        let finalEncodedString = "";
        for(const s of strs){
            // console.log(s.length + '#' + s);
            finalEncodedString += s.length + '#' + s
            
        }
       
        // console.log(finalEncodedString)
        return finalEncodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const resutlt = [];
        let i = 0;
        while(i<str.length){
            let j = i;
            while(str[j] !== "#"){
                j++;
            }

            const length = Number(str.substring(i,j));
            j++;
            const word = str.substring(j, j + length);
            resutlt.push(word);
            i = j+length

        }
        return resutlt
    }
}
