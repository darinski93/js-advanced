function townPopulation(arr) {



    let splitter = arr.map(x => {
        let element = x.split(' <-> ')

        return {
            name: element[0],
            population: Number(element[1])
        }
    })

    let newObj = {}

    for (let town of splitter) {

        if (newObj[town.name] === undefined) {
            newObj[town.name] = town.population
        } else {
            newObj[town.name] += town.population
        }
    }
    
    let entries = Object.entries(newObj).map(x => console.log(x.join(' : ')))
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)