import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import css from '../styles/style.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;