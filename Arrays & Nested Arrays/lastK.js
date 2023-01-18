function lastK(arrLength, sequence) {


    let firstNum = [1]

    for (let i = 0; i < arrLength - 1; i++) {

        let startNum = firstNum.slice(-sequence)
        let sum = 0

        for (let el of startNum) {
            sum += el
        }

        firstNum.push(sum)

    }

    return firstNum
}


let res = lastK(6, 3)
console.log(res)