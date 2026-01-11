import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons, SocialIconsF } from '../Header/HeaderStyles';
import { FiverrSVG } from '../../styles/GlobalComponents';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href='tel:111-111-1111'>+923069029740</LinkItem>
          </LinkColumn>

          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href='kaifsasoli1@gmail.com'>kaifsasoli1@gmail.com</LinkItem>
          </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
         <CompanyContainer>
            <Slogan>
                Building intelligent, scalable backend solutions.
            </Slogan>
         </CompanyContainer>
         <SocialIcons href='https://github.com/Kaif-Sasoli'>
              <AiFillGithub size='3rem'/>
            </SocialIcons>
             <SocialIconsF href='https://github.com'>
              <FiverrSVG size={28}/>
            </SocialIconsF>
            <SocialIcons href='https://www.linkedin.com/in/kaif-sasoli-308521204/'>
                <AiFillLinkedin size='3rem'/>
            </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
