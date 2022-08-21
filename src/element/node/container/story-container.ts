import { StoryElementId } from '../../types';
import { StoryNode } from '../api';

/**
 * A collection of story nodes that is effectively a subgraph. It can represent an act
 * or a chapter. Story nodes can be deferred or lazily loaded.
 */
export class StoryContainer extends StoryNode {
    public constructor(id: StoryElementId, protected nodes: StoryNode[]) {
        super(id);
    }

    protected addNode(node: StoryNode): void {
        this.nodes.push(node);
    }

    public getNodes(): StoryNode[] {
        return this.nodes;
    }

    public getNode(id: StoryElementId): StoryNode {
        for (const node of this.nodes) {
            if (node.getId() === id) {
                return node;
            }
        }

        throw `Story node not found with id: ${id}`;
    }

    public getFirstNode(): StoryNode {
        return this.nodes[0];
    }

    public getLastNode(): StoryNode {
        return this.nodes[this.nodes.length - 1];
    }

    public clear(): void {
        this.nodes = [];
    }

    public canContinue(): boolean {
        return this.getLastNode().canContinue();
    }
}
