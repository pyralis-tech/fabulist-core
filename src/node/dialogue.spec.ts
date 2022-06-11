import { Conversant } from './conversant';
import { Dialogue } from './dialogue';
import { Quote } from './quote';

describe('Dialogue', () => {
    const bob = new Conversant('Bob');

    it('should create a new instance', () => {
        const dialogue = new Dialogue(0, bob, new Quote('Hello'));
        expect(dialogue.toString()).toEqual('Bob says Hello');
    });

    it('should add a choice', () => {
        const hello = new Dialogue(0, bob, new Quote('Hello'));
        const seeYou = new Dialogue(1, bob, new Quote('See you, then'));

        hello.addChoice('Bye', seeYou);

        const choices = hello.getChoices();
        expect(choices).toHaveLength(1);

        const firstChoice = choices[0];
        expect(firstChoice.getText()).toEqual('Bye');
        expect(firstChoice.getId()).toEqual(0);
        expect(firstChoice.getPreviousNode()).toEqual(hello);
        expect(firstChoice.getNextNode()).toEqual(seeYou);
    });

    it('should properly interact with a choice', () => {
        const hello = new Dialogue(0, bob, new Quote('Hello'));
        const seeYou = new Dialogue(1, bob, new Quote('See you, then'));

        hello.addChoice('Bye', seeYou);
        hello.addChoice('Ciao', seeYou);

        const choices = hello.getChoices();
        const nextNode = hello.interact(choices[0].getId()) as Dialogue;
        expect(nextNode.getText()).toEqual('See you, then');
        expect(nextNode.canContinue()).toEqual(false);
    });
});
