/**
 * A collection of optimized utility functions
 */

/**
 * Performs efficient array deduplication using Set
 * @param {Array} arr - Input array to deduplicate
 * @returns {Array} - Deduplicated array
 */
function uniqueArray(arr) {
    return [...new Set(arr)];
}

module.exports = {
    uniqueArray
};
