import styles from "./App.module.css";
import { MainScreen } from "./components/MainScreen";

function App() {
  return (
    <div class={styles.App}>
      <MainScreen />
    </div>
  );
}

export default App;
