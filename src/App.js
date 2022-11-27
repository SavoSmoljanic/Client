import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import {
  Password,
  PUpperCase,
  PSpecialCharacter,
  PSLength,
} from "./Password/password";

const characters = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "~!@#$%^&*";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upperCase: false,
      specialCharacter: false,
      length: "",
      Password: "",
    };
  }

  onLengthSelection = (e) => {
    this.length = e.target.value;
    this.setState({ length: this.length });
  };

  onuppercasechange = (e) => {
    this.setState({ upperCase: true });
    console.log(this.state.upperCase);
  };

  onspecialchange = (e) => {
    let specialCharacter = e.target.value;
    this.setState({ specialCharacter });
  };

  onbuttonClick = () => {
    let password = "";
    let check = Math.floor(Math.random() * 5);
    const charactersLength = characters.length;
    const specialCharactersLength = specialCharacters.length;

    for (let i = 0; i < this.length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );

      for (let j = 0; j < this.length; j++) {
        var randomCapitalLetters = password.charAt(
          Math.floor(Math.random() * password.length)
        );
      }
      if (
        password.match(/[a-z]/i) &&
        check > 0 &&
        this.state.upperCase === true &&
        this.state.specialCharacter === true
      ) {
        for (let l = 0; l < this.length; l++)
          password += specialCharacters.charAt(
            Math.floor(Math.random() * specialCharactersLength)
          );
        password = password.replace(
          randomCapitalLetters,
          randomCapitalLetters.toUpperCase()
        );
        check--;
      } else if (
        password.match(/[a-z]/i) &&
        check > 0 &&
        this.state.upperCase === true
      ) {
        password = password.replace(
          randomCapitalLetters,
          randomCapitalLetters.toUpperCase()
        );
      } else if (
        password.match(/[a-z]/i) &&
        check > 0 &&
        this.state.specialCharacter === true
      ) {
        for (let m = 0; m < password.length; m++)
          var passwordspecial = specialCharacters.charAt(
            Math.floor(Math.random() * specialCharactersLength)
          );
        password = password.replace(randomCapitalLetters, passwordspecial);
      }
    }
    this.setState({ Password: password });
    document.querySelector("button").disabled = true;
  };

  render() {
    return (
      <div>
        <h1 className="password">{this.state.Password}</h1>
        <ParticlesBg type="web" bg={true} />
        <Password onbuttonClick={this.onbuttonClick} />
        <PSLength onLengthSelection={this.onLengthSelection} />
        <PUpperCase onuppercasechange={this.onuppercasechange} />
        <PSpecialCharacter onspecialchange={this.onspecialchange} />
      </div>
    );
  }
}
export default App;
