const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
  .then((res) => (res.json()))
  .then(
    (data) =>
      (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span></p>
                <p> О себе: <span>${data.bio}</span></p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span></p>
            </div>`)
  );
});

let content = [];
axios.get('https://jsonplaceholder.typicode.com/users')
.then((res) =>  {
  const data = res.data;
  for(let item in data) {
    content += `<div class="response-container">
                <p> Имя: <span>${data[item].name}</span></p>
                <p> Username: <span>${data[item].username}</span></p>
                <p> e-mail: <span>${data[item].email}</span></p>
                <p> Адрес: <span> ${data[item].address.city} city, 
                                  ${data[item].address.street} street, 
                                  ${data[item].address.suite}
                            </span>
                </p>
                <p> Телефон: <span>${data[item].phone}</span></p>
            </div>`
  }
  resultsContainer.innerHTML = content;
})