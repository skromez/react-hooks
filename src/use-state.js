import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  )
};

const HookSwitcher = () => {

  const [ color, setColor ] = useState('gray');
  const [fontSize, setFontSize] = useState(14);

  return (
    <div style={{ padding: '10px', backgroundColor: color, fontSize: `${fontSize}px` }}>
      Hello World
      <button
        onClick={() => setColor('white')}>
        Light
      </button>
      <button
        onClick={() => setColor('gray')}>
        Dark
      </button>
      <button
        onClick={() => setFontSize((s) => s+2)}>
        Font Size
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
