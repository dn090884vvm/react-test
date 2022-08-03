import React, { Component } from 'react';
const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

export class SignUpFormExtended extends React.Component {
  state = { ...INITIAL_STATE };

  // Для всех инпутов создаем один обарботчик
  // Различать инпуты будем по атрибуту name
  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    // console.log(evt.target.name);
    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({
      [name]:
        type === 'checkbox'
          ? this.setState(prevState => ({ agreed: !prevState.agreed }))
          : value,
    });
    // this.setState({ agreed: true });
    //   [name]: type === 'checkbox' ? this.setState({ agreed: checked }) : value, rabotaet
    //   [name]: type === 'checkbox' ? this.setState({ agreed: evt.currentTarget.checked }) toge
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );
    this.props.onSubmit({ ...this.state });
    // this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        {/* <label>
          Agree to terms
          <input
            type="checkbox"
            // checked={agreed}
            onChange={this.handleChange}
          />
        </label> */}

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
