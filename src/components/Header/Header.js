import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SiFiverr } from 'react-icons/si';
import { TbBrandFiverr } from "react-icons/tb";
import { FiverrSVG } from '../../styles/GlobalComponents';

import { Container, Div1, Div2, Div3, Span, NavLink, StyledLink, SocialIcons, SocialIconsF } from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Div1>
           <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20px'
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </Link>
      </Div1>
     
       <Div2>
            <li>
               <StyledLink href='#projects'>Projects</StyledLink>
            </li>
            <li>
              <StyledLink href='#technologies'>Technologies</StyledLink>
            </li>
            <li>
               <StyledLink href='#abut'>About</StyledLink>
            </li>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/Kaif-Sasoli'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIconsF href='https://github.com'>
          <FiverrSVG size={28}/>
        </SocialIconsF>
        <SocialIcons href='https://www.linkedin.com/in/kaif-sasoli-308521204/'>
            <AiFillLinkedin size='3rem'/>
        </SocialIcons>
        
      </Div3>


  </Container>
);

export default Header;
