import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="twelve columns">
      <label for="exampleEmailInput">Your email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="twelve columns"
        />
      </div>
      <div className="twelve columns">
      <label for="examplePassword">Your password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="twelve columns"
        />
      </div>
      <button className="u-pull-left">Login</button>
    </form>
  );
};

export default LoginForm;
