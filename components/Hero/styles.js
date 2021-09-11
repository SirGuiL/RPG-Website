import styled from "styled-components";

export const HeroContainer = styled.section`
  background: url("background.png");
  background-size: 100% auto;
  width: 100%;
  height: 100vh;

  div {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      color: #fff;
      font-size: 38px;
    }

    p {
      color: #fff;
      font-size: 14px;
      width: 250px;
      text-align: center;
      margin-top: 10px;
    }
  }
`;
