import styled from "styled-components";
import Images from "../../Assests";
import { FlexBox } from "../../Theme/themeStyle";

export const HeroImage = styled.div`
  width: 100%;
  height: 770px;
  background: url(${Images.hero}) center center no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1267px) {
    height: auto;
    padding-bottom: 50px;
  }
`;

export const NavBar = styled(FlexBox)`
  width: 100%;
  padding: 28px 0;
  flex-wrap: wrap;
  @media (max-width: 1250px) {
    justify-content: center;
  }
`;

export const Logo = styled(FlexBox)`
  width: 20%;
  height: 31px;
  background: url(${Images.logo}) no-repeat;
  background-size: auto;
  @media (max-width: 785) {
    width: 50%;
  }
`;

export const Numbers = styled(FlexBox)`
  width: 40%;
  height: 31px;
  justify-content: end;
  min-width: 320px;
  max-width: 400px;
  flex-wrap: wrap;
  @media (max-width: 785px) {
    width: 80%;
    margin-top: 20px;
    justify-content: center;
  }
`;

export const Number = styled(FlexBox)`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #ffffff;
  padding-left: ${(props) => (props.leftPadding ? props.leftPadding : "0")};
  padding-right: ${(props) => (props.rightPadding ? props.rightPadding : "0")};

  svg {
    width: 24px;
    height: 24px;
    padding-right: 8px;
    fill: ${(props) => (props.Fillcolor ? props.Fillcolor : "currentcolor")};
  }
  @media (max-width: 760px) {
    padding: 0 4px;
    margin: 10px 0;
  }
`;

export const HeroInner = styled(FlexBox)`
  width: 100%;
  height: 467px;
  padding: 3px 0;
  margin-top: 64px;
  @media screen and (max-width: 1268px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 30px;
    height: auto;
  }
`;

export const HeroDetails = styled(FlexBox)`
  width: 68%;
  height: inherit;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 1268px) {
    width: 350px;
  }
`;

export const TextContainer = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  align-items: start;
`;
