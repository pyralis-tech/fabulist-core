import { StoryLinkage } from '../linkage/story-linkage';
import { StoryNode } from './story-node';

describe('StoryNode', () => {
    it('should create a new instance', () => {
        const node = new StoryNode(0);
        expect(node).toBeTruthy();
        expect(node.getId()).toEqual(0);
        expect(node.getLinkages()).toEqual([]);
    });

    it('should return empty next and previous nodes if empty', () => {
        const node = new StoryNode(0);
        expect(node.getNextNodes()).toEqual([]);
    });

    it('should not able to continue if empty', () => {
        const node = new StoryNode(0);
        expect(node.canContinue()).toEqual(false);
    });

    it('should add linkages', () => {
        const nodeA = new StoryNode(0);
        const nodeB = new StoryNode(1);
        const linkage = new StoryLinkage(0, nodeA, nodeB);

        nodeA.addLinkage(linkage);
        expect(nodeA.getLinkages()).toHaveLength(1);

        const firstLinkage = nodeA.getLinkageById(0);
        expect(firstLinkage?.getId()).toEqual(0);
        expect(firstLinkage?.getPreviousNode()).toEqual(nodeA);
        expect(firstLinkage?.getNextNode()).toEqual(nodeB);
    });
});
