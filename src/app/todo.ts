export class Todo{
    id: number;
    description?: string;
    done?: boolean;
    createdDate?: string;
    doneDate?: string;

    constructor() {
        this.id = 0;
    }
}