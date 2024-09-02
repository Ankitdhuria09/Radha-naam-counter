document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clickButton');
    const clearButton = document.getElementById('clearButton');
    const countDisplay = document.getElementById('count');
    const malaCountDisplay = document.getElementById('malaCount');

    // Retrieve the stored count and mala values from localStorage, or initialize them
    let count = parseInt(localStorage.getItem('clickCount')) || 0;
    let malas = parseInt(localStorage.getItem('malaCount')) || 0;

    // Update the display
    countDisplay.textContent = count;
    malaCountDisplay.textContent = malas;

    clickButton.addEventListener('click', () => {
        count++;
        if (count % 108 === 0) {
            malas++;
            malaCountDisplay.textContent = malas;
        }
        countDisplay.textContent = count;
        localStorage.setItem('clickCount', count);
        localStorage.setItem('malaCount', malas);
    });

    clearButton.addEventListener('click', () => {
        count = 0;
        malas = 0;
        countDisplay.textContent = count;
        malaCountDisplay.textContent = malas;
        localStorage.setItem('clickCount', count);
        localStorage.setItem('malaCount', malas);
    });
});
