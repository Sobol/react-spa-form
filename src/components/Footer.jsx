import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <footer>
        <p className="align-self-center">&copy; {(new Date().getFullYear())}. Created by Paweł Sobolewski</p>
      </footer>
    );
  }
}
