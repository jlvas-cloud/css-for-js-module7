import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupDesktop>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroupDesktop>
        <Logo />
        <SubscribeWrapper>
          <SubscribeButton>
            Subscribe
          </SubscribeButton>
          <SubscribeLink>
            Already a Subscriber?
          </SubscribeLink>
        </SubscribeWrapper>
        
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${p=>p.theme.queries.laptopAndUp}{
    display:none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupDesktop = styled(ActionGroup)`
    display:none;

    @media ${p=>p.theme.queries.laptopAndUp}{
      display: flex;
    }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${p=>p.theme.queries.laptopAndUp}{
    //justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }

`;

const SubscribeWrapper = styled.div`
  display: none;
  
  @media ${p=>p.theme.queries.laptopAndUp}{
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    justify-self: end;
    align-items: center;
  }
`

const SubscribeButton = styled.button`
  background-color: var(--color-primary);
  margin-bottom: 8px;
  color: white;
  border-radius: 5px;
  padding: 8px 24px 7px;
  text-transform: uppercase;
  font-family: 'Helvetica';
  font-weight: var(--font-weight-medium);
`

const SubscribeLink = styled.a`
    font-style: italic;
    text-decoration: underline;
`

export default Header;
