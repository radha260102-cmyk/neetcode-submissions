class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {

        const stackArr: number[] = [];

        for (let i = 0; i < tokens.length; i++) {

            if (
                tokens[i] !== "+" &&
                tokens[i] !== "-" &&
                tokens[i] !== "*" &&
                tokens[i] !== "/"
            ) {
                stackArr.push(Number(tokens[i]));
                continue;
            }

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

        return stackArr[0];
    }
}