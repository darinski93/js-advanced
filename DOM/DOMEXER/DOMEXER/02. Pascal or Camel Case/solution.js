function solve() {

  let text = document.getElementById('text').value
  let type = document.getElementById('naming-convention').value

  text = text.toLowerCase()

  let res = ''

  text = text.split(' ')

  for (let el of text) {

    switch (type) {

      case 'Pascal Case':
        res += el[0].toUpperCase() + el.substring(1);
        break;

      case 'Camel Case':

        res += el[0].toUpperCase() + el.substring(1);
        res = res[0].toLowerCase() + res.substring(1); break;
       
     default: res = 'Error!'; break;

    }
  }

  document.getElementById('result').innerText = res

}