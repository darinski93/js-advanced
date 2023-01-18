function oddPositions(arr) {


    let newArr = []

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            newArr.push(arr[i])
        }
    }
    let sorted = newArr.map(x => x * 2)
        .reverse()
        .join(' ');

    console.log(sorted)



}

oddPositions([3, 0, 10, 4, 7, 3])