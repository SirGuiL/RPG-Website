import styled from "styled-components";

export const SectionContainer = styled.section`
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  h1 {
    color: ${({ lightBg }) => (lightBg ? "#010606" : "#f9f9f9")};
    text-decoration: underline;
  }
`;
