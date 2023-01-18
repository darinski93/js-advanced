function listOfNames(arr) {

    let current = 1

    let sorted = arr.sort((a, b) => a.localeCompare(b)).map(x => {
        console.log(current + '.' + x)
        current++
    })



}
listOfNames(["John", "Bob", "Christina", "Ema"])