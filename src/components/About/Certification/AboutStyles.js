import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #fffdff;
  font-family: "Arvo", serif;
  padding: 100px 0;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutHeader = styled.div`
  font-size: 3rem;
  text-align: center;
  padding-bottom: 25px;
  font-weight: 600;
  color: #9d967c;
  line-height: 1.2;
  @media (max-width: 600px) {
    font-size: 2.8rem;
  }
`;

export const AboutSubHeader = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #444649;
  opacity: 0.7;
  margin-top: 60px;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;

  @media (max-width: 600px) {
    margin-top: 35px;
  }
`;

export const IconTextWrapper = styled.div`
  max-width: 220px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 10px 25px;

  @media (max-width: 600px) {
    max-width: 190px;
  }
`;

export const IconHeader = styled.div`
color: #444649;
opacity: 0.7;
  font-size: 1.25rem
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const IconText = styled.div`
  text-align: center;
  color: #616161;
  padding-top: 5px;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const Icon = styled.img`

  /* width: 200px; */
  /* margin: 0 35px 20px 35px; */
  /* 

`;

export const BioWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
