function lockedProfile() {

    let buttons = Array.from(document.querySelectorAll('button'))

    for (let el of buttons) {
        el.addEventListener('click', showMore)
    }

    function showMore(event) {
        let button = event.target
        let personOne = button.parentNode;
        let info = personOne.getElementsByTagName('div')[0]
        let status = personOne.querySelector('input[type=radio]:checked').value


        if (status === 'unlock') {
            if (button.textContent === 'Show more') {

                info.style.display = 'inline-block'
                button.textContent = 'Hide it';
                debugger
            } else if (button.textContent = 'Hide it') {
                info.style.display = 'none'
                button.innerHTML = 'Show more'

            }
        }
    }
}