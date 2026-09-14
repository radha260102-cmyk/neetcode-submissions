class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let fullarr = [];
        let isOk = true;
        // console.log(fullarr);
        if(s.length === 0 || s.length === 1){
            return false;
        }
        for(let i = 0; i<s.length; i++){
            if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
                fullarr.push(s[i]);
                continue;
            }
            if(s[i] === ")"){
                if(fullarr[fullarr.length - 1] === "("){
                    fullarr.pop();
                }else{
                    return false;
                }
            }
            if(s[i] === "}"){
                if(fullarr[fullarr.length - 1] === "{"){
                    fullarr.pop();
                }else{
                    return false;
                }
            }
            if(s[i] === "]"){
                if(fullarr[fullarr.length - 1] === "["){
                    fullarr.pop();
                }else{
                    return false;
                }
            }
        }
        if(fullarr.length === 0){
            return true;
        }else{
            return false;
        }
        
    }
}
