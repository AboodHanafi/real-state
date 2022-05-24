import styled from "styled-components";
import { FlexBox } from "../../Theme/themeStyle";

export const SectionWrapper = styled(FlexBox)`
  flex-wrap: wrap;
  width: ${(props) => (props.width ? props.width : "83%")};
  height: ${(props) => props.height};
  align-items: start;
  margin: 40px 9%;
  padding: 0;
  @media screen and (max-width: 1267px) {
    justify-content: center;
  }
`;

export const CartItem = styled(FlexBox)`
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 14.5%;
  height: inherit;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  min-width: 240px;

  @media screen and (max-width: 1483px) {
    margin: 10px;
  }
`;

export const ItemImage = styled(FlexBox)`
  background: ${(props) => props.background} center center no-repeat;
  width: 50px;
  height: 50px;
  padding: 12px;
`;
