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
        // console.log(str)
        let num = 0;
        const finalOutput = [];
        let finalString = ""
        for(let s = 0; s<str.length; s++){
            // console.log(!Number.isNaN(Number(str[s])));
            
            if(!Number.isNaN(Number(str[s])) && str[s+1] === "#"){
                console.log('new start', s)
                 if(finalString !== "" && s !== 0){
                    finalOutput.push(finalString)
                }
                num = Number(str[s]);
                // console.log(num)
                s = s+1;
                finalString = "";
               
               

                continue;
            }
            // console.log('normals',str[s])
            finalString +=  str[s];
            // console.log('fonal',finalString)
        }
        finalOutput.push(finalString)
        // console.log(finalOutput)
        return finalOutput;
    }
}
