import React from "react";
import logo from './logo.svg';
import {CountryForm} from "./components/components";
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  React.useEffect(() => {
    fetch("/getCountry")
      // .then((res) => res.json())
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>{!data ? "Loading..." : data}</p> */}
        <CountryForm></CountryForm>
      </header>
    </div>
  );
}

export default App;
