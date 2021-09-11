import { SectionContainer, CardContainer } from "../Races/styles";

import Card from "../Card/Card";

const Races = () => {
  return (
    <SectionContainer>
      <h1>Characters</h1>
      <CardContainer>
        <Card
          image="wizard.png"
          alt="Wizard"
          text1="Celegorm Galanodel"
          text2="Class: Mage"
          text3="Antecedent: Eremita"
          link="celegorm-galanodel"
        />
        <Card
          image="wizard.png"
          alt="Wizard"
          text1="Celegorm Galanodel"
          text2="Class: Mage"
          text3="Antecedent: Eremita"
          link="celegorm-galanodel"
        />
        <Card
          image="wizard.png"
          alt="Wizard"
          text1="Celegorm Galanodel"
          text2="Class: Mage"
          text3="Antecedent: Eremita"
          link="celegorm-galanodel"
        />
      </CardContainer>
    </SectionContainer>
  );
};

export default Races;
