import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

function Main() {
  return (
    <React.StrictMode>
      <div>
        <App />
      </div>
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
