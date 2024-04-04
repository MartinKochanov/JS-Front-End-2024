function loadCommits() {

    const mainUrl = 'https://api.github.com';

    const usernameInputElement = document.getElementById('username');
    const repoInputElement = document.getElementById('repo');
    const commitsUlElement = document.getElementById('commits');

    commitsUlElement.textContent = '';

    const username = usernameInputElement.value;
    const repoName = repoInputElement.value;


    fetch(`${mainUrl}/repos/${username}/${repoName}/commits`)
        .then(res => res.json())
        .then(data => {
            for (const commit of data) {
                const newLiElement = createLiElementForCommit(commit);
                commitsUlElement.appendChild(newLiElement);
            }
        })
        .catch(err => {
            const newLiElement = createErrorLiElement();
            commitsUlElement.appendChild(newLiElement);
        })

    usernameInputElement.value = '';
    repoInputElement.value = '';
}

function createLiElementForCommit(commit) {
    const newLiElement = document.createElement('li');
    const newPElement = document.createElement('p');

    newPElement.textContent = `${commit.commit.author.name}: ${commit.commit.message}`
    newLiElement.appendChild(newPElement);

    return newLiElement;
}

function createErrorLiElement() {
    const newLiElement = document.createElement('li');
    const newPElement = document.createElement('p');

    newPElement.textContent = 'Error:404 (Not Found)'
    newLiElement.appendChild(newPElement);

    return newLiElement;
}