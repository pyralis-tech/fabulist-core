import { StoryLinkage } from '../linkage/story-linkage';

export class StoryNode {
    protected linkages: StoryLinkage[];

    public constructor(protected id: number) {
        if (id == null) {
            throw 'Story node needs to have an id';
        }

        this.linkages = [];
    }

    public addLinkage(linkage: StoryLinkage): void {
        if (linkage.getPreviousNode() !== this) {
            throw 'Cannot add linkage that comes from another node';
        }

        this.linkages.push(linkage);
    }

    public getLinkageById(id: number): StoryLinkage | undefined {
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

    public getId(): number {
        return this.id;
    }
}
