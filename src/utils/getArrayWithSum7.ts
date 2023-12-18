function findPatternsForSum(arr: number[], targetSum: number): number[] {
    const result: number[] = [];
    let foundPattern = false;

    function generatePatterns(
        currentIndex: number,
        currentSum: number,
        currentPattern: number[]
    ): void {
        if (foundPattern) {
            return; // Stop further recursion if a valid pattern has been found
        }

        if (currentSum === targetSum) {
            // If the current pattern sum matches the target sum, add it to the result
            result.push(...currentPattern);
            foundPattern = true; // Set the flag to stop further recursion
            return;
        }

        for (let i = currentIndex; i < arr.length; i++) {
            // Include the current element in the pattern and recursively check for other elements
            generatePatterns(i + 1, currentSum + arr[i], [
                ...currentPattern,
                arr[i],
            ]);
        }
    }

    // Start generating patterns from the beginning of the array
    generatePatterns(0, 0, []);

    return result;
}

export default findPatternsForSum;
