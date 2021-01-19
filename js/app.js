const button = document.querySelector('#btn');
const body = document.querySelector('body');
const hexVals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const value = document.querySelector('#hex-value');


function changeHexValue(){
    let hex = '#';

    for( let i = 0; i < 6; i += 1){
        const idx = Math.floor(Math.random()*hexVals.length);
        hex += hexVals[idx];
    }
    value.textContent = hex;
    body.style.backgroundColor = hex;
}

button.addEventListener('click', changeHexValue);
// add click event listener for hex value randomizer

