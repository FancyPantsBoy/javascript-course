// const mainContent = document.getElementById('main-content');
const button = document.getElementById('add-btn');

const callback = function () {
  console.log('clicked');
}

const callback2 = function () {
  alert('click');
}

button.addEventListener('click', callback);
button.addEventListener('click', callback2);

button.removeEventListener('click', callback)


// // console.log(button);
// // console.log(mainContent);

// function createArticle(article_name, description, author) {
//   // create a container element
//   const mainElement = document.createElement('div');
//   mainElement.classList.add('content-element'); // add class 'content-element' to container div

//   // create a paragraph element for article name
//   const articleElement = document.createElement('p');
//   articleElement.innerText = article_name; // add text to paragraph

//   // create a paragraph element for description
//   const descriptionElement = document.createElement('p');
//   descriptionElement.innerText = description; // add text to paragraph

//   // create a paragraph element for author
//   const authorElement = document.createElement('p');
//   authorElement.innerText = author; // add text to paragraph

//   mainElement.appendChild(articleElement)
//   mainElement.appendChild(descriptionElement)
//   mainElement.appendChild(authorElement)

//   return mainElement;
// }


// button.addEventListener('click', (ev) => {
//   const newArticle = createArticle('something', 'just a description', 'me');
//   mainContent.appendChild(newArticle);
// });

// $(document).ready(() => {
//   // alert('page loaded');
//   $('#main-content').css({
//     backgroundColor: 'red'
//   });

//   $('#info-btn').click(function () {
//     $('.content-element').animate({
//       left: '250px',
//       opacity: '0.5',
//       height: '150px'
//   });
//   });
  
// })


