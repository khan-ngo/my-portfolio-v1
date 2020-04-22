import styled from "styled-components";
import { ModalHeader } from "reactstrap";

export const ExperienceContainer = styled.div`
  background: #444649;
  padding: 100px 0;
  font-family: "Arvo", serif;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const ExperienceHeader = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: #fffdff;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;
