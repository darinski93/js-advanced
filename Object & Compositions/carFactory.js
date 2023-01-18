function carFactory(obj) {


    let newObj = {}
    newObj.model = obj.model

    if (obj.power <= 90) {
        newObj.engine = { power: 90, volume: 1800 }

    } else if (obj.power <= 120) {
        newObj.engine = { power: 120, volume: 2400 }
    } else {
        newObj.engine = { power: 200, volume: 3500 }
    }

    if (obj.carriage === 'hatchback') {
        newObj.carriage = { type: 'hatchback', color: obj.color }
    } else if (obj.carriage === 'coupe') {
        newObj.carriage = { type: 'coupe', color: obj.color }
    }

    let wheels = []
    if (obj.wheelsize % 2 !== 0) {

        wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize]
        newObj.wheels = wheels
    } else {
        obj.wheelsize = obj.wheelsize - 1
        wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize]
        newObj.wheels = wheels
    }

    return newObj
}
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

)