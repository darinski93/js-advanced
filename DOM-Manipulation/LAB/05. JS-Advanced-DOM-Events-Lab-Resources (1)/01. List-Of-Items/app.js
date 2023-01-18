function addItem() {

    let newLi = document.createElement('li')
    let text = document.getElementById("newItemText").value
    newLi.textContent = text
    document.getElementById("items").appendChild(newLi);
}