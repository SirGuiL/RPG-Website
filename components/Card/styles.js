import styled from "styled-components";

export const CardBox = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ light }) => (light ? "#fff" : "#000")};
  padding: 10px 2px 10px 2px;

  div {
    width: 100%;
    padding: 5px;
  }
`;

export const CardImage = styled.img`
  width: 250px;
  border-bottom: solid 1px ${({ light }) => (light ? "#4E4E4E" : "#707070")};
  margin-bottom: 10px;
`;

export const CardFont = styled.p`
  color: ${({ light }) => (light ? "#000" : "#fff")};
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ViewMoreLink = styled.a`
  color: #226ca4;
  transition: 0.2s;
  display: flex;
  font-size: 16px;

  #icon {
    margin-right: 5px;
    font-size: 18px;
  }

  &:hover {
    color: #4a9cdb;
  }
`;
