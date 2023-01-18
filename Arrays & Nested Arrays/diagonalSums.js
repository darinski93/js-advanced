function diagonalSum(matrix) {


    let firstDiago = 0
    let secondDiago = 0
    let newArr = []

    for (let row = 0; row < matrix.length; row++) {


        firstDiago += matrix[row][row]
        secondDiago += matrix[row][matrix.length - row - 1]

    }


    newArr.push(firstDiago, secondDiago)
    console.log(newArr.join(' '))


}

diagonalSum([[20, 40],
[10, 60]]

)