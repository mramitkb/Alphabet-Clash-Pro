function playNow() {
    hideScreenById('home-screen');
    showScreenById('playground-screen');
    continueGame();
}

function continueGame() {
    // 1. get random alphabet
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');

    const getRandomNumber = Math.round(Math.random() * 25);
    const alphabet = alphabets[getRandomNumber]
    // 2. set random alphabet on the playground screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    // console.log(currentAlphabet.innerText, alphabet);
}

/**
 * 1. hide home screen and show playground screen(reusable function)
 * 2. display a random alphabet on the screen
 * 
 */

