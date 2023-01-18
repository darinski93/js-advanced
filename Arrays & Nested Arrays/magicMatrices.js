function magicMatrices(matrix) {


    let firstRow = 0;
    let secondRow = 0;
    let firstCol = 0;
    let secondCol = 0;
    let isMagic = true;

    for (let i = 0; i < matrix.length; i++) {
        firstRow += matrix[i][0]
        secondRow += matrix[i][1]
        firstCol += matrix[0][i]
        secondCol += matrix[1][i]
    };

    if (firstRow == secondRow &&
        firstRow == firstCol &&
        firstRow == secondCol) {
        console.log(isMagic)
    } else {
        console.log(!isMagic)
    };

}
magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])