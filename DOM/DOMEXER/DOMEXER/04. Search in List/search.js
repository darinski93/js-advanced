function search() {



   let towns = Array.from(document.querySelectorAll('ul li'));
   let searchList = document.getElementById('searchText').value
   let counter = 0

   for (let el of towns) {

      let text = el.textContent

      if (text.includes(searchList)) {
         el.style.textDecoration = 'underline'
         el.style.fontWeight = 'bold'
         counter++
      } else {
         el.style.textDecoration = 'none'
         el.style.fontWeight = ''
      }
   }

   document.getElementById('result').textContent = `${counter} matches found`
}
