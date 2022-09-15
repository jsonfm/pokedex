import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';


import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";


const store = createStore(pokemonsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<BrowserRouter>
  <Provider store={store}>
    <App tab="home" />
  </Provider>
</BrowserRouter>
);