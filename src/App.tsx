import Modal from "react-modal";
import styles from "./App.module.scss";
import CountriesList from "./Pages/CountriesList";
import BasicTable from "../src/Components/Table";

Modal.setAppElement("#root");

function App() {
  return (
    <div className={styles.App}>
      <BasicTable />
      <CountriesList />
    </div>
  );
}

export default App;
