import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import App from './Containers/App';

const store = configureStore();

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root