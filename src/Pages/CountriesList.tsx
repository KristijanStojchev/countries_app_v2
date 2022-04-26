import { useState } from "react";
import Modal from "react-modal";
import LoadingSpinner from "../Components/Loader";
import { useCountries } from "../Hooks/UseCountries";
import { useCountry } from "../Hooks/UseCountry";

// import "./CountriesList.css";
import styles from "./CountriesList.module.scss";

export default function CountriesList() {
  const { error, loading, data } = useCountries();
  const [isModalOpened, setisModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const {
    error: errorCountry,
    loading: loadingCountry,
    data: dataCountry,
  } = useCountry(modalContent);

  const changecode = (code: any) => {
    setModalContent(code);
  };

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (loadingCountry) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  if (errorCountry) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="App">
      <ul className={styles.CountriesList}>
        {data.countries.map((country: any) => {
          return (
            <li
              onClick={() => {
                setisModalOpened(true);
                changecode(country.code);
              }}
              key={country.code}
            >
              {country.name}
            </li>
          );
        })}
      </ul>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={() => setisModalOpened(false)}
      >
        <div>
          <p>name: {dataCountry?.country.name}</p>
          <p>capital: {dataCountry?.country.capital}</p>
          <p>currency: {dataCountry?.country.currency}</p>
          <p>phone: {dataCountry?.country.phone}</p>
          <p>native: {dataCountry?.country.native}</p>
        </div>
        <button onClick={() => setisModalOpened(false)}>Close</button>
      </Modal>
    </div>
  );
}
