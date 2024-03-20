function search() {

   const townListElement = document.getElementById('towns');
   const searchText = document.getElementById('searchText').value;
   const resultElement = document.getElementById('result');
   let counter = 0;

   const townElements = Array.from(townListElement.children)

   for (const townElement of townElements) {
      if(townElement.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         townElement.style.textDecoration = 'underline';
         townElement.style.fontWeight = 'bold';
         counter++;
      }
   }
   
   resultElement.textContent = `${counter} matches found`
}
