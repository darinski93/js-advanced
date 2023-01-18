function extractArr(arr) {


    let newArr = []

    let bigNum = arr.shift()
    newArr.push(bigNum)

    for (let el of arr) {

        if (bigNum <= el) {

            newArr.push(el)
            bigNum = el
        }
    }

    return newArr

}
extractArr([1, 3, 8, 4, 10, 12, 3, 2, 24])