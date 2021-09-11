import { SectionContainer, CardContainer } from "../Races/styles";

import Card from "../Card/Card";

const Races = () => {
  return (
    <SectionContainer>
      <h1>Classes</h1>
      <CardContainer>
        <Card
          image="wizard.png"
          alt="Wizard"
          text1="Mage"
          text2="Language: Normal"
          text3="Life: 1d6 per level"
          text4="Main weapon: Grimoire"
          link="mage"
        />
        <Card
          image="wizard.png"
          alt="Wizard"
          text1="Mage"
          text2="Language: Normal"
          text3="Life: 1d6 per level"
          text4="Main weapon: Grimoire"
          link="mage"
        />
        <Card
          image="wizard.png"
          alt="Wizard"
          text1="Mage"
          text2="Language: Normal"
          text3="Life: 1d6 per level"
          text4="Main weapon: Grimoire"
          link="mage"
        />
      </CardContainer>
    </SectionContainer>
  );
};

export default Races;
