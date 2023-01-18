function cookingByNumbers(num, ...operations) {

    num = Number(num)

    for (let i = 0; i < operations.length; i++) {


        if (operations[i] === 'chop') {
            num = num / 2
            console.log(num)
        } else if (operations[i] === 'dice') {
            num = Math.sqrt(num)
            console.log(num)
        } else if (operations[i] === 'spice') {
            num += 1
            console.log(num)
        } else if (operations[i] === 'bake') {
            num = num * 3
            console.log(num)
        } else if (operations[i] === 'fillet') {
            num = num * 0.80
            console.log(num.toFixed(1))
        }

    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')