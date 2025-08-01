function twoSum(numbers, target) {
    const answer = [];

    for (i = 0; i < numbers.length - 1; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                answer.push(i);
                answer.push(j);
                return answer;
            }
        }
    }
    return "Target impossible with numbers.";
}

console.log(twoSum([2, 15, 11, 7], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))