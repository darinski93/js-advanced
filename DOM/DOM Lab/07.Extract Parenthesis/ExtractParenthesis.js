function extract(content) {

    let text = document.getElementById('content').innerText
    let regex = /\(([^)]+)\)/g

    let matched = [...text.match(regex)].join('; ')
    matched = matched.replace(/\(/g, '');
    matched = matched.replace(/\)/g, '');

    document.getElementById('content').innerText = matched
    return matched
}