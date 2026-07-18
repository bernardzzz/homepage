let currentQuotes = [];
if (typeof quotes !== 'undefined') {
    currentQuotes = quotes;
} else if (typeof require !== 'undefined') {
    currentQuotes = require('./quotes.js').quotes;
}

function getRandomQuote() {
    return currentQuotes[Math.floor(Math.random() * currentQuotes.length)];
}

function typeWriter(text, element, speed = 30) {
    return new Promise(resolve => {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

function createPromptLine(container, onEnter) {
    const line = document.createElement('div');
    line.className = 'terminal-input-line';
    
    const prompt = document.createElement('span');
    prompt.className = 'terminal-prompt';
    prompt.textContent = 'bernard@theramen.pro:~$';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'terminal-input';
    input.autofocus = true;
    input.autocomplete = 'off';
    
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const val = input.value.trim();
            if (val) {
                input.disabled = true;
                onEnter(val, line);
            }
        }
    });
    
    line.appendChild(prompt);
    line.appendChild(input);
    container.appendChild(line);
    
    // Focus the new input, but delay slightly to ensure DOM update
    setTimeout(() => input.focus(), 10);
}

function initTerminal(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    function handleEnter(val, lineElement) {
        const quote = getRandomQuote();
        const responseText = `"${quote.text}" - ${quote.author}`;
        
        const outputElement = document.createElement('div');
        outputElement.className = 'terminal-output';
        container.appendChild(outputElement);
        
        typeWriter(responseText, outputElement, 30).then(() => {
            createPromptLine(container, handleEnter);
        });
    }

    createPromptLine(container, handleEnter);
    
    // Ensure clicking anywhere in the container focuses the active input
    container.addEventListener('click', () => {
        const inputs = container.querySelectorAll('.terminal-input');
        if (inputs.length > 0) {
            const lastInput = inputs[inputs.length - 1];
            if (!lastInput.disabled) {
                lastInput.focus();
            }
        }
    });
}

// Export for tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { typeWriter, getRandomQuote, quotes: currentQuotes };
} else {
    // Run in browser
    document.addEventListener('DOMContentLoaded', () => {
        initTerminal('terminal-container');
    });
}
