import styled from "styled-components";
import { FlexBox } from "../../Theme/themeStyle";

export const SectionWrapper = styled(FlexBox)`
  width: ${(props) => (props.width ? props.width : "83%")};
  height: ${(props) => props.height};
  flex-wrap: wrap;
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
  width: 14.5%;
  height: inherit;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
`;

export const ItemImage = styled(FlexBox)`
  background: ${(props) => props.background};
  width: 50px;
  height: 50px;
  margin: 24px 0;
`;
