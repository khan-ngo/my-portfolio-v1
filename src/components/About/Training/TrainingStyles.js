import styled from "styled-components";

export const TrainingContainer = styled.div`
  font-family: "Raleway", sans-serif;
  padding: 50px 0;
  background: #fff;
  text-align: center;
  word-wrap: break-word;
`;

export const TrainingContent = styled.div`
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
`;

export const TrainingHeader = styled.div`
  font-size: 3rem;  text-align: center;
  padding-bottom: 25px;
  font-weight: 600;
  color: #9d967c;
  line-height: 1.2;
  @media (max-width: 600px) {
    font-size: 2.8rem;
`;

export const Program = styled.div`
  padding: 40px;
  width: 46%;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  &:after {
    content: "";
    position: relative;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    display: block;
    width: 40px;
    height: 1px;
    background: darken(#a2a2a2, 50%);
    transition: width 0.3s;

    &:hover &:after {
      width: 25px;

      &:hover {
        color: #63b7e6;
      }
    }
  }
`;

export const TrainingProgramName = styled.div`
  color: darken(#a2a2a2, 20%);
  font-size: 24px;
  font-weight: 100;
  transition: color 0.3s;
`;

export const TrainingSchool = styled.div`
  color: darken(#a2a2a2, 20%);
  font-size: 24px;
  font-weight: 100;
  transition: color 0.3s;
`;

export const TrainingIcon = styled.div`
  font-size: 2.6em;
  display: block;
  transition: color 0.3s;
  color: #a2a2a2;

  &:before,
  &:after {
    position: static;
  }
`;

export const TrainingDescription = styled.div`
  margin-top: 10px;
  color: #a2a2a2;
  text-align: left;
  text-indent: 1em;
  font-size: 16px;
  line-height: 26px;
  transition: color 0.3s;

  &:hover {
    color: #555;
  }
`;
