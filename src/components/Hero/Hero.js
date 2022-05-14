import React from "react";
import LinkItem from "../Footer/FooterStyles";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <br />
        <br />
        <SectionTitle main center>
          Ramtin Norozzy <br />
        </SectionTitle>
        <SectionText>Front-End Developer</SectionText>
        <Button>say hello</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
