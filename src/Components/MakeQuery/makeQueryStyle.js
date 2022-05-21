import styled from "styled-components";
import Images from "../../Assests";

export const ContactBox = styled.div`
  width: 30%;
  height: auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 25px 0;
  @media screen and (max-width: 1268px) {
    width: 400px;
  }
`;

export const Uae = styled.div`
  background: url(${Images.uae});
  position: absolute;
  width: 24px;
  height: 24px;
  top: 18px;
  left: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;
