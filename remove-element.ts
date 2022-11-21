function removeElement(nums: number[], val: number): number {
  let length = 0;
  for (let i = 0; i < nums.length - length; i++) {
    if (nums[i] !== val) {
      nums[i - 1] = nums[i]
      length++
    }
  }
  return length
}
console.log(removeElement([333, 555, 123], 123))
