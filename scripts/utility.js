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
// get random alphabet
function generateARandomAlphabet() {
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');
    const getRandomNumber = Math.round(Math.random() * 25);
    const alphabet = alphabets[getRandomNumber]
    return alphabet;
}
// update score or life
function getElementUpdatedValueById(elementId) {
    const elementText = document.getElementById(elementId);
    const elementValue = elementText.innerText;
    const element = parseInt(elementValue);
    return element;
}
// display value to the score or life
function setElementUpdatedValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
// get current alphabet 
function getTextElementById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    return elementValue;
}