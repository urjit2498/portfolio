import React from 'react';

import { Section, SectionText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span, SectionHeroTitle } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <Span>Hello, I am Urjit Shah</Span>
      <SectionHeroTitle main center>
        Welcome to <br />
        My personal portfolio
      </SectionHeroTitle>
      <SectionText>
        4 years of crafting innovative code, transforming ideas into digital reality, and architecting the future of software solutions.
      </SectionText>
      <Button onClick={() => window.open("https://linkedin.com/in/urjitshah2498", "_blank")}>Let's connect</Button>
    </LeftSection>
  </Section>
);

export default Hero;