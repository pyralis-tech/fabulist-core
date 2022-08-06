import { Conversant, Dialogue, Quote } from '../../node';
import { Choice } from './choice';

describe('Choice', () => {
    const bob = new Conversant('Bob');

    it('should create a new instance', () => {
        const hello = new Dialogue(0, bob, new Quote('Hello'));
        const seeYou = new Dialogue(1, bob, new Quote('See you, then'));

        const choice = new Choice(0, 'Bye', hello, seeYou);
        expect(choice).toBeTruthy();
        expect(choice.getId()).toEqual(0);
        expect(choice.getPreviousNode()).toEqual(hello);
        expect(choice.getNextNode()).toEqual(seeYou);
    });

    it('should throw an error if previous and next nodes are the same', () => {
        const hello = new Dialogue(0, bob, new Quote('Hello'));

        expect(() => {
            new Choice(0, 'Bye', hello, hello);
        }).toThrow('Previous and next node cannot be the same');
    });
});
