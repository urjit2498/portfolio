import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider/>
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({id, title, image, description, tags, source, visit}) => {
        return(
          <BlogCard key={id} onClick={() => window.open(visit, '_blank')}>
            <Img src={image} alt={title} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stacks</TitleContent>
              <TagList>
                {tags.map((tag) => (
                  <Tag>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Visit</ExternalLinks>
              {source && 
                <ExternalLinks href={source}>Source code</ExternalLinks>
              }
            </UtilityList>
          </BlogCard>
        )
      })}
    </GridContainer>
  </Section>
);

export default Projects;