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
    // score update
        // 1. which element i want to update
    const currentScore = getElementUpdatedValueById('current-score');
    // 2. update it
    const newScore = currentScore + 1;
    // 3. display it
    setElementUpdatedValueById('current-score', newScore)
        
        removeBGColorById(currentAlphabet);
        continueGame()
    }
    else {
        // get
        const currentLife = getElementUpdatedValueById('current-life');
        // new life
        const newLife = currentLife - 1;
        // display it
        setElementUpdatedValueById('current-life', newLife);
        // another condition
        if(newLife === 0) {
            gameOver()
            console.log('go to hell');
        }
    }
}

function gameOver() {
    hideScreenById('playground-screen');
    showScreenById('gameOver-screen');
}

/**
 * 1. hide home screen and show playground screen
 * 2. display a random alphabet on the screen
 * 3. set bg color with matched alphabet
 * 4. start keyboard event with keyup/keypress
 * 5. 
 * 
 */

