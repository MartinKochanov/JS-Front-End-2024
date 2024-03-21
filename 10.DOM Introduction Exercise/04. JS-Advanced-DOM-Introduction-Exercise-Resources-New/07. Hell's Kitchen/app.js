function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      const avg = (arr) => (arr.reduce((acc, value) => acc + Number(value.split(' ')[1]), 0) / arr.length).toFixed(2);
      const bestSalary = (arr) => Number(arr[0].split(' ')[1]).toFixed(2);
      const getWorkersInfo = (key) => {
         let result = ''
         for (const worker of restaurants[key]) {
            result += `Name: ${worker.split(' ')[0]} With Salary: ${worker.split(' ')[1]} `;
         }
         return result.trim();
      }

      const restaurants = {};
      const textAreaElement = document.querySelector('#inputs textarea');
      const restoOutputElement = document.querySelector('#bestRestaurant p');
      const workersOutputElement = document.querySelector('#workers p');

      const textAreaText = textAreaElement.value;
      const restaurantsArr = JSON.parse(textAreaText);

      for (const restourant of restaurantsArr) {
         const [restoName, workersString] = restourant.split(' - ');
         const workers = workersString.split(', ');

         if (!restaurants.hasOwnProperty(restoName)) {
            restaurants[restoName] = workers.sort((a, b) => Number(b.split(' ')[1]) - Number(a.split(' ')[1]));
         } else {
            restaurants[restoName] = restaurants[restoName].concat(workers).sort((a, b) => Number(b.split(' ')[1]) - Number(a.split(' ')[1]));
         }
      }

      let bestRestoKey = Object.keys(restaurants)
         .sort((a, b) => avg(restaurants[b]) - avg(restaurants[a]))[0]

      restoOutputElement.textContent = `Name: ${bestRestoKey} Average Salary: ${avg(restaurants[bestRestoKey])} Best Salary: ${bestSalary(restaurants[bestRestoKey])}`
      workersOutputElement.textContent = getWorkersInfo(bestRestoKey);

   }

}