'use strict';

// searchArr


// Complete this algo
const binarySearch = (array, target) => {
	let searchArr = [...array];

	while (searchArr.length) {
		const middleIdx = Math.floor(searchArr.length / 2);
		const middleVal = searchArr[middleIdx];

		if (middleVal === target) {
			return true;
		} else if (target > middleVal) {
			searchArr = searchArr.slice(middleIdx + 1)
		} else {
			searchArr = searchArr.slice(0, middleIdx)
		}
	}
	
	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
