/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const myNumber = Math.trunc(Math.random() * 100);
const myButton = document.getElementById('check');
let counter = 0;
 
function checkNumbers() {
  const userNumber = document.getElementById('number').value;
  if (myNumber > userNumber) {
    counter++;
    document.getElementById('attempt').innerHTML = counter;
    document.getElementById('info').innerHTML = 'Please Go Up!';
  } else if (myNumber < userNumber) {
    counter++;
    document.getElementById('attempt').innerHTML = counter;
    document.getElementById('info').innerHTML = 'Please Go Down!';
  } else {
    counter++;
    document.getElementById('attempt').innerHTML = counter;
    document.getElementById('congrats').innerHTML = 'Congrats You Are Right';
    document.getElementById('image').style.visibility = 'visible';
    document.getElementById('info').style.visibility = 'hidden';
  }
}

myButton.addEventListener('click', checkNumbers);
