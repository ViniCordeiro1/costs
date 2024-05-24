import styles from './Home.module.css'
import AEE from '../../img/AEE.png'

import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Eduka</span>
      </h1>
      <p>Comece a gerenciar os alunos agora mesmo!</p>
      <LinkButton to="/newproject" text="Adicionar" />
      <img src={AEE} alt="imagem Aee" />
    </section>
  )
}

export default Home