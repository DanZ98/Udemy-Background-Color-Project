const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

// Retrieving elements
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Creating btn click event listener
btn.addEventListener('click', function(){

    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    
    // Displaying colors array
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

// Generating random numbers. Math.random creates random numbers that are under 1, Math.floor rounds the numbers to whole numbers.
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}