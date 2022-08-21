import { Choice } from '../../linkage';
import { Conversant } from './conversant';
import { Quote } from './quote';
import { StoryNode } from '../api';
import { StoryElementId } from '../..';

export class Dialogue extends StoryNode {
    private nextLinkageId = 0;

    public constructor(
        protected id: StoryElementId,
        protected conversant: Conversant,
        protected quote: Quote
    ) {
        super(id);
    }

    public static of(id: StoryElementId, conversant: string, quote: string): Dialogue {
        return new Dialogue(id, new Conversant(conversant), new Quote(quote));
    }

    public interact(choiceId: StoryElementId): StoryNode | undefined {
        return this.traverseTo(choiceId);
    }

    public addChoice(content: string, nextNode: StoryNode): void {
        const choice = new Choice(this.nextLinkageId++, content, this, nextNode);

        this.addLinkage(choice);
    }

    public getChoice(id: number): Choice {
        const choice = this.getLinkageById(id) as Choice;

        if (choice == null) {
            throw `Choice with id of ${id} not found`;
        }

        return choice;
    }

    public getChoices(): Choice[] {
        return this.getLinkages().filter((linkage) => linkage instanceof Choice) as Choice[];
    }

    public getNextDialogues(): Dialogue[] {
        return this.getNextNodes().filter((node) => node instanceof Dialogue) as Dialogue[];
    }

    public getConversant(): Conversant {
        return this.conversant;
    }

    public getQuote(): Quote {
        return this.quote;
    }

    public getText(): string {
        return this.quote.getText();
    }

    public toString(): string {
        return `${this.conversant.getName()} says ${this.getText()}`;
    }
}
