const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// Retrieving elements
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){

    // For looping hex array, adding hexColor to it and implementing getRandomNumber function
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }

    // Displaying hexColor in the DOM
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// Generating random hex colors
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}