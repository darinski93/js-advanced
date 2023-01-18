function create(words) {


   let mainDiv = document.getElementById('content')

      for(let word of words){

         let div = document.createElement('div');
         let p = document.createElement('p');

         div.addEventListener('click', onClick)
         p.textContent = word;
         p.style.display = 'none'
         div.appendChild(p)
         mainDiv.appendChild(div)

         function onClick(e){
           p.style.display = 'block'
         }
         
      
   } 
} 