"use strict";

const form = document.querySelector("#search-form");
const input = document.querySelector('[name = "search-field"]');
const body = document.querySelector("body");

const doFetch = async (searchValue) => {
  const response = await fetch(`http://api.tvmaze.com/search/shows?q=${searchValue}`);
  if (response.ok) {
    const data = await response.json();
    const arrayLength = data.length;

    for (let i = 0; i < arrayLength; i++) {
      console.log(data[i]);

      const img = data[i].show.image == null ? "http://placekitten.com/g/200/300" : data[i].show.image.Medium;

      body.innerHTML += `
            <article>
              <p>Name: ${data[i].show.name}</p>
              <img src="${img}" alt="mediumimage"/>
              <br>
              <a href="${data[i].show.officialSite}">home page</a>
              <p> Summary: ${data[i].show.summary}</p>
            </article >
            `;
    }
  } else {
    console.log("Something went wrong");
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = input.value;
  doFetch(inputValue);
});
