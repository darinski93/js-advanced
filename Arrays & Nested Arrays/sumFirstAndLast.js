function firstNLast(arr) {


    let twisted = arr.map(Number)
    let first = twisted.shift()
    let last = twisted.pop()
    let res = first + last

    return res


}

firstNLast(['20', '30', '40'])
