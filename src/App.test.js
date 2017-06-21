import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Button } from 'react-toolbox/lib/button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
