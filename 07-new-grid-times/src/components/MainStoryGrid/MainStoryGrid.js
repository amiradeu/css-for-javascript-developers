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
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
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
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories'
  }

  @media ${QUERIES.desktopAndUp} {
    gap: 0px;
    grid-template-columns: 2fr minmax(380px, 1fr) 1fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement'
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletOnly} {
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }

  @media ${QUERIES.desktopAndUp} {
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletOnly} {
    margin-left: -32px;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-inline: 16px;
    padding-block-end: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.desktopAndUp} {
    padding-inline-start: 16px;
    padding-block-end: 16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.desktopAndUp} {
    margin-inline-start: 16px;
    margin-block-start: 16px;
    padding-block-start: 16px;
    border-top: 1px solid ${COLORS.gray[300]};
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid ${COLORS.gray[300]};
  }

  & > *:not(:first-child) {
    padding-top: 16px;
  }

  /* StoryList under Opinion Section */
  ${OpinionSection} & {
    @media ${QUERIES.tabletOnly} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;

      & > *:not(:last-child) {
        padding-bottom: 0px;
        border-bottom: none;
      }

      & > *:not(:first-child) {
        padding-top: 0px;
      }
    }
  }
`;

export default MainStoryGrid;