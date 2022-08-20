import { StoryContainer } from './story-container';

/**
 * A collection of story containers.
 */
export class Story {
    protected containers: StoryContainer[];

    public constructor() {
        this.containers = [];
    }

    public getContainers(): StoryContainer[] {
        return this.containers;
    }
}
