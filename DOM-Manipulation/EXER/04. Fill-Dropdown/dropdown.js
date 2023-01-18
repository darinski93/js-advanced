function addItem() {


    let text = document.getElementById('newItemText')
    let value = document.getElementById('newItemValue')

    let option = document.createElement('option')
    option.textContent = text.value + value.value
    
    let selectMenu = document.getElementById('menu')
    selectMenu.appendChild(option)

    text.value = ''
    value.value = ''

}