import "./css/App.css";
import Contacts from "./Components/containers/Contacts";
import Messenger from "./Components/containers/Messenger";

function App() {
  return (
    <div className="app">
      {/* Container Left Contacts */}
      <Contacts />
      {/* Container Right for Messeages of Selected (current) Contacted */}
      <Messenger/>
    </div>
  );
}

export default App;
