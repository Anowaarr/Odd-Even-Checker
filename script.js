// =========================================
// TOOL 1: EVEN / ODD CALCULATOR LOGIC
// =========================================

function checkEvenOdd() {
    const inputElement = document.getElementById('numberInput');
    const resultArea = document.getElementById('resultArea');
    const value = inputElement.value.trim();

    if (value === '') {
        showResult('Please enter a number!', 'bg-yellow-100 text-yellow-800 border-yellow-300');
        return;
    }

    const number = parseInt(value, 10);

    if (number % 2 === 0) {
        showResult(`${number} is an EVEN number.`, 'bg-blue-100 text-blue-800 border border-blue-300');
    } else {
        showResult(`${number} is an ODD number.`, 'bg-green-100 text-green-800 border border-green-300');
    }
}

function showResult(message, colorClasses) {
    const resultArea = document.getElementById('resultArea');
    resultArea.className = `mt-2 p-4 rounded-lg text-center font-bold text-xl ${colorClasses} block transition-all duration-300`;
    resultArea.textContent = message;
}

// Listen for "Enter" key on the input
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkEvenOdd();
    }
});


// =========================================
// TOOL 2: MULTIPLICATION TABLES LOGIC
// =========================================

const container = document.getElementById('tables-container');

// Generate tables from 1 to 100
for (let i = 1; i <= 100; i++) {
    const card = document.createElement('div');
    card.className = "bg-white p-5 rounded-xl shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow duration-300";
    
    let tableHTML = `
        <h2 class="text-xl font-bold text-gray-800 border-b-2 border-gray-100 pb-2 mb-3 text-center">
            Table of ${i}
        </h2>
        <ul class="space-y-1 font-mono text-base text-gray-700">
    `;
    
    for (let j = 1; j <= 10; j++) {
        const product = i * j;
        tableHTML += `
            <li class="flex justify-between py-1 border-b border-gray-50 last:border-0">
                <span>${i} &times; ${j}</span>
                <span class="font-semibold text-blue-600">${product}</span>
            </li>
        `;
    }
    
    tableHTML += `</ul>`;
    card.innerHTML = tableHTML;
    container.appendChild(card);
}