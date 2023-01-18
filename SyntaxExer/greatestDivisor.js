function greatestDivisor(one, two) {

    let maxNumber = Math.max(one, two)
    let actualNum;


    for (let i = 0; i < maxNumber; i++) {

        if (one % i === 0 && two % i === 0) {

            actualNum = Math.max(Number(i))

        }
    }

    console.log(actualNum)

}
greatestDivisor(2154, 458)