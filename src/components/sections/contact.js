import React from "react";
import styled from "styled-components";
import { media, mixins, Section, theme, Button } from "../../styles";

const { fontSizes, colors } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 80vh; 
  padding: 60px 0;
  ${media.tablet`
    padding-top: 100px;
    padding-bottom: 100px;
  `};
  ${media.phablet`
    padding-top: 80px;
    padding-bottom: 80px;
  `};
  ${media.phone`
    padding-top: 60px;
    padding-bottom: 60px;
  `};
  div {
    margin: 20px 0;
    width: 100%;
  }
`;
const Contents = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 100%;
  & div {
    margin: 30px 0;
  }
`;
const ContactTitle = styled.h2`
line-height: 1.1;
  // margin: 0;
  margin: 20px 0;
  font-weight: 800;
  color: ${colors.mutedBlack};
  font-size: 40px;
  ${media.tablet`font-size: 38px;`};
  ${media.phablet`font-size: 35px;`};
  ${media.phone`font-size: 30px;`};
  ${media.tiny`font-size: 28px;`};
  `;
const SayHello = styled.div`
  text-align: center;
  ${mixins.flexCenter};
  font-weight: 400;
  margin: 0;
  padding: 0 150px;
  color: ${colors.mutedBlack};
  font-size: 18 px;
  ${media.desktop`
    font-size: 18px;
    padding: 0 150px;
  `};
  ${media.tablet`
    font-size: 18px;
    padding: 0 60px;
  `};
  ${media.phablet`
    font-size: 14px;
    padding: 0 50px;
  `};
  ${media.phone`
    font-size: 14px;
    padding: 0 10px;
  `};
`;
const BtnDiv = styled.div`
  text-align: center;
  display: none;
  ${media.phablet`display: inline-block`};
  ${media.phone`display: inline-block`}; 
`;
const GetInTouchBtn = styled(Button)`
  a {
    color: ${colors.black};
    &:hover {
      color: ${colors.black};      
    }  
  }
  &:hover {
    color: ${colors.black};     
  }  
`;
const MailIdDiv = styled.div`
  text-align: center;
  ${media.phablet`
    display: none;
  `};
  ${media.phone`
    display: none;
  `};                                             
  ${media.tiny`
    display: none;
  `};    
`;
const MailId = styled.a`
  font-size: 45px;
  font-weight: 700;
  color: ${colors.mutedBlack};
  letter-spacing: 1px;
  display: inline-block;
  padding: 0px 7px;
  margin-bottom: 20px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  box-shadow: inset 0 -2px 0 ${colors.mutedBlack};
  &:hover {
    box-shadow: inset 0 -80px 0 0 ${colors.mutedBlack};
    color: ${colors.white};
  }
  text-decoration: none;
  ${media.desktop`font-size: 35px;`};
  ${media.tablet`font-size: 30px;`};
  ${media.phablet`font-size: 18px;`};
  ${media.phone`font-size: 16px;`};                                             
  ${media.tiny`font-size: 14px;`};  
  }                                           
`;
const SocialLinks = styled.div` 
  ${mixins.flexCenter};
  color: ${colors.halfGrey};
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Link = styled.a`
  margin: 0 10px;
  &:hover {
    text-decoration: none !important;
    color: ${colors.white};
  }
`
const LinkName = styled.span`
  padding: 2px 10px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${colors.mutedBlack};
  }
  ${media.desktop`font-size: 16px;`};
  ${media.tablet`font-size: 14px;`};
  ${media.phablet`font-size: 12px;`};
  ${media.phone`display: none`};
`
const LinkIcon = styled.span`
  display: none;
  ${media.desktop`display: none`};
  ${media.tablet`display: none`};
  ${media.phablet`font-size: 20px;`};
  ${media.phone`    
    display: inline;
    font-size: 20px;
  `};
`
const Slash = styled.span`
  ${media.desktop`font-size: 16px;`};
  ${media.tablet`font-size: 14px;`};
  ${media.phablet`font-size: 12px;`};
  ${media.phone`display: none`};
`
const Contact = ({ data }) => {

  const { mailId, socialLinks } = data;
  return (
    <StyledContainer>
      <ContactTitle>Let's Connect<span style={{marginLeft: -0.15+'em'}}> .</span></ContactTitle>
        <SayHello>Thanks for visiting, whether you're interested in knowing what I'm upto or just want to say hi, feel free to reach out my inbox is always open for you.
        </SayHello>
        <MailIdDiv>
          <MailId href={`mailto:${mailId}`}>
            {mailId}
          </MailId>
        </MailIdDiv>
        <BtnDiv>
          <Link href={`mailto:${mailId}`}><GetInTouchBtn>Get In Touch</GetInTouchBtn></Link>
        </BtnDiv>
        <SocialLinks>
          <Link target="_blank" href={socialLinks.linkedIn}>
            <LinkName>LinkedIn</LinkName>
            <LinkIcon>
              <span className="iconify" data-icon="brandico:linkedin-rect" style={{color:'black'}}  data-inline="false"></span>
            </LinkIcon>
          </Link><Slash>&#124;</Slash>
          <Link target="_blank" href={socialLinks.github}>
            <LinkName>GitHub</LinkName>
            <LinkIcon>
              <span className="iconify" data-icon="logos-github-icon" style={{color:'black'}}   data-inline="false"></span>            
            </LinkIcon>
          </Link><Slash>&#124;</Slash>
          <Link target="_blank" href={socialLinks.hackerrank}>
            <LinkName>Hackerrank</LinkName>
            <LinkIcon>
              <span className="iconify" data-icon="fa-brands:hackerrank" style={{color:'black'}} data-inline="false"></span>
            </LinkIcon>
          </Link><Slash>&#124;</Slash>
          <Link target="_blank" href={socialLinks.instagram}>
            <LinkName>Instagram</LinkName>
            <LinkIcon>
              <span className="iconify" data-icon="cib:instagram" data-inline="false" style={{color:'black'}}></span>  
            </LinkIcon>
          </Link>
        </SocialLinks>
    </StyledContainer>
  );
};

export default Contact;
