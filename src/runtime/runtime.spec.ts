import { describe, it, expect } from 'vitest';
import { FabulistRuntime } from '.';
import { Story } from '../story';

describe('Fabulist runtime', () => {
    const story = new Story();

    it('should create a new instance', () => {
        const runtime = new FabulistRuntime(story);
        expect(runtime).toBeTruthy();
    });

    it('should proceed with next', () => {
        const runtime = new FabulistRuntime(story);
        expect(runtime.next()).toBe(undefined);
    });
});
