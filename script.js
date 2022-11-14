const buttonAdd = document.getElementById("click-add");
const buttonSub = document.getElementById("click-subtract")
const counterText = document.getElementById("counter-text")
let count = 0;

buttonAdd.addEventListener("click", () => {
    if (count < 50) {
        count++;
        counterText.innerHTML = count + " Clicks";
    } else alert("You've clicked 50 times already");
})

buttonSub.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counterText.innerHTML = count + " Clicks";
    } else alert("You can't undo any more clicks");
})
