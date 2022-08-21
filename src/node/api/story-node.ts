import { StoryElement, StoryElementId } from '../../element';
import { StoryLinkage } from '../../linkage';

export class StoryNode extends StoryElement {
    protected linkages: StoryLinkage[];

    public constructor(protected id: StoryElementId, protected parent?: StoryNode) {
        super(id);
        this.linkages = [];
    }

    protected addLinkage(linkage: StoryLinkage): void {
        if (linkage.getPreviousNode() !== this) {
            throw 'Cannot add linkage that comes from another node';
        }

        this.linkages.push(linkage);
    }

    public getLinkageById(id: StoryElementId): StoryLinkage | undefined {
        return this.linkages.find((linkage) => linkage.getId() === id);
    }

    public getLinkages(): StoryLinkage[] {
        return this.linkages;
    }

    public getNextNodes(): StoryNode[] {
        return this.linkages.map((linkage) => linkage.getNextNode());
    }

    public canContinue(): boolean {
        return this.linkages.length > 0;
    }

    public setParent(parent: StoryNode): void {
        this.parent = parent;
    }

    public getParent(): StoryNode | undefined {
        return this.parent;
    }
}
