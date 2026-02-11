const lottoNumbersDiv = document.querySelector('.lotto-numbers');
const generateBtn = document.getElementById('generate-btn');

function generateLottoNumbers() {
    lottoNumbersDiv.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const ball = document.createElement('div');
        ball.classList.add('lotto-ball');
        ball.textContent = number;
        ball.style.backgroundColor = getBallColor(number);
        lottoNumbersDiv.appendChild(ball);
    });
}

function getBallColor(number) {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa'; // Gray
    return '#b0d840'; // Green
}

generateBtn.addEventListener('click', generateLottoNumbers);

// Generate numbers on initial load
window.addEventListener('load', generateLottoNumbers);

// Theme toggle logic
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
}

// Function to toggle the theme
function toggleTheme() {
    if (body.classList.contains('dark-mode')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

// Event listener for the theme toggle button
themeToggleBtn.addEventListener('click', toggleTheme);

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    // Default to light mode if no theme is saved
    setTheme('light');
}