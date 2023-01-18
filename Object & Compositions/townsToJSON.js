function townToJSON(input) {


    let newo = {}
    let newArr = []

    let info = input.shift(0).split(' ')
    for (let i = 0; i < info.length; i++) {

        if (i % 2 !== 0) {

            newo[info[i]] = ''

        }
    }


    for (let el of input) {

        let [nishto, town, lati, longi] = el.split(/\s*\|\s*/g)

        newo = {

            Town: town,
            Latitude: parseFloat(Number(lati).toFixed(2)),
            Longitude: parseFloat(Number(longi).toFixed(2))
        }

        newArr.push(newo)
    }
    newArr = JSON.stringify(newArr)
    console.log(newArr)



}

townToJSON(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'])
