
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import App from './app';
import customTheme from './contexts/theme';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);