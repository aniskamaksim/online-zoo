const popUp = document.querySelector(".pop_up_header_menu");
const burgerIcon = document.querySelector(".header_link");
const popUpCloseCross = document.querySelector(".pop_up_close_cross");
const myModal = document.querySelector(".myModal");
const popUpHref = document.querySelector(".popup_href");
const popUpLogo = document.querySelector(".popup_logo");
const popUpTestimonials = document.querySelector(".pop_up_testimonials");
const feedBackBtn = document.querySelector(".body_btn_2.btn_block_4");
const closeCrossTestimonials = document.querySelector(".close_cross_testimonials");
const firstElement = document.getElementById("first_small_card");
const secondElement = document.getElementById("second_small_card");
const thirdElement = document.getElementById("third_small_card");
const closeCrossCard = document.querySelector(".close_cross_card");
const touchCard1 = document.getElementById("touch_first");
const touchCard2 = document.getElementById("touch_second");
const touchCard3 = document.getElementById("touch_third");
const closeCrossCardFirst = document.getElementById("cross_first");
const closeCrossCardSecond = document.getElementById("cross_second");
const closeCrossCardThird = document.getElementById("cross_third");

/*------toggle burger menu---------*/

function togglePopUp() {
  if (popUp.style.display === "block") {
    popUp.style.display = "none";
  } else {
    popUp.style.display = "block";
  }
}

/*------toggle testimonials modal window---------*/

function togglePopUpTestimonials() {
  if (popUpTestimonials.style.display === "flex") {
    popUpTestimonials.style.display = "none";
  } else {
    popUpTestimonials.style.display = "flex";
  }
}
/*------toggle dark background div---------*/

function toggleMyModal() {
  if (
    popUp.style.display === "block" ||
    popUpTestimonials.style.display === "flex"
  ) {
    myModal.style.display = "block";
  } else {
    myModal.style.display = "none";
  }
}

/*------dark background close by click outside modal window---------*/

window.addEventListener("click", function (event) {
  var popUp = document.querySelector(".myModal");
  var popUp2 = document.querySelector(".pop_up_header_menu");

  if (event.target == popUp || event.target.parentNode == popUp) {
    popUp.style.display = "none";
    popUp2.style.display = "none";
    popUpTestimonials.style.display = "none";
    firstElement.style.display = "none";
    secondElement.style.display = "none";
    thirdElement.style.display = "none";
  }
});

/*testimonials cards with description*/

function toggleSmallCardsFirst() {
  if (firstElement.style.display === "block") {
    firstElement.style.display = "none";
    myModal.style.display = "none";
  } else {
    firstElement.style.display = "block";
    firstElement.style.position = "fixed";
    myModal.style.display = "block";
  }
}
function toggleSmallCardsSecond() {
  if (secondElement.style.display === "block") {
    secondElement.style.display = "none";
    myModal.style.display = "none";
  } else {
    secondElement.style.display = "block";
    secondElement.style.position = "fixed";
    myModal.style.display = "block";
  }
}
function toggleSmallCardsThird() {
  if (thirdElement.style.display === "block") {
    thirdElement.style.display = "none";
    myModal.style.display = "none";
  } else {
    thirdElement.style.display = "block";
    thirdElement.style.position = "fixed";
    myModal.style.display = "block";
  }
}
function toggleSmallCards() {
  if (
    firstElement.style.display === "block" ||
    secondElement.style.display === "block" ||
    thirdElement.style.display === "block"
  ) {
    firstElement.style.display = "none";
    console.log("first el");
    secondElement.style.display = "none";
    console.log("second el");
    thirdElement.style.display = "none";
    console.log("third el");
  }
}
/*------eventlisteners to click on buttons---------*/

