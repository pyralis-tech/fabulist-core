import { StoryNode } from '../node/story-node';
import { StoryLinkage } from './story-linkage';

describe('StoryLinkage', () => {
    it('should create a new instance', () => {
        const nodeA = new StoryNode(0);
        const nodeB = new StoryNode(1);

        const linkage = new StoryLinkage(0, nodeA, nodeB);
        expect(linkage).toBeTruthy();
        expect(linkage.getId()).toEqual(0);
        expect(linkage.getPreviousNode()).toEqual(nodeA);
        expect(linkage.getNextNode()).toEqual(nodeB);
    });

    it('should throw an error if previous and next nodes are the same', () => {
        const nodeA = new StoryNode(0);

        expect(() => {
            new StoryLinkage(0, nodeA, nodeA);
        }).toThrow('Previous and next node cannot be the same');
    });
});
