import React, { Component } from 'react';
import './form.css';
import InputData from '../components/inputData.js';
import FormDataStore from '../../stores/formStore.js';
import * as formActions from '../../actions/formActions.js';  //importa functions por separado, como es como si estuvieran en un objeto
import apiPaises from '../../api.json';
import OutputData from '../components/outputData.js';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      userData: FormDataStore.getAll(),
      leyenda: FormDataStore.getLeyenda(),
    };
  }

  componentWillMount() {
    FormDataStore.on("change", () => {
      this.setState ({
        userData: FormDataStore.getAll(),
        leyenda: FormDataStore.getLeyenda(),
      })
    })
  }

  submitData = e => {
    e.preventDefault();
    // console.log(this.inputName.value);
    formActions.submitData(
      this.inputName.value,
      this.inputCountry.value,
      this.inputAge.value
    )
    this.inputName.value = '';
    this.inputAge.value = '';
  }

  inputRefName = element => {
    this.inputName = element;
  }
  inputRefCountry = element => {
    this.inputCountry = element;
  }
  inputRefAge = element => {
    this.inputAge = element;
  }
  backOldLeyend (e, id) {
    e.preventDefault();
    formActions.backOldLeyend (id);
  }

  render() {
    return (
      <div className="ContainerForm">
          <InputData
            inputRefName = {this.inputRefName}
            inputRefCountry = {this.inputRefCountry}
            inputRefAge = {this.inputRefAge}
            submitData = {this.submitData}
            countries = {apiPaises}
          />

        <div className="FormOutput">
          <OutputData
            userData = {this.state.userData}
            backOldLeyend = {this.backOldLeyend}
           />
        </div>
        <div className="leyenda">
          {this.state.leyenda}
        </div>
      </div>
    )
  }
}

export default Form;
