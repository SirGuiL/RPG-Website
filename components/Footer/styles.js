import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-weight: 300;

  p {
    font-size: 14px;
  }

  a {
    color: #5b5b5b;
    transition: 0.2s;
  }

  a:hover {
    color: #000;
  }
`;
