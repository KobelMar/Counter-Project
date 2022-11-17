document.getElementById('lowerButton').addEventListener('click', lowerCount);
document.getElementById('addButton').addEventListener('click', addCount);

let value = document.getElementById('value');
value.textContent = 0;

function lowerCount() {
    value.style.visibility = 'visible';
    value.textContent --;
}

function addCount() {
    value.style.visibility = 'visible';
    value.textContent ++;
}