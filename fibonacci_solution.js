function fibonacci_sequence(n){
    let initial_sequence = [0, 1];
    for (let i = 2; i < n + 1; i++){
        let left_index = i - 2;
        let right_index = i - 1;
        let fib_num = initial_sequence[left_index] + initial_sequence[right_index];
        initial_sequence.push(fib_num);
    }
    return initial_sequence[n];
}

let n = fibonacci_sequence(20);
console.log(n);