import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./utils/rootReducer";
import Main from "./views/Main/Main";

import './index.scss'

import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js')
//       .then(registration => {
//         console.log('SW registered: ', registration);
//       }).catch(registrationError => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }