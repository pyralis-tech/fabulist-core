import { StoryElementId } from '../types';

export abstract class StoryElement {
    public constructor(protected id: StoryElementId) {}
}
