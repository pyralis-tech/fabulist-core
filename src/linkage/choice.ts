import { StoryNode } from '../node/story-node';
import { StoryLinkage } from './story-linkage';

export class Choice extends StoryLinkage {
    public constructor(
        protected id: number,
        protected text: string,
        protected previousNode: StoryNode,
        protected nextNode: StoryNode
    ) {
        super(id, previousNode, nextNode);
    }

    public getText(): string {
        return this.text;
    }
}
