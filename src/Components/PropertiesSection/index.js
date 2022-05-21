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
          <CartItem>
            <ItemImage background={`url(${item.icon})`} />
            <InputWrapper>
              <Typography
                margin={"12px 0"}
                style={{
                  marginLeft: "24px",
                }}
                fontSize={"30"}
                fontWeight={"700"}
                color={"#000"}
              >
                {item.description}
              </Typography>
              <InfoText
                margin={"12px 0"}
                style={{
                  marginLeft: "24px",
                }}
                fontSize={"26"}
                fontWeight={"400"}
                color={"#848894"}
              >
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
