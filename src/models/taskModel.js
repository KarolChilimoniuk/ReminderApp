import { v4 as uuidv4 } from "uuid";

class NewTaskModel {
  constructor(name, term) {
    this.id = uuidv4();
    this.name = name;
    this.done = false;
    this.term = term;
  }
}

export default NewTaskModel;
