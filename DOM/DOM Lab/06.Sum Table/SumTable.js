function sumTable() {

    let elements = document.querySelectorAll('table tr')
    let sum = 0

    for (let i = 1; i < elements.length; i++) {

            let kolona = elements[i].children
            let cena = kolona[kolona.length - 1].textContent
            sum += Number(cena)
    
    }
    document.getElementById('sum').textContent = sum
   
}