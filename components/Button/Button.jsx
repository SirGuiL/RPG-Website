import { ButtonContainer, ButtonContent } from "./styles";

const Button = ({ text, link }) => {
  return (
    <ButtonContainer href={`/${link}`}>
      <ButtonContent>{text}</ButtonContent>
    </ButtonContainer>
  );
};

export default Button;
