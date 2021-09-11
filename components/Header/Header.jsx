import { FaHatWizard } from "react-icons/fa";

import { HeaderContainer, Logo } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="logo.png" alt="logo" />
      <div>
        <a href="#characters">Characters</a>
        <a href="#races">Races</a>
        <a href="#classes">Classes</a>
        <div>
          <a href="/sign-in">
            {" "}
            <FaHatWizard /> Sign In
          </a>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
