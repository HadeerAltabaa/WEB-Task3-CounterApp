// DOM Elements
const counterEl = document.getElementById('counter');
const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');
const counterContainer = document.querySelector('.counter');

// Initialize counter
let count = 0;

// Update counter display
function updateCounter() {
    counterEl.textContent = count;

    // Add animation class 
    counterContainer.classList.add('changing');

    // Remove animation class after transition
    setTimeout(() => {
        counterContainer.classList.remove('changing');
    }, 300);
}

// Event listeners
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
    } else {
        // shake animation when trying to go below 0.
        counterContainer.classList.remove('changing');
        void counterContainer.offsetWidth;
        counterContainer.classList.add('changing');
    }
});


incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
})

resetBtn.addEventListener('click', () => {
    if (count !== 0) {
        count = 0;
        updateCounter();
    }
});

// Initialize display
updateCounter();