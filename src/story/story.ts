import { StoryContainer, StoryElementId } from '../element';

/**
 * A collection of story containers.
 */
export class Story {
    protected containers: StoryContainer[];
    protected activeContainer: StoryContainer | undefined;

    public constructor() {
        this.containers = [];
    }

    public start(): void {
        const activeContainer = this.getActiveContainer();

        if (activeContainer == null) {
            this.activeContainer = this.getFirstContainer();
        }

        this.activeContainer?.getFirstNode();
    }

    public loadContainer(id: StoryElementId): void {
        this.activeContainer = this.getContainer(id);
    }

    public addContainer(container: StoryContainer): void {
        this.containers.push(container);
    }

    public getContainer(id: StoryElementId): StoryContainer {
        for (const container of this.containers) {
            if (container.getId() === id) {
                return container;
            }
        }

        throw `Story container not found with id: ${id}`;
    }

    public getFirstContainer(): StoryContainer {
        return this.containers[this.containers.length - 1];
    }

    public getActiveContainer(): StoryContainer | undefined {
        return this.activeContainer;
    }
}
