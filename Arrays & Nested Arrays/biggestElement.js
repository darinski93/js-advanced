function biggestElement(matrix) {


    let bigNum = matrix.join().split(',').map(Number).sort((a,b) => a - b).pop()

    console.log(bigNum)

}
biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])