import React from "react";
import { Provider } from "react-redux";





ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider>
        <App />
      </Provider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);