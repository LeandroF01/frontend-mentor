import { useState } from "react";
import "./App.css";
import { CardRating } from "./components/CardRating/CardRating";
import { CardThanks } from "./components/CardThanks/CardThanks";

function App() {
  const [numStart, setnumStart] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState();

  const [modal, setModal] = useState(true);

  const handleClick = (e) => {
    setValue(e);
  };

  const handleSubmit = () => {
    if (value) {
      console.log(value);
    }
    setModal(false);
  };

  return (
    <header className="App">
      {modal ? (
        <CardRating
          numStart={numStart}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
      ) : (
        <CardThanks value={value} />
      )}
    </header>
  );
}

export default App;
