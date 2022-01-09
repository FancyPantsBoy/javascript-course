/* --------- import -------- */
// to import jQuery you can add this script tag <script type="text/javascript" src="jquery-3.5.1.js"></script> 
// to import jQuery you can add this script tag <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 

/* --------- syntax -------- */
$ // represents jQuery instance inside the web page.

$(document).ready(function () { /* some code */ }); // check if the document has been fully loaded and then executes the code
$(function () {/* some code */ }) // alternative.

/* --------- selectors -------- */
// the selector can be any valid css selector.

$("p"); // all elements based on the tag name
$("#firstSection"); // element with a given identifier
$(".green"); // all elements of a given class
$("*"); // all elements on the page
$("[attributeName]"); // all elements with the attribute name. href, src, style, id, ...etc
$("[attributeName=attributeValue]"); // all elements with the attribute name and have the attribute value
$(this); // to get the current HTML element. used inside loops (each), inside event listener function.


/* -------- edit element css ---------- */

// to tell the name of property just select any css property, remove the dash and capitalize the word after
// background-color -> backgroundColor

$('selector').css(propertyName); // to get the value of the property

$('selector').css(propertyName, value); // to set a value for a css property
$('selector').css({
  propertyName: value
}); // to set a value for a css property

/* ------------- methods ------------ */
$(selector).text(); // returns all the text that exists inside the selected element;
$(selector).text('some text'); // will set the new text inside the selected element or elements;


$(selector).html(); // returns the innerHTML;
$(selector).html('some text <p>something else </p>'); // set the innerHTML for the selected element;

$(selector).append('some text'); // adds the content to the end of the selected element
$(selector).prepend('some text'); // adds the content to the start of the selected element
$(selector).after('some text'); // adds the content after the selected element
$(selector).before('some text'); // adds the content before the selected element

$(selector).remove(); // remove the element entirely.
$(selector).empty(); // removes the content inside the selected element;

$(selector).val(); // returns the value inside an input element. input, select, checkbox... etc
$(selector).val(value); // will the set the value of the element to the passed in value.

$(selector).addClass(classname1, classname2); // adds the classes to the element
$(selector).removeClass(classname1, classname2); // adds the classes to the element

$(selector).each(function (index) { /* some code to be executed */ }); // this is used to loop over the selected elements.

/* ------------- events ------------- */

$(selector).click(function () { /* some code */ });
$(selector).on(eventName, function () {/* some code */ });
$(selector).on({
  'click': function () {/* some code */ },
  'dblclick': function () {/* some code */ }
})

/* -------------- pre-defined animations ---------- */

$(selector).hide(option)
$(selector).show(option)
$(selector).fadeIn(option)
$(selector).fadeOut(option)
$(selector).slideUp(option)
$(selector).slideDown(option)

/*
  the option can have the following values:
    - 'slow': means that the animation will take longer
    - 'fast': means that the animation will be brief
    - number: this specifies the number of milliseconds for the duration of the animation
*/

/* ---------------- custom animation ---------------- */

$(selector).animate(params, duration, callback);
/*
  params: the params is an object of css properties to be modified by the animation.
  duration: same values as the predefined animations
  callback: a function to be executed at the end of the animation

  Ex:
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px'
    });
*/

