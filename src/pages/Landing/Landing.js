import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import './Landing.scss';
// import img from '../../images/desktop/landing.jpg';

class Landing extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="LandingPage">
        {/* <img src={img} alt="dfzgzdgsd" /> */}
        <section className="page">
          <div className="Box">
            <div className="logo">Questify</div>

            <h1 className="title">
              Questify will turn your life into <br />
              a thrilling game full of amazing
              <br />
              quests and exciting challenges.
            </h1>
            <h2 className="appeal">
              Write your email address to log in
            </h2>

            <form onSubmit={this.handleSubmit}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email"
                className="inputEmail"
              />

              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Password"
                className="inputPassword"
              />

              <NavLink to="/reg" className="registration">
                registration
              </NavLink>

              <button type="submit" className="button">
                go!
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(Landing);
