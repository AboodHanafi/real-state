import styled from "styled-components";
import Images from "../../Assests";
import { Container, FlexBox } from "../../Theme/themeStyle";

export const HeroImage = styled.div`
  width: 100%;
  height: 770px;
  background: url(${Images.hero}) center center no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1267px) {
    height: 843px;
  }
`;

export const NavBar = styled(FlexBox)`
  padding: 28px 0;
`;

export const Logo = styled.div`
  width: 73px;
  height: 31px;
  background: url(${Images.logo}) center center no-repeat;
  background-size: auto;
`;

export const Numbers = styled(FlexBox)`
  width: 30%;
  height: 31px;
  justify-content: end;
`;

export const Number = styled(FlexBox)`
  font-family: "Poppins";
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
`;

export const HeroInner = styled(FlexBox)`
  width: 100%;
  height: 467px;
  padding: 3px 0;
  margin-top: 64px;
`;

export const HeroDetails = styled(FlexBox)`
  width: 68%;
  height: inherit;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextContainer = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