burgerIcon.addEventListener("click", togglePopUp);
burgerIcon.addEventListener("click", toggleMyModal);
popUpCloseCross.addEventListener("click", togglePopUp);
popUpCloseCross.addEventListener("click", toggleMyModal);
popUpHref.addEventListener("click", togglePopUp);
popUpHref.addEventListener("click", toggleMyModal);
popUpLogo.addEventListener("click", togglePopUp);
popUpLogo.addEventListener("click", toggleMyModal);
feedBackBtn.addEventListener("click", togglePopUpTestimonials);
closeCrossTestimonials.addEventListener("click", togglePopUpTestimonials);
feedBackBtn.addEventListener("click", toggleMyModal);
closeCrossTestimonials.addEventListener("click", toggleMyModal);
firstElement.addEventListener("click", toggleMyModal);
closeCrossCard.addEventListener("click", toggleMyModal);
touchCard1.addEventListener("click", toggleSmallCardsFirst);
touchCard2.addEventListener("click", toggleSmallCardsSecond);
touchCard3.addEventListener("click", toggleSmallCardsThird);
closeCrossCardFirst.addEventListener("click", toggleSmallCardsFirst);
closeCrossCardSecond.addEventListener("click", toggleSmallCardsSecond);
closeCrossCardThird.addEventListener("click", toggleSmallCardsThird);

/*Trying to make beauty, but no code said
const cardWrapper = document.querySelector('.card_wrapper');
const testimonialCard = document.querySelector('.testimonial_card');
const textContent = document.querySelector('.text_content');
const closeCrossCard = document.querySelector('.close_cross_card')

console.log(cardWrapper);

function changeStyle() {
    cardWrapper.style.backgroundColor = '#F5F7F6';
    cardWrapper.style.width = '444px';
    cardWrapper.style.height = '663px';
    cardWrapper.style.position = 'fixed';
    cardWrapper.style.zIndex = '2';
    cardWrapper.style.top = '10%';
    cardWrapper.style.left = '15%';

    closeCrossCard.style.display = 'block';

    testimonialCard.style.width = '391px';
    testimonialCard.style.height = '626px';
    testimonialCard.style.margin = '20px 30px 20px 17px';

    textContent.style.height = '100%';
    textContent.style.width = '100%';
    textContent.style.maxWidth = 'fit-content';
    textContent.style.fontSize = '24px';
    textContent.style.lineHeight = '1.2';

}

function returnToBasic() {
    cardWrapper.style.backgroundColor = null;
    const comp = window.getComputedStyle(cardWrapper).backgroundColor;
    console.log(comp);
    cardWrapper.style.width = '100%';
    cardWrapper.style.height = '100%';
    const comp2 = window.getComputedStyle(cardWrapper).width;
    console.log(comp2)
    cardWrapper.style.position = 'relative';
    const comp3 = window.getComputedStyle(cardWrapper).position;
    console.log(comp3)
    //cardWrapper.style.zIndex = null;
    //cardWrapper.style.top = null;
    //cardWrapper.style.left = null;

    //closeCrossCard.style.display = 'none';

    //testimonialCard.style.width = '600px';
    //testimonialCard.style.height = '109px';
    //testimonialCard.style.margin = '10px 0px 15px 0px';

    //textContent.style.height = '38px';
    //textContent.style.width = '553px';
    //textContent.style.maxWidth = null;
    //textContent.style.fontSize = null;
    //textContent.style.lineHeight = null;
}
console.log(cardWrapper)
cardWrapper.addEventListener('click', changeStyle);
closeCrossCard.addEventListener('click', returnToBasic);
*/
let arrayOfArrays = null;
function getLengthOfMissingArray(arrayOfArrays) {
	console.log ('Lesson_5(Input) in the begining: ' + arrayOfArrays);
	console.log(typeof arrayOfArrays);
	if (arrayOfArrays.length === 0 || arrayOfArrays == null) {
			return 0;
	}
	function sortByLength(a, b) {
			return a.length - b.length;
	}
	let arrayInOrder = arrayOfArrays.sort(sortByLength);
	console.log ('Lesson_5(Input) after the sorting: ' + arrayInOrder);
	let finalResult = 0;
	for (let i = 0; i < arrayInOrder.length - 1; i++) {
	  			if (arrayInOrder[i].length === 0 || arrayInOrder === null) {
					return 0;
			} else if (arrayInOrder[i].length + 1 !== arrayInOrder[i + 1].length) {
					console.log("arrayInOrder[i].length " + arrayInOrder[i].length);
					console.log("arrayInOrder[i + 1].length " + arrayInOrder[i + 1].length);
					console.log("i " + i);
				return arrayInOrder[i].length + 1;
			}
			console.log("finalResult " + finalResult);
			//return finalResult;
	}
}

console.log(getLengthOfMissingArray(arrayOfArrays));

