function editElement(ref, match, replacer) {

    let text = ref.textContent;
    let macthed = new RegExp(match, 'g')
    let replaced = text.replace(macthed, replacer)
    ref.textContent = replaced


}

