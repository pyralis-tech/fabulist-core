import { describe, it, expect } from 'vitest';
import { Dialogue } from '../..';
import { StoryContainer } from './story-container';
import { v4 as uuidv4 } from 'uuid';

describe('Story container', () => {
    it('should create a new instance', () => {
        const container = new StoryContainer(uuidv4(), [Dialogue.of(1, 'Bob', 'hi')]);

        expect(container).toBeTruthy();
        expect(container.getNodes()).toHaveLength(1);
    });
});
