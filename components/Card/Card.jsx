import { CardImage, CardBox, CardFont, ViewMoreLink } from "./styles";

import { AiOutlinePlus } from "react-icons/ai";

const Card = ({ image, altImage, light, text1, text2, text3, text4, link }) => {
  return (
    <CardBox light={light}>
      <CardImage src={image} alt={altImage} light={light} />
      <div>
        <CardFont light={light}>{text1}</CardFont>
        <CardFont light={light}>{text2}</CardFont>
        {text3 && <CardFont light={light}>{text3}</CardFont>}
        {text4 && <CardFont light={light}>{text4}</CardFont>}
        <ViewMoreLink href={`/view-more/${link}`}>
          <AiOutlinePlus id="icon" />
          View More
        </ViewMoreLink>
      </div>
    </CardBox>
  );
};

export default Card;
