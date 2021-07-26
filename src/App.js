import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import PhoneContainer from "./components/PhoneContainer";
import CarContainer from "./components/CarContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PhoneContainer />
      </div>
    </Provider>
  );
}

export default App;
