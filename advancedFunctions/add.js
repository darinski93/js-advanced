function solution(input) {

    return function (x) {
        return input + x
    }


}

let add5 = solution(5);

console.log(add5(2));
console.log(add5(3));

