class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

        let i = 0;
        let j = 0;
        let maxLength = 0;

        const set = new Set<string>();

        while (j < s.length) {

            if (!set.has(s[j])) {

                // Add current character
                set.add(s[j]);

                // Calculate current window length
                maxLength = Math.max(maxLength, j - i + 1);

                // Move right pointer
                j++;

            } else {

                // Duplicate found
                // Remove character from left
                set.delete(s[i]);

                // Move left pointer
                i++;
            }
        }

        return maxLength;
    }
}