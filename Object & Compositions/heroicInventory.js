function heroicInventory(data) {

    let newArr = []

    for (let el of data) {

        let [name, level, items] = el.split(' / ')
        level = Number(level)
        items = items ? items.split(', ') : []
        newArr.push({name, level, items})

    };
    
    let myJSON = JSON.stringify(newArr)
    console.log(myJSON)

}
heroicInventory(

    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'])
