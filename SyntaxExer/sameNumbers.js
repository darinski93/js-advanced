function sameNumbers(num) {


    num = String(num)
    let sum = 0

    let res;

    const firstDigit = num[0]

    for (let i = 0; i < num.length; i++) {

        

        if (firstDigit == num[i]) {
            res = 'true'
        } else {
            res = 'false'
        }

        sum += Number(num[i])

    }
    console.log(res)
    console.log(sum)

}
sameNumbers(222222)