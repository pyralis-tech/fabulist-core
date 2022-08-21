import { describe, it, expect } from 'vitest';
import { Conversant } from './conversant';
import { Dialogue } from './dialogue';
import { Quote } from './quote';
import { v4 as uuidv4 } from 'uuid';

describe('Dialogue', () => {
    const bob = new Conversant('Bob');

    it('should create a new instance', () => {
        const dialogueId = uuidv4();
        const dialogue = new Dialogue(dialogueId, bob, new Quote('Hello'));

        expect(dialogue).toBeTruthy();
        expect(dialogue.getId()).toEqual(dialogueId);
        expect(dialogue.getChoices()).toEqual([]);
        expect(dialogue.toString()).toEqual('Bob says Hello');
    });

    it('should return empty next and previous dialogues if empty', () => {
        const dialogue = new Dialogue(uuidv4(), bob, new Quote('Hello'));

        expect(dialogue.getNextDialogues()).toEqual([]);
    });

    it('should add a choice', () => {
        const hello = new Dialogue(uuidv4(), bob, new Quote('Hello'));
        const seeYou = new Dialogue(uuidv4(), bob, new Quote('See you, then'));

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
        const hello = new Dialogue(uuidv4(), bob, new Quote('Hello'));
        const seeYou = new Dialogue(uuidv4(), bob, new Quote('See you, then'));

        hello.addChoice('Bye', seeYou);
        hello.addChoice('Ciao', seeYou);

        const choices = hello.getChoices();
        const nextNode = hello.interact(choices[0].getId()) as Dialogue;
        expect(nextNode.getText()).toEqual('See you, then');
        expect(nextNode.canContinue()).toEqual(false);
    });
});
