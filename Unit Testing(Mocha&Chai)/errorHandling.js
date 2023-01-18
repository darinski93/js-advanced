function errorHandling(arr, startIndex, endIndex) {


    let res = Array.isArray(arr)


    if (!res) {
        return NaN
    }
    if (startIndex <= 0) {
        startIndex = 0
    }
    if (endIndex >= arr.length) {
        endIndex = arr.length - 1

    }

    let sum = 0

    for (let i = startIndex; i <= endIndex; i++) {
        arr[i] = Number(arr[i])
        sum += arr[i]

    }

    let el = '.'
    sum = sum.toString().split('')


    if (sum.includes(el)) {
        sum = sum.join('')
        sum = Number(sum)
        sum = sum.toFixed(1)

        return Number(sum)
    } else {
        sum = sum.join('')
        sum = Number(sum)
        return sum
    }





}

errorHandling(3, 300)