function previousDay(year, month, day){



    let date = new Date(year, month - 1, day - 1)
    
    let newDay = date.getDate()
    let newMonth = date.getMonth() + 1
    let newYear = date.getFullYear()
    console.log(`${newYear}-${newMonth}-${newDay}`)




}

previousDay(2016, 9, 30)