import React from "react";
import {
  DiFirebase,
  DiReact,
  DiGithubBadge,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

import {
  Framer,
  Next,
  MaterialUI,
  Firebase,
  FontAwesome,
  Git,
} from "../../../public/images/extraSVG";

const Technologies = () => (
  <Section id="tech">
    <div className="techScreen">
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development world.
        From Back-end To Design
      </SectionText>
      <List>
        <ListItem>
          <picture className="FE">
            <DiReact size="3rem" />
            <Next size="3rem" />
            <DiHtml5 size="3rem" />
            <DiCss3 size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experiece with <br />
              React.js, Next.js, HTML5 and CSS3
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <Firebase size="3rem" />
            <DiNodejsSmall size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and Firebase
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiGithubBadge size="3rem" />
            <Git size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Version-Control</ListTitle>
            <ListParagraph>
              Experience with <br />
              Git/GitHub
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <FontAwesome size="3rem" />
            <Framer size="3rem" />
            <MaterialUI size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Material UI, Chakra UI, and Framer Motion
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </div>
  </Section>
);

export default Technologies;
