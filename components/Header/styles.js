import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;

    a {
      color: #fff;
      font-size: 18px;
      padding: 20px;
      transition: 0.2s;
    }

    a:hover {
      color: rgba(255, 255, 255, 0.7);
    }

    a:last-child {
      background-color: rgba(0, 0, 0, 0.5);
      margin-right: 0;
      transition: 0.2s;
    }

    a:last-child:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
`;

export const Logo = styled.img`
  margin: 10px 10px 10px 20px;
  width: 40px;
  height: 40px;
`;
