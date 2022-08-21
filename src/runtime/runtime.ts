import { StoryElementId } from '../element';
import { StoryNode } from '../element/node';
import { Story } from '../story';

export class FabulistRuntime {
    protected history: StoryElementId[];

    public constructor(protected story: Story) {
        this.history = [];
    }

    public start(): void {}

    public next(): StoryNode | undefined {
        return;
    }
}
