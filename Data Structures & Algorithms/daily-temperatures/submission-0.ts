class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
         let ansArr = new Array(temperatures.length).fill(0);
        let stack = [0];
        for(let i = 1; i < temperatures.length; i++){
            if(stack.length > 0){
                if(temperatures[stack[stack.length - 1]] >= temperatures[i]){
                    stack.push(i);
                }else{
                    while(stack.length !== 0 && temperatures[stack[stack.length - 1]] < temperatures[i]){
                        let previousIndex = stack.pop()!;
                        ansArr[previousIndex] = i - previousIndex;
                    }
                    stack.push(i);
                }
            }
        }
        return ansArr;
    }
}
