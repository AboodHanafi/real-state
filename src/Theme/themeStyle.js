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
  color: #f2f2f2;
  width: 83%;
  letter-spacing: -0.392px;
  font-family: "Poppins";
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 500)};
  @media screen and (max-width: 1100px) {
    font-size: ${(props) => props.fontSize - 6};
  }
`;

export const Typography = styled.span((props) => ({
  fontFamily: "Poppins",
  fontSize: props.fontSize ? props.fontSize : 18,
  fontWeight: props.fontWeight ? props.fontWeight : 500,
  margin: props.margin ? props.margin : "0",
  color: "#FFF",
  width: "100%",
}));
