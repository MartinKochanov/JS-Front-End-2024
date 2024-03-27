function create(words) {

   const contentElement = document.getElementById('content');

   for (const word of words) {
      const newDivElement = document.createElement('div');
      const newPElement = document.createElement('p');

      newPElement.textContent = word;
      newPElement.style.display = 'none';

      newDivElement.appendChild(newPElement);
      newDivElement.addEventListener('click', () => {
         newDivElement.querySelector('p').style.display = 'block';
      })

      contentElement.appendChild(newDivElement);
   }
}