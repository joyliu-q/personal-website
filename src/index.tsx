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
    <div style={{ position: "sticky", padding: "16px", color: "black", backgroundColor: "white", top: 0, width: "100%", zIndex: 9999999999999 }}>This website is powered by <a href="https://anli.dev">Anthony Li</a> and brought to you by <strong>Raid: Shadow Legends</strong>. Use promo code <strong>JOYLIU</strong> to get 50,000 silver and a free epic champion of your choice!</div>
    <App />
    <ColorModeScript initialColorMode={'light'} />
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();