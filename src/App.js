import React from "react";
import "./styles.css";
function App() {
  let loading = true;
  let job = "UI developer";
  let location = "Hyderbad";
  return (
    <div className="App">
      {loading ? <h2>{location}</h2> : <p>{job}</p>}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
export default App;
