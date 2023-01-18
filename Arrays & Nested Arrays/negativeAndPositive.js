function negativePositive(arr) {

    let newAr = []

    let sorted = arr.map(Number).map(x => {

        if (x < 0) {
            newAr.unshift(x)
        } else {
            newAr.push(x)
        }
    })

    return newAr


}

negativePositive([3, -2, 0, -1])
