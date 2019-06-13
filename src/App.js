import React from 'react';
import { Typography, Button } from 'antd';

import logo from './logo.svg';
import './App.css';

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title level={2} style={{ color: '#FFF' }}>
          Create React App - Ant Design - Electron
        </Title>
        <Button
          onClick={() => window.open('https://github.com/bkdev98/cra-antd-electron')}
          type="primary"
          size="large"
        >
          Github
        </Button>
      </header>
    </div>
  );
}

export default App;
