import styled from "styled-components";

import Link from "next/link";

export const ButtonContainer = styled(Link)``;

export const ButtonContent = styled.button`
  background-color: rgba(71, 92, 108, 0.7);
  color: #fff;
  font-weight: 400;
  width: 300px;
  height: 50px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin-top: 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: rgba(71, 92, 108, 0.9);
  }
`;
