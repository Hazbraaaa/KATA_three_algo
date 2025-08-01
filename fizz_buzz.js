function fizzbuzz(n) {
    const answer = [];

    for (i = 1; i <= n ; i++) {
        answer.push(i);
    }
    
    for (i = 0; i < n ; i++) {
        if (answer[i] % 3 === 0 && answer[i] % 5 === 0) {
            answer[i] = "FizzBuzz";
        }
        else if (answer[i] % 3 === 0) {
            answer[i] = "Fizz";
        }
        else if (answer[i] % 5 === 0) {
            answer[i] = "Buzz";
        }
        else {
            answer[i] = String(answer[i]);
        }
    }
    return answer;
}

console.log(fizzbuzz(15));