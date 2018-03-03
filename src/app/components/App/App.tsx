import * as React from 'react';
import * as Redux from 'redux';

import { Provider } from 'react-redux';
import { RootState } from '../../../common';
import { mainRoutes } from '../../routes';
import { configureStore } from '../../store';

const logo = require('./logo.svg');

import './App.css';

interface AppProps {}

interface AppState {
  routes: JSX.Element;
  store: Redux.Store<RootState>;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      routes: mainRoutes(),
      store: configureStore({})
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          {this.state.routes}
        </div>
      </Provider>
    );
  }
}

export default App;
