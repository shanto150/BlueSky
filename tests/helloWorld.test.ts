import { describe, it, expect } from 'vitest';

function helloWorld() {
    return 'Hello, World!';
}

describe('helloWorld function', () => {
    it('should return "Hello, World!"', () => {
        expect(helloWorld()).toBe('Hello, World!');
    });
});