import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutHeaderContainer = styled.div`
  background: #444649;
  padding: 50px 0;
  font-family: "Arvo", serif;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
`;

export const AboutHeader = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: #fffdff;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const BioWrapper = styled.div`
  /* display: flex;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  } */
`;

export const BioTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  /* max-width: 655px; */

  @media (max-width: 800px) {
    margin: 0;
    align-items: center;
  }
`;

export const BioText = styled.div`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 5px;
  padding: 0 15px;
  color: #444649;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;
