import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import Password from "./containers/Password.js/password";
import PSUpperCase from "./containers/PasswordUppercase/PSUpperCase";
import PSLength from "./containers/PasswordLength/PSLength";
import PSSpecialCharacter from "./containers/PasswordSpecialCharacters/PSSpecialCharacters";
const characters = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "~!@#$%^&*";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upperCase: "off",
      specialCharacter: "",
      length: "",
      Password: "",
    };
  }

  onLengthSelection = (e) => {
    this.length = e.target.value;
    this.setState({ length: this.length });
  };

  onuppercasechange = (e) => {
    var upperCase = e.target.value;
    this.setState({ upperCase: upperCase });
    console.log(this.state.upperCase);
  };

  onspecialchange = (e) => {
    var specialCharacter = e.target.value;
    this.setState({ specialCharacter: specialCharacter });
  };

  onbuttonClick = () => {
    var password = "";
    var check = Math.floor(Math.random() * 5);
    const charactersLength = characters.length;
    const specialCharactersLength = specialCharacters.length;
    for (var i = 0; i < this.length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );

      for (i; i < password.length; i++) {
        var randomletters = password.charAt(
          Math.floor(Math.random() * password.length)
        );
      }
      if (
        password.match(/[a-z]/i) &&
        check > 0 &&
        this.state.upperCase === "on" &&
        this.state.specialCharacter === "on"
      ) {
        for (i; i < this.length; i++)
          password += specialCharacters.charAt(
            Math.floor(Math.random() * specialCharactersLength)
          );
        password = password + randomletters.toUpperCase();
        check--;
      } else if (
        password.match(/[a-z]/i) &&
        check > 0 &&
        this.state.upperCase === "on"
      ) {
        password = password + randomletters.toUpperCase();
      } else if (
        password.match(/[a-z]/i) &&
        check > 0 &&
        this.state.specialCharacter === "on"
      ) {
        for (var i = 0; i < password.length; i++)
          var passwordspecial = specialCharacters.charAt(
            Math.floor(Math.random() * specialCharactersLength)
          );
        password = password + passwordspecial;
      }
    }
    this.setState({ Password: password });
    document.querySelector("button").disabled = true;
  };

  render() {
    return (
      <div>
        <h1 className="password">{this.state.Password}</h1>
        <ParticlesBg type="fountain" bg={true} />
        <Password onbuttonClick={this.onbuttonClick} />
        <PSLength onLengthSelection={this.onLengthSelection} />
        <PSUpperCase onuppercasechange={this.onuppercasechange} />
        <PSSpecialCharacter onspecialchange={this.onspecialchange} />
      </div>
    );
  }
}
export default App;
