'use strict'

const fetchShow = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

const form = document.querySelector('#search-form');
const query = document.querySelector('#query');
const results = document.querySelector('#results');

form.addEventListener('submit', async (evt) => {
    results.innerHTML = '';
    evt.preventDefault(); //dont do action from html / get control
    const url = form.action + '?q=' + query.value;
    let tvShow = await fetchShow(url);
    console.log(tvShow);

    for (let i= 0; i <= arraylength; i++){
        const article = document.createElement('article');
        const header = document.createElement('header');
        const h2 = document.createElement('h2');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const p = document.createElement('p');


        h2.innerHTML = picArray[i].title
        img.src = picArray[i].filename
        img.alt = picArray[i].title
        figcaption.innerHTML = picArray[i].caption
        p.innerHTML = picArray[i].description

        header.appendChild(h2);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        article.appendChild(header)
        article.appendChild(figure)
        article.appendChild(p)

        main.appendChild(article)}

});