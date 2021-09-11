import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Section title="Characters" />
      <Section title="Races" lightBg cards={<Card />} />
      <Section title="Classes" />
    </div>
  );
}
