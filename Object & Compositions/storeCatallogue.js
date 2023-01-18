function storeCatallogue(data) {


    let obj = {}

    data.sort((a, b) => a.localeCompare(b))


    for (let el of data) {

    
        let firstCh = el[0]
        obj[firstCh] = firstCh

        if (obj[firstCh] === el[0]) {
            obj[el] = el

        }
    }

    let values = Object.values(obj)

    for (let el of values) {

        el = el.split(' : ').join(': ')
        console.log(el)
    }
}


storeCatallogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)