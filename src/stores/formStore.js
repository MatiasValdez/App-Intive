import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import React from 'react';

class FormStore extends EventEmitter {
  constructor() {
    super()
    this.data = [

    ];
  }

  numeroAleatorio (min, max) {
    let num = Math.round(Math.random() * (max - min) + min);
    return num;
    console.log("nro random: " + num );
  }

  calculateAge (birthday) {
    let birthday_arr = birthday.split("/");
    let fechaRandom = [
      this.numeroAleatorio(1, 31),
      this.numeroAleatorio(1, 12),
    ];
    let actualDate = new Date();
    let year = actualDate.getFullYear();
    this.ageFuture = year - birthday_arr[2]; // se restan los años
    this.monthFuture = fechaRandom[1];
    this.dayFuture = fechaRandom[0];
    if ( fechaRandom[1] < birthday_arr[1] ) {  //Si el mes de la fecha random es menor al mse de cumpleanos
      this.ageFuture--;
    }
    if ( fechaRandom[2] = birthday_arr[2] && fechaRandom[0] < birthday_arr[0]) {  //si el mes random == al de cumpleanos Y el dia es menos al dia que cumple años
      this.ageFuture--;
    }
  }

  submitData (name, country, age) {
    let ageFuture = this.ageFuture;
    let monthFuture = this.monthFuture
    let dayFuture = this.dayFuture
    let leyendaa = <h2>Hola {name} de {country}. El dia {dayFuture} del {monthFuture} tendrás {ageFuture} años</h2>;
    let id = Date.now();
    this.data.push({
      id,
      name,
      country,
      age,
      // ageFuture,
      // monthFuture,
      // dayFuture,
    })
    this.leyenda = leyendaa;
    this.emit("change");
  }

  getAll() {
    return this.data;
  }
  getLeyenda() {
    return this.leyenda;
  }

  handleActions(action) {
    switch(action.type) {
      case "SUBMIT": {
        console.log("formStore recived: " + action.name, action.country, action.age);
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
