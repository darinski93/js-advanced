function cityRecord(...params) {

    return {
        name: params[0],
        population: Number(params[1]),
        treasury: Number(params[2])

    }


}

cityRecord('Tortuga',
    7000,
    15000
)