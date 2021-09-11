import { SectionContainer, CardContainer } from "./styles";

import Card from "../Card/Card";

const Races = () => {
  return (
    <SectionContainer lightBg>
      <h1>Races</h1>
      <CardContainer>
        <Card
          image="wizard.png"
          alt="Wizard"
          text1="Human"
          text2="Language: Normal"
          link="human"
        />
        <Card
          image="wizard.png"
          alt="Wizard"
          text1="Human"
          text2="Language: Normal"
          link="human"
        />
        <Card
          image="wizard.png"
          alt="Wizard"
          text1="Human"
          text2="Language: Normal"
          link="human"
        />
      </CardContainer>
    </SectionContainer>
  );
};

export default Races;
