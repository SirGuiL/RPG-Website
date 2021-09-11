import Button from "../Button/Button";
import { HeroContainer } from "./styles";

const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <h1>RPG Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad
          error quaerat nostrum laborum, fugit iure ducimus ratione corrupti
          veniam, nulla facere, officia assumenda nemo distinctio. Illo error
          labore aliquam.
        </p>
        <Button text="Register" link="home"></Button>
      </div>
    </HeroContainer>
  );
};

export default Hero;
