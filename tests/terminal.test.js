import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { JSDOM } from 'jsdom';
import * as terminalModule from '../assets/js/terminal.js';

describe('Terminal Specifications', () => {
    let dom;
    let window;
    let document;

    beforeEach(() => {
        dom = new JSDOM('<!DOCTYPE html><div id="terminal-container"></div>');
        window = dom.window;
        document = window.document;
        global.document = document;
        global.window = window;
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
