import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Reducers';
import Table from './table/Table';
import './App.css';

function App() {
  const store = createStore(
      reducers
  );

  return (
    <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
