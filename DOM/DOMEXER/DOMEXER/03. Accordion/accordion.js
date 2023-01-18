function toggle() {

    let button = document.querySelector('span.button')
    let hidden = document.getElementById('extra')

    if (button.textContent == 'More') {

        hidden.style.display = 'block';
        button.textContent = 'Less';

    } else if (button.textContent == 'Less') {

        hidden.style.display = 'none';
        button.textContent = 'More';
    }

}