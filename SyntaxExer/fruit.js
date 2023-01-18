function fruit(type, weight, prize) {

    let money = ((weight * prize) / 1000).toFixed(2)

    let weightToGra = (weight / 1000).toFixed(2)

    console.log(`I need $${money} to buy ${weightToGra} kilograms ${type}.`)


}
fruit('orange', 2500, 1.80)