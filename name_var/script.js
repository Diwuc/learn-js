let answer1 = document.getElementById("numberResult");
let answer2 = document.getElementById("lowerResult");
let answer3 = document.getElementById("upperResult");

let name = document.getElementById("your_name");

your_name.addEventListener("keyup", () => {
    answer1.textContent = getNumberOfChars(your_name.value)
    answer2.textContent = getLower(your_name.value)
    answer3.textContent = getUpper(your_name.value)
});

function getNumberOfChars(your_name){
    return your_name.length;
};
function getLower(your_name){
    return your_name.toLowerCase();
};
function getUpper(your_name){
    return your_name.toUpperCase();
};