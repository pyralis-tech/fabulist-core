import { describe, it, expect } from 'vitest';
import { StoryContainer } from './story-container';

describe('Story container', () => {
    it('should create a new instance', () => {
        const container = new StoryContainer();
        expect(container).toBeTruthy();
        expect(container.getNodes()).toEqual([]);
    });
});
