import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Characters from "../components/Characters/Characters";
import Races from "../components/Races/Races";
import Classes from "../components/Classes/Classes";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Characters />
      <Races />
      <Classes />
      <Footer />
    </div>
  );
}
