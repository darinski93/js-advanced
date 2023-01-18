function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let data = Array.from(document.querySelectorAll('tbody tr'))
   let searchField = document.getElementById('searchField')

   function onClick() {

      for (let elements of data) {

         elements.classList.remove('select')
         if (elements.textContent.includes(searchField.value)) {

            elements.className = 'select'

         }
      }
   }
}