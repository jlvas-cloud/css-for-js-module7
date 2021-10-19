import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import theme from '../../theme';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {

  

  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper>
              <SecondaryStory key={story.id} {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper>
              <OpinionStory key={story.id} {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 16px;
  margin-bottom: 48px;

  @media ${p=>p.theme.queries.ipadAndUp}{
    grid-template-columns: 2fr minmax(0,1fr);
    grid-template-areas:
    'main-story secondary-stories'
    'opinion-stories opinion-stories'
    'advertisement advertisement';
  }

  @media ${p=>p.theme.queries.laptopAndUp}{
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    
  }

`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${p=>p.theme.queries.ipadAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
  }

`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${p=>p.theme.queries.laptopAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;

  }

`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;


  @media ${p=>theme.queries.laptopAndUp}{
    flex-direction: column;
    gap: revert;
    
  }
`;

const OpinionList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${p=>p.theme.queries.ipadAndUp}{
    flex-direction: row;
    gap: 8px;
    flex: 1;
  }

  @media ${p=>p.theme.queries.laptopAndUp}{
    flex-direction: column;
    
  }  
`

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type){
    border-bottom: 1px solid var(--color-gray-300);
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
`

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletOnly}{
    flex: 1;
    &:not(:last-of-type){
      border-bottom: revert;
      margin-bottom: revert;
      padding-bottom: revert;
    }
  }
  
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${p=>p.theme.queries.laptopAndUp}{
    border-top: 1px solid var(--color-gray-300);
    padding-top: 8px;  
    padding-right: 16px;
  }
`;




export default MainStoryGrid;
