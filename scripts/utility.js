// hide screen
function hideScreenById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// show screen
function showScreenById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// set bg color in current alphabet
function setBGColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// remove bg color from current alphabet when life goes blank
function removeBGColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
// get current alphabet from playground screen
function getCurrentTextById(elementId) {
    const element = document.getElementById(elementId);
    console.log(element.innerText);
}
function generateARandomAlphabet() {
    // 1. get random alphabet
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');
    const getRandomNumber = Math.round(Math.random() * 25);
    const alphabet = alphabets[getRandomNumber]
    return alphabet;
}