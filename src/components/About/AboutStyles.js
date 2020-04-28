import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #fffdff;
  font-family: "Arvo", serif;
  padding: 0;
`;

export const AboutHeaderContainer = styled.div`
  background: #444649;
  padding: 50px 0;
  font-family: "Arvo", serif;
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

export const ProfilePic = styled.img`
  width: 200px;
  border-radius: 25%;
  border: 3px solid #444649;
  margin: 0 35px 20px 35px;
`;

export const BioTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  max-width: 655px;

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

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const BioWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
