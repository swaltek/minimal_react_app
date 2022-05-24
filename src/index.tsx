import { createRoot } from 'react-dom/client';
import * as React from 'react';

const App = () => {
  const app_name: string = 'minimal_react_app';
  return <h1>{`Welcome to ${app_name.toUpperCase()}!`}</h1>;
}

const container =  document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

