const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert');
const { JSDOM } = require('jsdom');

describe('Terminal Specifications', () => {
    let dom;
    let window;
    let document;
    let terminalModule;

    beforeEach(() => {
        dom = new JSDOM('<!DOCTYPE html><div id="terminal-container"></div>');
        window = dom.window;
        document = window.document;
        global.document = document;
        global.window = window;

        // Reset module cache to get a fresh state
        delete require.cache[require.resolve('../assets/js/terminal.js')];
        terminalModule = require('../assets/js/terminal.js');
    });

    it('should have a pool of grounded quotes', () => {
        assert.ok(Array.isArray(terminalModule.quotes));
        assert.ok(terminalModule.quotes.length >= 4);
    });

    it('getRandomQuote should return a quote object', () => {
        const quote = terminalModule.getRandomQuote();
        assert.ok(quote.text);
        assert.ok(quote.author);
    });

    it('typeWriter should append text character-by-character and resolve', async () => {
        const element = document.createElement('div');
        const text = "Hello, world!";
        
        // speed = 1ms for fast test
        await terminalModule.typeWriter(text, element, 1);
        
        assert.strictEqual(element.textContent, "Hello, world!");
    });
});
