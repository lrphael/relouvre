
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import { store } from "./contexts/redux/store"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import { store } from "./contexts/redux/store"

import './index.css';


import App from './app';
import customTheme from './contexts/theme';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { ConnectionProvider } from '@solana/wallet-adapter-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </Provider>
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);