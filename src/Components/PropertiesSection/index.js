import React from "react";

import { CartItem, SectionWrapper, ItemImage } from "./propertiesStyle";
import { sectionData } from "../../Assests";
import { InfoText, Typography } from "../../Theme/themeStyle";
import { InputWrapper } from "../../Components/MakeQuery/makeQueryStyle";

const PropertiesSection = () => {
  return (
    <SectionWrapper height={"190px"}>
      {sectionData.map((item) => {
        return (
          <CartItem key={item.id}>
            <ItemImage background={`url(${item.icon})`} />
            <InputWrapper>
              <Typography
                width={"80%"}
                margin={"12px 0 24px 0"}
                fontSize={"30"}
                fontWeight={"700"}
                color={"#000"}
              >
                {item.description}
              </Typography>
              <InfoText fontSize={"26"} fontWeight={"400"} color={"#848894"}>
                {item.title}
              </InfoText>
            </InputWrapper>
          </CartItem>
        );
      })}
    </SectionWrapper>
  );
};

export default PropertiesSection;
