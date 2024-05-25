import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/logo_SBO.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo municipio" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Alunos</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;