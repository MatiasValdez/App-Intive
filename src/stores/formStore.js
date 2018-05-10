import { EventEmitter } from "events";

class FormStore extends EventEmitter {
  constructor() {
    super()
    this.data = [
      {
        id: 1,
        name: "Mariano",
        country: "Argentina",
        age: "01/01/1984"
      },
      {
        id: 1,
        name: "Mariano",
        country: "Argentina",
        age: "01/01/1984"
      },
      {
        id: 1,
        name: "Mariano",
        country: "Argentina",
        age: "01/01/1984"
      },
      {
        id: 2,
        name: "Jqweqwose",
        country: "Venezuela",
        age: "01/01/1984"
      },
      {
        id: 2,
        name: "Jose",
        country: "Venezuela",
        age: "01/01/1984"
      },
      {
        id: 2,
        name: "Jose",
        country: "Venezuela",
        age: "01/01/1984"
      },
      {
        id: 2,
        name: "Jose",
        country: "Venezuela",
        age: "01/01/1984"
      },
    ];
  }

  getAll() {
    return this.data;
  }
}
const formStore = new FormStore();

export default formStore;
