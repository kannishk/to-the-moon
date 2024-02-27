import { Base } from "./Base";
import { Base64 } from "./Base64";
import { Binary } from "./Binary";
import { Abtash } from "./Abtash";
import { Link } from "react-router-dom";

export function Home() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    item: {
      width: "calc(33.33% - 20px)",
      marginBottom: "20px",
      backgroundColor: "#f0f0f0",
      boxSizing: "border-box",
      padding: "20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    // Media queries for responsiveness
    "@media (max-width: 768px)": {
      item: {
        width: "calc(50% - 20px)",
      },
    },
    "@media (max-width: 480px)": {
      item: {
        width: "calc(100% - 20px)",
      },
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.item}>
        <Base />
      </div>
      <div style={styles.item}>
        <Base64 />
      </div>
      <div style={styles.item}>
        <Binary />
      </div>
      <div style={styles.item}>
        <Abtash />
      </div>
      <div style={styles.item}>
        <Link to="./Morse">Morse</Link>
      </div>
    </div>
  );
}
