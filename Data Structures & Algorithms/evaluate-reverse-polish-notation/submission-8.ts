class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stackArr = [];
        for(let i = 0; i<tokens.length; i++){
            //console.log(tokens[i])
            if(tokens[i] !== "+" && tokens[i] !== "-" && tokens[i] !== "*" && tokens[i] !== "/"){
                stackArr.push(Number(tokens[i]))
                //console.log(stackArr)
                continue;
            }else{
                // //console.log('go inside')
              
                //console.log('1st check', calc)
                const b = stackArr.pop()!;
                const a = stackArr.pop()!;

                if (tokens[i] === "+") {
                    stackArr.push(a + b);
                }

                if (tokens[i] === "-") {
                    stackArr.push(a - b);
                }

                if (tokens[i] === "*") {
                    stackArr.push(a * b);
                }

                if (tokens[i] === "/") {
                    stackArr.push(Math.trunc(a / b));
                }
                
            }
          
        }
        //console.log('lala',stackArr)
        return stackArr[0];
    }
}
