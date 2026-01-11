import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionText2, SectionText3, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
       <LeftSection>
           <SectionTitle>
               Welcome To <br/> 
               My Personal Portfolio
           </SectionTitle>
           <SectionText>
             Hello! I’m Muhammad Kaif, a backend developer passionate about Node.js, Express.js, and Spring Boot.<br/>
           </SectionText>
           <Button 
              as={Link} 
              
              href="/images/Muhammad-Kaif_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'white' }}>
              Download CV
            </Button>

                     </LeftSection>
                     
                </Section>
);

export default Hero;