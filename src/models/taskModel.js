import { v4 as uuidv4 } from 'uuid';

class Task {
    constructor(name, term) {
        id: uuidv4();
        name: name;
        status: 'undone';
        term: term
    }
}

export default Task;