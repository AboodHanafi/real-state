import {
  HeroImage,
  Logo,
  NavBar,
  Numbers,
  Number,
  HeroInner,
  HeroDetails,
  TextContainer,
} from "./heroStyle";
import { RiWhatsappFill } from "react-icons/ri";
import { IoCallSharp } from "@react-icons/all-files/io5/IoCallSharp";

import { Fragment } from "react";
import { Container, InfoText, Typography } from "../../Theme/themeStyle";
import MakeQuery from "../MakeQuery";

const Hero = () => {
  return (
    <Fragment>
      <HeroImage>
        <Container>
          <NavBar>
            <Logo />
            <Numbers>
              <Number rightPadding={"20px"}>
                <IoCallSharp />
                <span>+970592798686</span>
              </Number>
              <Number leftPadding={"20px"} Fillcolor={"#4caf50"}>
                <RiWhatsappFill />
                <span>+970592798686</span>
              </Number>
            </Numbers>
          </NavBar>

          <HeroInner>
            <HeroDetails>
              <Typography fontSize={"48"} fontWeight={"700"}>
                VEINCE BEACH RENTALS
              </Typography>
              <InfoText fontSize={"24"}>
                the stunning Al Raha Beach development is only a 15-minute drive
                from Abu Dhabi city, and five minutes from Abu Dhabi
                International Airport
              </InfoText>

              <TextContainer>
                <Typography
                  fontSize={"32"}
                  fontWeight={"700"}
                  margin={"20px 0"}
                >
                  What we’re offering?
                </Typography>
                <InfoText fontSize={"24"} margin={"12px 0"}>
                  01 Waterfront Development
                </InfoText>
                <InfoText fontSize={"24"} margin={"12px 0"}>
                  02 Attractive Rental Prices
                </InfoText>
                <InfoText fontSize={"24"} margin={"12px 0"}>
                  03 Family Friendly Community
                </InfoText>
              </TextContainer>
            </HeroDetails>
            <MakeQuery />
          </HeroInner>
        </Container>
      </HeroImage>
    </Fragment>
  );
};

export default Hero;
