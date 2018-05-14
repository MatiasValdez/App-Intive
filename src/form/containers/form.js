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
      UserData: FormDataStore.getAll(),
    };
  }

  componentWillMount() {  //agrego el listener aca
    FormDataStore.on("change", () => {
      this.setState ({
        UserData: FormDataStore.getAll(),
      })
    })
  }

  submitData = e => {
    e.preventDefault();
    console.log(this.inputName.value);
    formActions.submitData(
      this.inputName.value,
      this.inputCountry.value,
      this.inputAge.value
    )
    console.log(this.state.UserData)
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
            UserData = {this.state.UserData}
           />
        </div>
      </div>
    )
  }
}

export default Form;
