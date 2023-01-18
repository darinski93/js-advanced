function rotateArr(arr, param) {

    for (let i = 0; i < param; i++) {


        let el = arr.pop()
        arr.unshift(el)

    }

    console.log(arr.join(' '))

}

rotateArr(['1', 
'2', 
'3', 
'4'], 
2
)