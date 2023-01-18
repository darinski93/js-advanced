function extractText() {

    let els = new Array(document.getElementById('items').textContent)
    let textArea = document.querySelector('#result')
    els.forEach(x => {
        textArea.value += x
    });

}