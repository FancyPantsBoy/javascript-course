document // document object and it represents the the document for your current page.

/* ------------- selection ------------- */

document.getElementById('id');
document.getElementsByClassName('content-class');
document.getElementsByTagName('div');

document.querySelector('selector'); // returns the first element that matches the selector
document.querySelectorAll('selector'); // returns all the elements that match the selector

/* ------------ properties -------------- */
document.getElementById('id').innerText; // returns the text that exists inside the element;
document.getElementById('id').innerText = 'some text'; // set the text inside the element;

document.getElementById('id').innerHTML; // returns the HTML that exists inside the element;
document.getElementById('id').innerHTML = 'some text <p>something else </p>'; // set the html inside the element;

/* ------------- creation --------------- */

document.createElement('div'); //  creates element based on the provided tag name

// to add an element to another one
const parent = document.createElement('div'); // have a parent element
const child = document.createElement('div'); // create child element

parent.appendChild(child); // inserts the child in the parent element at the end.

/* ------------ classes ----------------- */

parent.classList.add(); // adds a class to the class attribute of the element
parent.classList.remove();// remove a class from the class attribute of the element
parent.classList.contains(); // checks if the class exists in the class attribute of the element.

/* ------------- events ------------------ */
const callback = function () {
  // some 
}
const callback2 = function () {
  // some code
}
const eventName = 'click'; // you can chose any event you want

parent.addEventListener(eventName, callback);
parent.addEventListener(eventName, callback2);

parent.removeEventListener(eventName, callback);