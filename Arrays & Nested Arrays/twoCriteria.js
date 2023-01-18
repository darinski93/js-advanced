function twoCriteria(arr) {


    let sorted = arr.sort((a, b) => {

        return a.localeCompare(b)
    }).sort((a, b) => a.length - b.length).map(x =>
        console.log(x))


}
twoCriteria(['test',
    'Deny',
    'omen',
    'Default']
)