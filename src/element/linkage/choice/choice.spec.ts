import { describe, it, expect } from 'vitest';
import { Choice } from '.';
import { v4 as uuidv4 } from 'uuid';
import { Conversant, Dialogue, Quote } from '../..';

describe('Choice', () => {
    const bob = new Conversant('Bob');

    it('should create a new instance', () => {
        const hello = new Dialogue(uuidv4(), bob, new Quote('Hello'));
        const seeYou = new Dialogue(uuidv4(), bob, new Quote('See you, then'));
        const choiceId = uuidv4();
        const choice = new Choice(choiceId, 'Bye', hello, seeYou);

        expect(choice).toBeTruthy();
        expect(choice.getId()).toEqual(choiceId);
        expect(choice.getPreviousNode()).toEqual(hello);
        expect(choice.getNextNode()).toEqual(seeYou);
    });

    it('should throw an error if previous and next nodes are the same', () => {
        const hello = new Dialogue(uuidv4(), bob, new Quote('Hello'));

        expect(() => {
            new Choice(uuidv4(), 'Bye', hello, hello);
        }).toThrow('Previous and next node cannot be the same');
    });
});
