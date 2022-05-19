import styles from "./Loader.module.scss";

export default function LoadingSpinner() {
  return (
    <div className={styles.loading_spinner}>
      <div className="loading-spinner"></div>
    </div>
  );
}
