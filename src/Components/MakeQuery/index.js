import { InfoText, InputBase, Button } from "../../Theme/themeStyle";

import { ContactBox, Uae, InputWrapper } from "./makeQueryStyle";

const MakeQuery = () => {
  return (
    <ContactBox>
      <InfoText
        color={"#000"}
        margin={"22px 24px"}
        fontSize={"24"}
        fontWeight={"700"}
        style={{ maxWidth: "65%" }}
      >
        Fill in your informations and allow us to tell you more.
      </InfoText>
      <InputWrapper style={{ alignItems: "center" }}>
        <InputBase placeHolder="first name" />
        <InputBase placeHolder="last name" />
        <InputBase placeHolder="email" />
        <InputWrapper
          style={{
            width: "82%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <InputBase width={"27%"} />
          <Uae />
          <InputBase width={"52%"} placeHolder="phone number" />
        </InputWrapper>
      </InputWrapper>
      <Button>continue</Button>
    </ContactBox>
  );
};

export default MakeQuery;
