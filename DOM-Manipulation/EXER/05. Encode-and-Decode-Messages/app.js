function encodeAndDecodeMessages() {


    let buttons = [...document.querySelectorAll('button')]

    let sendButton = buttons[0]
    let decodeButton = buttons[1]
    sendButton.addEventListener('click', sendIt)


    function sendIt() {

        let newText = ''
        let textAreaOne = document.querySelectorAll('textarea')[0]

        let elements = [...textAreaOne.value]

        for (let i = 0; i < elements.length; i++) {
            let ch = elements[i].charCodeAt()
            newText += String.fromCharCode(ch + 1)
        }
        let textareaTwo = document.querySelectorAll('textarea')[1]
        textareaTwo.value = newText
        let current = textAreaOne
        current.value = ''
    }

    decodeButton.addEventListener('click', decodeIt)

    function decodeIt() {

        let textareaTwo = document.querySelectorAll('textarea')[1]
        let currentText = textareaTwo.value
        let secondNew = ''
        let elements = [...currentText]


        for (let i = 0; i < elements.length; i++) {
            let ch = elements[i].charCodeAt()
            secondNew += String.fromCharCode(ch - 1)
        }
        textareaTwo.value = secondNew
    }

}

