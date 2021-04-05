import React from 'react';

import styles from './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.loginModal}>
        <h1 className={styles.header}>Log in to see more</h1>
        <form className={styles.loginForm}>
          <label htmlFor='email' className={styles.a11yHidden}>Email:</label>
          <input className={styles.loginFormInput} name="email" type="text" placeholder="Email" />

          <label htmlFor='password' className={styles.a11yHidden}>Password:</label>
          <input className={styles.loginFormInput} name="password" type="password" placeholder="password" />
        </form>
      </div>
    );
  }
}

export default Login;
