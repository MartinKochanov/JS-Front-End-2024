function loadRepos() {
	const baseUrl = 'https://api.github.com'

	const usernameInputElement = document.getElementById('username')
	const ulElement = document.getElementById('repos')
	const username = usernameInputElement.value;

	ulElement.textContent = '';

	fetch(`${baseUrl}/users/${username}/repos`)
		.then(res => res.json())
		.then(data => {
			for (const repo of data) {
				const liElement = createLiElementForRepo(repo);
				ulElement.appendChild(liElement);
			}
		})
		.catch(err => {
			ulElement.textContent = 'Error'
		})

		usernameInputElement.value = '';
}

function createLiElementForRepo(repo) {
	const liElement = document.createElement('li');
	const aElement = document.createElement('a');
	aElement.textContent = repo.full_name;
	aElement.href = repo.html_url;
	liElement.appendChild(aElement);

	return liElement;
}