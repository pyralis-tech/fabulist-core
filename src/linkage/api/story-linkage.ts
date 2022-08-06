import { StoryNode } from '../../node';

export abstract class StoryLinkage {
    public constructor(
        protected id: number,
        protected previousNode: StoryNode,
        protected nextNode: StoryNode
    ) {
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

    public getId(): number {
        return this.id;
    }
}
