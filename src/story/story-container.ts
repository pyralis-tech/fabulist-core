import { StoryNode } from '../node';

/**
 * A collection of story nodes that is effectively a subgraph. It can represent an act
 * or a chapter. Story nodes can be deferred or lazily loaded.
 */
export class StoryContainer {
    protected nodes: StoryNode[];

    public constructor() {
        this.nodes = [];
    }

    public addNode(node: StoryNode): void {
        this.nodes.push(node);
    }

    public clear(): void {
        this.nodes = [];
    }

    public getFirstNode(): StoryNode {
        return this.nodes[0];
    }

    public getLastNode(): StoryNode {
        return this.nodes[this.nodes.length - 1];
    }

    public canContinue(): boolean {
        return this.getLastNode().canContinue();
    }
}
