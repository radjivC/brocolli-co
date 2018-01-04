import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRenderer } from 'react-test-renderer/shallow';

const shallow = createRenderer();

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow.render(<App />, div);
});
