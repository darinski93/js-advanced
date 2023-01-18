function solve() {

  let input = document.getElementById('input').value
  let output = document.getElementById('output')
  let text = input.split('.')
  output.textContent = ""



  for (let i = 0; i < text.length - 1; i += 3) {

    let paragraph = []


    for (let j = 0; j < 3; j++) {
      if (text[i + j]) {
        paragraph.push(text[i + j])
      }
    }
    let addedText = paragraph.join('.') + '.'
    output.innerHTML += `<p>${addedText}</p>`
  }


}
