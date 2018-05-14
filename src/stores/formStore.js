import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class FormStore extends EventEmitter {
  constructor() {
    super()
    this.data = [

    ];
  }

  numeroAleatorio (min, max) {
    var num = Math.round(Math.random() * (max - min) + min);
    return num;
    console.log("nro random: " + num );
  }

  calculateAge (birthday) {
    var birthday = birthday.split("/");
    var fechaRandom = [
      this.numeroAleatorio(1, 31),
      this.numeroAleatorio(1, 12),
      this.numeroAleatorio(2018, 2030)
    ];
    // fechaRandom[1] = 7;
    this.edadFutura = fechaRandom[2] - birthday[2];
    this.mesFuturo = fechaRandom[1]
    this.diaFuturo = fechaRandom[0]
    if ( fechaRandom[1] < birthday[1] ) {  //Si el mes de la fecha random es menor al mse de cumpleanos
      this.edadFutura--;
    }
    if ( fechaRandom[2] === birthday[2] && fechaRandom[0] < birthday[0]) {  //si el mes random == al de cumpleanos Y el dia es menos al dia que cumple años
      this.edadFutura--;
    }
  }

  submitData (name, country, age) {
let edadFutura = this.edadFutura;
let mesFuturo = this.mesFuturo
let diaFuturo = this.diaFuturo
    let id = Date.now();
    this.data.push({
      id,
      name,
      country,
      age,
      edadFutura,
      mesFuturo,
      diaFuturo
    })
    this.emit("change");
  }

  getAll() {
    return this.data;
  }

  handleActions(action) {
    switch(action.type) {
      case "SUBMIT": {
        console.log("formStore recived" + action.name, action.country, action.age);
        this.calculateAge(action.age);
        this.submitData (action.name, action.country, action.age);
      }
      default: false
    }
  }

}
const formStore = new FormStore();
dispatcher.register(formStore.handleActions.bind(formStore));

window.dispatcher = dispatcher;
export default formStore;
