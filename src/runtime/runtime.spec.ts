import { describe, it, expect } from 'vitest';
import { FabulistRuntime } from '.';
import { Story } from '../story';

describe('Fabulist runtime', () => {
    const story = new Story();

    it('creates a new instance', () => {
        const runtime = new FabulistRuntime(story);
        expect(runtime).toBeTruthy();
    });

    it('proceeds with next', () => {
        const runtime = new FabulistRuntime(story);
        expect(runtime.next()).toBe(undefined);
    });
});
