function addItem() {

    let ul = document.getElementById("items");
    let newLi = document.createElement('li');
    let inputs = document.getElementById('newItemText').value


    document.getElementById('newItemText').value = ''

    newLi.textContent = inputs
    let newText = document.getElementById("items").appendChild(newLi);


    let button = document.createTextNode('[Delete]')
    let remover = document.createElement('a')
    remover.appendChild(button)
    remover.href = '#'
    remover.addEventListener('click', deleteEl)
    newLi.appendChild(remover)
    
    function deleteEl(e) {

        newText.remove()


    }
}