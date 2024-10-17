import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import { colors } from './variables';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
          colorLink: colors.primary,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);