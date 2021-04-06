/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import styles from './Login.css';

const LOGIN = 0;
const SIGNUP = 1;

/**
* Renders a <Login /> component
* @param  props
* @param  props.login - login function to call when login button is clicked
* @param  props.signup - signup function to call when signup button is clicked
*/
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: LOGIN,
      email: undefined,
      username: undefined,
      password: undefined,
      age: undefined,
    };

    this.toggleMode = this.toggleMode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.title = {
      [LOGIN]: 'Log in to see more',
      [SIGNUP]: 'Unlimited free access to the world\'s best patterns',
    };
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { login, signup } = this.props;
    const { mode } = this.state;

    if (mode === LOGIN) {
      login(this.state);
    } else {
      signup(this.state);
    }
  }

  toggleMode() {
    const { mode } = this.state;

    this.setState({
      mode: mode === LOGIN ? SIGNUP : LOGIN,
    });
  }

  render() {
    const { mode } = this.state;

    return (
      <div className={styles.loginModal}>
        <div className={styles.logo}>S</div>
        <h1 className={styles.header}>{this.title[mode]}</h1>
        <form className={styles.loginForm}>
          {
            mode === SIGNUP && (
              <>
                <label htmlFor="username" className={styles.a11yHidden}>Username:</label>
                <input
                  className={styles.loginFormInput}
                  name="username"
                  type="text"
                  placeholder="username"
                  onChange={this.handleChange}
                />
              </>
            )
          }

          <label htmlFor="email" className={styles.a11yHidden}>Email:</label>
          <input
            className={styles.loginFormInput}
            name="email"
            type="text"
            placeholder="email"
            onChange={this.handleChange}
          />

          <label htmlFor="password" className={styles.a11yHidden}>Password:</label>
          <input
            className={styles.loginFormInput}
            autoComplete="false"
            name="password"
            type="password"
            placeholder="password"
            onChange={this.handleChange}
          />

          {
            mode === SIGNUP && (
              <>
                <label htmlFor="age" className={styles.a11yHidden}>Age:</label>
                <input
                  className={styles.loginFormInput}
                  name="age"
                  type="number"
                  placeholder="age"
                  onChange={this.handleChange}
                />
              </>
            )
          }

          <button className={styles.submitButton} type="button" onClick={this.handleSubmit}>
            {
              (mode === LOGIN && 'Log in') || 'Sign up'
            }
          </button>
        </form>
        <button
          className={styles.buttonSwitchMode}
          type="button"
          onClick={this.toggleMode}
        >
          Don&apos;t have an account? Sign up
        </button>
      </div>
    );
  }
}

export default Login;
