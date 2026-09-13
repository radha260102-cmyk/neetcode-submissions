class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // const sortedArr = prices.sort((a,b)=>a-b);
        let buyPrice = prices[0];
        let sellPrice = prices[0];
        let MajorDiff = sellPrice - buyPrice;
        let MajorDiff1 = sellPrice - buyPrice;
        for(const p in prices){
           
            if(prices[p] < buyPrice){
                
                buyPrice = prices[p];
                sellPrice = prices[p];
                
                 
            }else if(prices[p] > sellPrice){
                // console.log('inside laa')
                sellPrice = prices[p];
                MajorDiff1 = MajorDiff;
                MajorDiff = sellPrice - buyPrice;

            }
            

        }

        return Math.max(MajorDiff1, MajorDiff);

    }
}
