import Modal from "react-modal";
import styles from "./App.module.scss";
import CountriesList from "./Pages/CountriesList";

Modal.setAppElement("#root");

function App() {
  return (
    <div className={styles.App}>
      <CountriesList />
    </div>
  );
}

export default App;
