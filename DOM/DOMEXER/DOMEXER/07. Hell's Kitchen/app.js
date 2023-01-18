function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);


   let result = []
   function onClick() {
      let bestRestaurantP = document.querySelector('#bestRestaurant p');

      let bestWorkersP = document.querySelector('#workers p');

      let input = JSON.parse(document.getElementById('inputs').children[1].value)

      for (let info of input) {

         let [name, details] = info.split(' - ');

         if (!result.find(element => element.name === name)) {

            result.push({
               name,
               avgSalary: 0,
               bestSalary: 0,
               sumSalary: 0,
               list: []
            });
         }

            let currentRestaurant = result.find(element => element.name === name)
            details = details && details.split(', ')

            for (let currentWorker of details) {

               updateRestaurant(currentRestaurant, currentWorker)
            }
         
      }
      let bestRestaurant = result.sort((a, b) => b.avgSalary - a.avgSalary)[0];
      bestRestaurantP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`

      let bestWorkers = bestRestaurant.list.sort((a, b) => b.salary - a.salary)

      let buff = ''
      for (let worker of bestWorkers) {
         buff += `Name: ${worker.nameWorker} With Salary: ${worker.salary} `
      }

      bestWorkersP.textContent += buff




   }
   function updateRestaurant(object, worker) {

      let [nameWorker, salary] = worker.split(' ')
      salary = Number(salary)
      object.sumSalary += salary

      if (object.bestSalary < salary) {
         object.bestSalary = salary
      }
      object.list.push({ nameWorker, salary });
      object.avgSalary = object.sumSalary / object.list.length


   }

}