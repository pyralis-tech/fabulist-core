import { StoryElementId } from '../types';

export abstract class StoryElement {
    public constructor(protected id: StoryElementId) {
        if (id == null) {
            throw 'Story element needs to have an id';
        }
    }

    public getId(): StoryElementId {
        return this.id;
    }
}
