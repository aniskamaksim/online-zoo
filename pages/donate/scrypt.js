const popUp = document.querySelector('.pop_up_header_menu');
const burgerIcon = document.querySelector('.header_link');
const popUpCloseCross = document.querySelector('.pop_up_close_cross');
const myModal = document.querySelector('.myModal');
const popUpHref = document.querySelector('.popup_href');
const popUpLogo = document.querySelector('.popup_logo');
function toggleMyModal() {
    if (popUp.style.display === 'block') {
        myModal.style.display = 'block';
    } else {
        myModal.style.display = 'none';
    }
}

function togglePopUp() {
    if (popUp.style.display === 'block') {
        popUp.style.display = 'none';
    } else {
        popUp.style.display = 'block';
    }
}

burgerIcon.addEventListener('click', togglePopUp);
burgerIcon.addEventListener('click', toggleMyModal);
popUpCloseCross.addEventListener('click', togglePopUp);
popUpCloseCross.addEventListener('click', toggleMyModal);
popUpHref.addEventListener('click', togglePopUp);
popUpHref.addEventListener('click', toggleMyModal);
popUpLogo.addEventListener('click', togglePopUp);
popUpLogo.addEventListener('click', toggleMyModal);


window.addEventListener('click', function(event){
	var popUp = document.querySelector('.myModal');
    var popUp2 = document.querySelector('.pop_up_header_menu');
	if (event.target == popUp || event.target.parentNode == popUp) {
        popUp.style.display = 'none';
        popUp2.style.display = 'none';
    }
});

function duplicateEncode(word){
    let result = "";
    let letters = word.toLowerCase().split(''); 
    console.log(letters);
    for (let i = 0; i < letters.length; i++) {
      var searchString = letters.charAt(i);
      if(letters.indexOf(searchString) == letters.lastIndexOf(searchString) ){
          result +='\(';
          } else {
          result +='\)';
          }
      }
      return result;
  }
  let s = "alligator";
  duplicateEncode(s);
  console.log(duplicateEncode(s));
