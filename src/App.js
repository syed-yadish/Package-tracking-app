import "./css/App.css";

import { useState, useEffect } from "react";

import SearchPage from "./components/SearchPage";

function App() {
  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
  console.log("app data", endpoint);
  //Data from API

  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);

  useEffect(() => {
    //console.log("check");
    const getData = async () => {
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        //The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers.

        const data = await response.json();
        setInformation(data);
        setStatus("App online");
        //API responsive
      } catch {
        setStatus("App Offline");
        //API not responding
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>{status}</h1>
        <SearchPage information={information} />
      </header>
    </div>
  );
}

export default App;
