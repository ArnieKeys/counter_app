let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn");
let decrementBtn = document.getElementById("decrement-btn");
let saveBtn = document.getElementById("save-btn");
let resetBtn = document.getElementById("reset-btn")


let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}
incrementBtn.addEventListener("click", increment);

function decrement() {
    count--;
    countEl.textContent = count;
}
decrementBtn.addEventListener("click", decrement);

function save() {
  document.getElementById("save-el").textContent += `${count} - `;
}
saveBtn.addEventListener("click", save);
function reset(){
  countEl.textContent = 0;
  count = 0;
}
resetBtn.addEventListener("click", reset)