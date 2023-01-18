function pieceOfAPie(arr, startParam, endParam) {


    let newArr = []
    let start = arr.indexOf(startParam)
    let end = arr.indexOf(endParam)


    for (let i = start; i <= end; i++) {

        newArr.push(arr[i])
    }

    return newArr

}

pieceOfAPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)