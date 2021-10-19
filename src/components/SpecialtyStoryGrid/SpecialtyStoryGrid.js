import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
          <SectionTitle
            cornerLink={{
              href: '/sports',
              content: 'Visit Sports page »',
            }}
          >
            Sports
          </SectionTitle>
          
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
          
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: minmax(0,1fr); //allow for grid children go have overlflow auto
  
  @media ${p=>p.theme.queries.laptopAndUp}{
    gap: revert;
    grid-template-columns: 1fr minmax(0,1fr);
    grid-template-areas:'
      market sports
    ';

  }
`;

const MarketsSection = styled.section`
@media ${p=>p.theme.queries.laptopAndUp}{
  border-right: 1px solid var(--color-gray-300);
  padding-right:16px;
  margin-right: 16px;

}
  
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-area: 'market';
`;

const SportsSection = styled.section`
  grid-area: 'sports'
`;


const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media ${p=>p.theme.queries.ipadAndUp}{
    display:flex;
    //max-width: 100%;
    overflow: auto;
  }

`;



export default SpecialtyStoryGrid;
