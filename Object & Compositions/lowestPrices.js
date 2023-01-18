function lowestPrices(data) {

    let obj = {}

    for (let el of data) {

        let [town, product, price] = el.split(' | ')

        price = Number(price)

        if (obj.hasOwnProperty(product)) {
            let currentPrice = obj[product]['price'];

            if (currentPrice > price) {
                obj[product] = { town, price }
            }
        }
        else {
            obj[product] = { town, price }
        }
    }

    let entries = Object.entries(obj)


    for (let [k, v] of entries) {
        console.log(`${k} -> ${v.price} (${v.town})`)
    }


}
lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)