function calorieObject(arr) {

    let obj = {}

    for (let i = 0; i < arr.length; i+=2) {
        
        let products = arr[i]
        let num = arr[i + 1]
        obj[products] = Number(num)
    }
    console.log(obj)
   

}

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])