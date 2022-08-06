import { StoryElement, StoryElementId } from '../../element';
import { StoryNode } from '../../node';

export abstract class StoryLinkage extends StoryElement {
    public constructor(
        protected id: StoryElementId,
        protected previousNode: StoryNode,
        protected nextNode: StoryNode
    ) {
        super(id);
        if (previousNode === nextNode) {
            throw 'Previous and next node cannot be the same';
        }
    }

    public getPreviousNode(): StoryNode {
        return this.previousNode;
    }

    public getNextNode(): StoryNode {
        return this.nextNode;
    }
}
