import styled from "styled-components";
export const Container = styled.div`
  margin: 0 9%;
`;

export const InnerContainer = styled.div`
  margin: 0 18%;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoText = styled("p")`
  color: ${(props) => (props.color ? props.color : "#f2f2f2")};
  width: 83%;
  letter-spacing: -0.392px;
  font-family: "Poppins";
  font-size: ${(props) => props.fontSize}px;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 500)};
  @media screen and (max-width: 1268px) {
    font-size: ${(props) => props.fontSize - 6}px;
  }
`;

// export const Typography = styled.span((props) => ({
//   fontFamily: "Poppins",
//   fontSize: props.fontSize ? props.fontSize : 18,
//   fontWeight: props.fontWeight ? props.fontWeight : 500,
//   margin: props.margin ? props.margin : "0",
//   color: "#FFF",
//   width: "100%",
// }));

export const Typography = styled("span")`
  font-family: "Poppins";
  font-size: ${(props) => (props.fontSize ? props.fontSize : 18)}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 500)};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : "#f2f2f2")};
  width: 100%;
  @media screen and (max-width: 1268px) {
    font-size: ${(props) => props.fontSize - 6}px;
  }
`;

export const InputBase = styled("input").attrs((props) => ({
  type: "text",
  placeholder: props.placeHolder,
}))`
  width: ${(props) => (props.width ? props.width : "75%")};
  height: 35px;
  border-radius: 8px;
  background-color: #f6f9fc;
  margin: 6px 0;
  padding: 8px 16px;
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #868686;
    text-transform: capitalize;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.392px;
  }
  :-ms-input-placeholder {
    color: #868686;
    text-transform: capitalize;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.392px;
  }
`;

export const Button = styled.button.attrs((props) => ({
  type: "button",
  value: props.value,
}))`
  width: ${(props) => (props.width ? props.width : "82%")};
  border-radius: 8px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#E46027"};
  margin: ${(props) => (props.margin ? props.margin : "24px 0 0 40px")};
  color: ${(props) => (props.color ? props.color : "#FFF")};
  height: 54px;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
`;
