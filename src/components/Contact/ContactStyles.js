import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #182327;
  padding: 50px 0;
  font-family: "Arvo", serif;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const ContactHeaderContainer = styled.div`
  background: #182327;
  padding: 50px 0;
  font-family: "Arvo", serif;
`;

export const ContactHeader = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: #9d967c;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.8rem;
  color: #c0c0c0;
  padding: 20px 0;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 10px auto;
  padding: 10px 10px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 600px;
  margin: 30px auto 30px;
`;

export const Astyle = styled.a`
  color: #9d967c;
  font-size: 4rem;

  &:hover {
    color: #fffdff;
  }

  @media (max-width: 600px) {
    font-size: 3rem;
    margin: 10px auto;
  }
`;
