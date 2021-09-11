import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 60px;
  background: ${({ lightBg }) => (lightBg ? "#E8E8E8" : "#1A1B1B")};

  h1 {
    color: ${({ lightBg }) => (lightBg ? "#1A1B1B" : "#E8E8E8")};
    text-decoration: underline;
    margin-bottom: 30px;
    font-size: 28px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
