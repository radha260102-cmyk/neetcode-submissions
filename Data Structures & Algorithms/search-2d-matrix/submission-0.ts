class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const rows = matrix.length;
        const cols = matrix[0].length;
        let left = 0;
        let right = rows * cols - 1;

        while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Convert 1D index to 2D index
        const row = Math.floor(mid / cols);
        const col = mid % cols;

        if (matrix[row][col] === target) {
            return true;
        }

        if (matrix[row][col] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
    }
}
