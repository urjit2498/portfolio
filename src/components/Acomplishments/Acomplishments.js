import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AccomplishData } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes onClick={() => window.open('https://github.com/urjit2498', '_blank')}>
      {AccomplishData.map((acc, index) => (
        <Box key={index} >
          <BoxNum>{acc.number}+</BoxNum>
          <BoxText>{acc.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
