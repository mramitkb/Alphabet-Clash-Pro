function playNow() {
    hideScreenById('home-screen');
    showScreenById('playground-screen');
    continueGame();
}

function continueGame() {
    // 1. generate a random alphabet
    const alphabet = generateARandomAlphabet();

    // 2. display the random alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    // 3. set BG color on the current alphabet
    setBGColorById(alphabet);

    // 4. keyboard event start
}

document.addEventListener('keyup', handleKeyboardPress);
function handleKeyboardPress(event) {
    // 1. which alphabet pressed by the player
    const playerPressed = event.key;

    // 2. displayed alphabet
    const currentAlphabetText = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetText.innerText.toLowerCase();

    // 3. conditions apply
    if(playerPressed === currentAlphabet) {
        removeBGColorById(currentAlphabet);
        continueGame()
        console.log('right');
    }
    else {
        console.log('Wrong');
    }
    console.log(currentAlphabet, playerPressed);
}

/**
 * 1. hide home screen and show playground screen
 * 2. display a random alphabet on the screen
 * 3. set bg color with matched alphabet
 * 4. start keyboard event with keyup/keypress
 * 5. 
 * 
 */

