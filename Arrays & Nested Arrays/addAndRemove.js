function addAndRemove(arr) {


    let newArr = []
    let num = 1


    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'add') {
            newArr.push(num)
            num++
        }
        else if (arr[i] === 'remove') {

            newArr.pop()
            num++
        }
    }

    if (newArr.length == 0) {

        console.log('Empty')
    } else {
        newArr.forEach(x => {
            console.log(x)
        })
    }
}





addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']

)