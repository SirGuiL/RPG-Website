import { ButtonContainer, ButtonContent } from "./styled";

const Button = ({ text, link }) => {
  return (
    <ButtonContainer href={`/${link}`}>
      <ButtonContent>{text}</ButtonContent>
    </ButtonContainer>
  );
};

export default Button;
