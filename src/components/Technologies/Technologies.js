import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { MdPalette } from "react-icons/md";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
        <SectionDivider/>
        <br/>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
          "Proficient in Node.js, Express.js, Spring Boot, React.js, Machine Learning, Deep Learning, and Graphic Design tools.
        </SectionText>
        <br/>
        <List>
           <ListItem>
              <DiReact size='3rem'/>
              <ListContainer>
                <ListTitle>Front-End</ListTitle>
                <ListParagraph>
                    Expericence with <br/>
                    React.js 
                </ListParagraph>
              </ListContainer>
           </ListItem>

            <ListItem>
              <DiFirebase size='3rem'/>
              <ListContainer>
                <ListTitle>Back-End</ListTitle>
                <ListParagraph>
                    Expericence with <br/>
                    Node.js Spring Boot
                </ListParagraph>
              </ListContainer>
           </ListItem>

            <ListItem>
              <MdPalette size='2.5rem'/>
              <ListContainer>
                <ListTitle>Graphic Designer</ListTitle>
                <ListParagraph>
                    Expericence with <br/>
                    Photoshop
                </ListParagraph>
              </ListContainer>
           </ListItem>
        </List>
  </Section>
);

export default Technologies;
