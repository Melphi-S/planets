import Header from "../header/header";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./app.module.scss";
import Planet from "../../pages/planet";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="Mercury" replace />} />
        <Route path=":planetName" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
