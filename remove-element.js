function removeElement(nums, val) {
    var length = 0;
    for (var i = 0; i < nums.length - length; i++) {
        if (nums[i] !== val) {
            nums[i - 1] = nums[i];
            length++;
        }
    }
    return length;
}
console.log(removeElement([333, 555, 123], 123));
