function wordsUpperCase(text) {

    let pattern = /\w+/gm
    let matched = text.match(pattern).join(", ")
    

    console.log(matched.toUpperCase())


}

wordsUpperCase('Hi, how are you?')