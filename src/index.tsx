import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Routing Imports
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import './App.css';
import App from './App';
import chakra from './theme/chakra';

ReactDOM.render(
  <ChakraProvider theme={chakra} resetCSS>
    <App />
    <ColorModeScript initialColorMode={'light'} />
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();