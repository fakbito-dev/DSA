//Given a sorted array of distinct integers and a target value, return he index if the target is found.
//If not, return the index where it would be if it were inserted in order.

//You must write an algorithm with O(log n) runtime complexity.


//Example 1:

//Input: nums = [1,3,5,6], target = 5
//Output: 2

//Example 2:

//Input: nums = [1,3,5,6], target = 2
//Output: 1

//Example 3:

//Input: nums = [1,3,5,6], target = 7
//Output: 4

function searchInsert(nums,target) {
  if (nums.includes(target)) return nums.indexOf(target);
let i = 0;

  while (i <= nums.length - 1) {
    if (nums[i] - 1 === target) {
      return i
    }
    if (nums[i] + 1 === target) {
      return i + 1;
    }
    i++;
  }
  return 0;
}
console.log(searchInsert([1,3,5,6],5))
