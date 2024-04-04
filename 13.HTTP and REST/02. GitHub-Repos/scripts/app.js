function loadRepos() {
   const baseUrl = 'https://api.github.com/users/testnakov/repos'
   const resultDivElement = document.getElementById('res');

   fetch(baseUrl)
   .then(res => res.text())
   .then(data => {
      resultDivElement.textContent = data;
   })
   .catch(err => console.log(err))


}