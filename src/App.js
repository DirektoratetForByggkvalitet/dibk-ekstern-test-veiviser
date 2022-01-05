/* globals window */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Wizard, StyleProvider } from 'losen';
import autobind from 'react-autobind';

import store from './store';
import cat from './api/cat.json';
import Intro from './pages/Intro';

import dataExport from './exports/data-export';

export default class App extends Component {
  static propTypes = {
    translations: PropTypes.object,
  };

  static defaultProps = {
    translations: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      intro: true,
    };
    autobind(this);
  }

  closeIntro() {
    this.setState({ intro: false });
    window.scrollTo(0, 0);
  }

  showIntro() {
    this.setState({ intro: true });
    window.scrollTo(0, 0);
  }

  render() {
    if (this.state.intro) {
      return (
        <StyleProvider>
          <Intro close={this.closeIntro} />
        </StyleProvider>
      );
    }

    return (
      <Provider store={store}>
        <Wizard
          wizard={cat}
          translations={this.props.translations}
          exports={{ dataExport }}
          showIntro={this.showIntro}
        />
      </Provider>
    );
  }
}
