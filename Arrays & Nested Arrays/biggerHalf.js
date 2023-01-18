function biggerHalf(arr) {



    let sorted = arr.sort((a, b) => {
        return a - b
    }).slice(arr.length / 2)



    return sorted

}

biggerHalf([3, 19, 14, 7, 2, 19, 6])