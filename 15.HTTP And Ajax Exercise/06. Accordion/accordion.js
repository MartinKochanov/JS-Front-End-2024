function solution() {
  const articlesUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
  const articleDetailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details'
  const mainSectionElement = document.getElementById('main');

  fetch(articlesUrl)
    .then(res => res.json())
    .then(data => {
      Object.values(data)
        .forEach(article => {
          mainSectionElement.appendChild(createAcordeon(article));
        })
    })
    .catch(err => {
      console.log(err);
    })

  function createAcordeon(article) {

    let content = '';

    fetch(`${articleDetailsUrl}/${article._id}`)
      .then(res => res.json())
      .then(data => {
        pElement.textContent = data.content;
      })
      .catch(err => {
        console.log(err);
      })


    const wrapperDivElement = document.createElement('div');
    wrapperDivElement.classList.add('accordion');

    const headDivElement = document.createElement('div');
    headDivElement.classList.add('head');

    const spanElement = document.createElement('span');
    spanElement.textContent = `${article.title}`;

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('button');
    buttonElement.textContent = 'More'

    const extraDivElement = document.createElement('div');
    extraDivElement.classList.add('extra');
    extraDivElement.style.display = 'none'

    const pElement = document.createElement('p');
    pElement.textContent = content;

    headDivElement.appendChild(spanElement);
    headDivElement.appendChild(buttonElement);
    extraDivElement.appendChild(pElement);

    wrapperDivElement.appendChild(headDivElement);
    wrapperDivElement.appendChild(extraDivElement);

    buttonElement.addEventListener('click', () => {
      if (buttonElement.textContent.toLocaleLowerCase() === 'More'.toLocaleLowerCase()) {
        buttonElement.textContent = 'Less';
        extraDivElement.style.display = 'block';
      }else if (buttonElement.textContent.toLocaleLowerCase() === 'Less'.toLocaleLowerCase()) {
        buttonElement.textContent = 'More';
        extraDivElement.style.display = 'none'
      }
    })


    return wrapperDivElement;

  }
}

solution()