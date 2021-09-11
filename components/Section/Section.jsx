import { SectionContainer } from "./styles";

const Section = ({ title, lightBg, cards }) => {
  return (
    <SectionContainer lightBg={lightBg}>
      <h1>{title}</h1>
      {cards}
    </SectionContainer>
  );
};

export default Section;
