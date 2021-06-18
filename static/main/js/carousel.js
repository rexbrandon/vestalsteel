// IMAGE CAROUSEL HOME PAGE
// declaring all variables to be used
// query selector all grabs all of the elements with the .caroImage class and not just the first one
const images = document.querySelectorAll('.caroImage')
// starts at the beginning of the array that is images and consists of .caroImage ' s
let i = 0;

  // sets first indexed img to display
  // checks if the current index is = to array length
  // changes last img to display none 
  // displays first img then resets index to 0
  // on the second iteration it sets the previous img to display none
  // then sets the current img to display block

setInterval(function(){
  if(i == 0) {
    images[i].style.display = 'flex';
  } else if(i == images.length) {
    images[i - 1].style.display = 'none';
    images[0].style.display = 'flex';
    i = 0;
  } else {
    images[i - 1].style.display = 'none';
    images[i].style.display = 'flex';
  }
  i++;
}, 2500);

console.log(images);