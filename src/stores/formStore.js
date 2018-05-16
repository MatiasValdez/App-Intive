import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import React from 'react';

class FormStore extends EventEmitter {
  constructor() {
    super()
    this.data = [
    ];
    this.logLeyendas = [
    ];
    this.id = 0
  }

  numeroAleatorio (min, max) {
    let num = Math.round(Math.random() * (max - min) + min);
    return num;
  }

  calculateAge (birthday) {
    let birthday_arr = birthday.split("-");
    let fechaRandom = [
      this.numeroAleatorio(1, 31),
      this.numeroAleatorio(1, 12),
    ];
    let actualDate = new Date();
    let year = actualDate.getFullYear();
    this.ageFuture = year - birthday_arr[0]; // se restan los años para calcular edad
    this.monthFuture = fechaRandom[1];
    this.dayFuture = fechaRandom[0];
    if ( fechaRandom[1] < birthday_arr[1] ) {  //Si el mes de la fecha random es menor al mes de cumpleanos
        this.ageFuture--;
        console.log("bucle 1");
    }
   if ( fechaRandom[1] == birthday_arr[1] ) {  //si el mes random == al de cumpleanos Y el dia es menor al dia que cumple años
        console.log("bucle 2");
        if (fechaRandom[0] < birthday_arr[2]) {
          console.log("bucle 3");
          this.ageFuture--;
        }
    }
  }

  submitData (name, country, age) {
    let ageFuture = this.ageFuture;
    let monthFuture = this.monthFuture
    let dayFuture = this.dayFuture
    let leyendaText = <h2>Hola {name} de {country}. El dia {dayFuture} del {monthFuture} tendrás {ageFuture} años</h2>;
    this.logLeyendas.push = ({leyendaText});
    let id = this.id;
    this.data.push({
      id,
      name,
      country,
      age,
      leyendaText,
    })
    this.leyenda = leyendaText;
    this.emit("change");
    this.id++;
  }
  backOldLeyend (id) {
    this.leyenda = this.data[id].leyendaText;
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
        // console.log("formStore recived: " + action.name, action.country, action.age);
        this.calculateAge(action.age);
        this.submitData (action.name, action.country, action.age);
      } break
      case "LOGLEYENDAS": {
        this.backOldLeyend(action.idLeyenda);
      }       
    }
  }

}
const formStore = new FormStore();
dispatcher.register(formStore.handleActions.bind(formStore));

window.dispatcher = dispatcher;
export default formStore;
