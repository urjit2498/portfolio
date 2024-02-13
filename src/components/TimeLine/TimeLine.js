import React, { useState, useRef, useEffect } from 'react';
import {
  AboutMeSectionData,
  AboutMeSectionText,
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './TimeLineStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const initialState = 0;
  const [activeItem, setActiveItem] = useState(initialState);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        (carouselRef.current.scrollWidth * 0.7 * i) / TOTAL_CAROUSEL_COUNT
      );
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TOTAL_CAROUSEL_COUNT
      );
      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from a smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hello there! I'm Urjit Shah, a Software engineer with a deep
        passion for Website development. I thrive on React JS, Node JS, Express, MySQL and MongoDB to build web applications.
        and my journey in IT has been a fascinating exploration of
        4 years.<br/>
        <AboutMeSectionData>
          What Drives Me: 
        </AboutMeSectionData>
        <AboutMeSectionText>
          I am fueled by the belief that software development is not just a job, and I am on a mission to make it a reality. My work is not just a job; it's a way of contributing to IT and making a positive impact on the world. 
          Professional Background: 
          With over 4 years of experience in IT, I have had the privilege of working on a variety of projects. 
        </AboutMeSectionText>
        <AboutMeSectionData>
          Why Work With Me: 
        </AboutMeSectionData>
        <AboutMeSectionText>
          I believe that collaboration with me means a lot. I bring a blend of passion, creativity, and enthusiasm to the table, fostering an environment of
          growth and growth. 
        </AboutMeSectionText>
        <AboutMeSectionData>
          Beyond Work: 
        </AboutMeSectionData>
        <AboutMeSectionText>
          Outside of my professional life, you'll find me passionate about my hobbies. Whether it's Cricket, Badminton,
          Travelling or listening to music, these activities not only rejuvenate me but
          also inspire creativity and fresh perspectives in my professional life.
        </AboutMeSectionText>
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        {TimeLineData.map((item, index) => (
          <CarouselMobileScrollNode
            key={index}
            final={index === TOTAL_CAROUSEL_COUNT - 1}>
            <CarouselItem
              index={index}
              id={`carousel__item-${index}`}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}>
              <CarouselItemTitle>
                {item.year}
                <CarouselItemImg
                  width='208'
                  height='6'
                  viewBox='0 0 208 6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
                    fill='url(#paint0_linear)'
                    fillOpacity='0.33'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear'
                      x1='-4.30412e-10'
                      y1='0.5'
                      x2='208'
                      y2='0.500295'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='white' />
                      <stop
                        offset='0.79478'
                        stopColor='white'
                        stopOpacity='0'
                      />
                    </linearGradient>
                  </defs>
                </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type='button'>
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
