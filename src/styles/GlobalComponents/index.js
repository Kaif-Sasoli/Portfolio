import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionText2 = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionText3 = styled.p`
  max-width: 800px;
  font-size: 18px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 16px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : "" };

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`
export const SecondaryBtn = styled.button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '150px' : '262px'};
  height: ${({ alt }) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
  color: #fff;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '184px'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;  
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`

export const FiverrSVG = ({ size = 24, color = "currentColor", ...props }) => (
 <svg 
 width={size} 
 height={size} 
 viewBox="0 0 24 24" 
 role="img" 
 xmlns="http://www.w3.org/2000/svg" 
 fill={color}
 {...props}>
  <title>Fiverr icon</title>
  <path d="M13.639,11.928h-0.954c0.06-0.258,0.216-0.492,0.534-0.492C13.465,11.436,13.639,11.664,13.639,11.928z M24.001,12 c0,6.627-5.373,12-12,12s-12-5.373-12-12s5.373-12,12-12S24.001,5.373,24.001,12z M6.217,9.78c0,0.298,0.242,0.54,0.54,0.54 c0.298,0,0.54-0.242,0.54-0.54s-0.242-0.54-0.54-0.54C6.459,9.24,6.217,9.482,6.217,9.78z M7.735,13.2h-0.42v-2.526H4.849v-0.162 c0-0.318,0.318-0.324,0.48-0.324c0.186,0,0.27,0.018,0.27,0.018V9.33c0,0-0.168-0.024-0.396-0.024c-0.516,0-1.47,0.144-1.47,1.236 v0.138h-0.45v0.81h0.45v1.71h-0.42v0.81h2.028V13.2H4.849v-1.71h1.35v1.71h-0.42v0.81h1.956V13.2z M11.149,11.484h0.372v-0.81 h-1.77v0.81h0.3l-0.384,1.2c-0.072,0.198-0.09,0.438-0.09,0.438H9.553c0,0-0.018-0.24-0.09-0.438l-0.384-1.2h0.3v-0.81h-1.77v0.81 h0.372l0.924,2.52h1.32L11.149,11.484z M14.797,12.204c0-0.924-0.558-1.608-1.548-1.608c-1.074,0-1.734,0.762-1.734,1.74 c0,0.888,0.642,1.746,1.83,1.746c0.9,0,1.434-0.468,1.434-0.468l-0.408-0.774c0,0-0.444,0.318-0.936,0.318 c-0.354,0-0.69-0.186-0.774-0.612h2.112C14.767,12.54,14.797,12.312,14.797,12.204L14.797,12.204z M17.773,10.632 c0,0-0.066-0.012-0.132-0.012c-0.51-0.006-0.93,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1 c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486 c0-0.606,0.3-1.002,0.918-1.002c0.138,0,0.228,0.018,0.228,0.018V10.632z M20.731,11.73v-1.098c0,0-0.066-0.012-0.132-0.012 c-0.504-0.006-0.924,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81 h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486c0-0.606,0.3-1.002,0.918-1.002 C20.641,11.712,20.731,11.73,20.731,11.73z"/></svg>
);


export const SVGComponent = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"Fiverr icon"}</title>
    <path d="M13.639,11.928h-0.954c0.06-0.258,0.216-0.492,0.534-0.492C13.465,11.436,13.639,11.664,13.639,11.928z M24.001,12 c0,6.627-5.373,12-12,12s-12-5.373-12-12s5.373-12,12-12S24.001,5.373,24.001,12z M6.217,9.78c0,0.298,0.242,0.54,0.54,0.54 c0.298,0,0.54-0.242,0.54-0.54s-0.242-0.54-0.54-0.54C6.459,9.24,6.217,9.482,6.217,9.78z M7.735,13.2h-0.42v-2.526H4.849v-0.162 c0-0.318,0.318-0.324,0.48-0.324c0.186,0,0.27,0.018,0.27,0.018V9.33c0,0-0.168-0.024-0.396-0.024c-0.516,0-1.47,0.144-1.47,1.236 v0.138h-0.45v0.81h0.45v1.71h-0.42v0.81h2.028V13.2H4.849v-1.71h1.35v1.71h-0.42v0.81h1.956V13.2z M11.149,11.484h0.372v-0.81 h-1.77v0.81h0.3l-0.384,1.2c-0.072,0.198-0.09,0.438-0.09,0.438H9.553c0,0-0.018-0.24-0.09-0.438l-0.384-1.2h0.3v-0.81h-1.77v0.81 h0.372l0.924,2.52h1.32L11.149,11.484z M14.797,12.204c0-0.924-0.558-1.608-1.548-1.608c-1.074,0-1.734,0.762-1.734,1.74 c0,0.888,0.642,1.746,1.83,1.746c0.9,0,1.434-0.468,1.434-0.468l-0.408-0.774c0,0-0.444,0.318-0.936,0.318 c-0.354,0-0.69-0.186-0.774-0.612h2.112C14.767,12.54,14.797,12.312,14.797,12.204L14.797,12.204z M17.773,10.632 c0,0-0.066-0.012-0.132-0.012c-0.51-0.006-0.93,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1 c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486 c0-0.606,0.3-1.002,0.918-1.002c0.138,0,0.228,0.018,0.228,0.018V10.632z M20.731,11.73v-1.098c0,0-0.066-0.012-0.132-0.012 c-0.504-0.006-0.924,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81 h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486c0-0.606,0.3-1.002,0.918-1.002 C20.641,11.712,20.731,11.73,20.731,11.73z" />
  </svg>
);

