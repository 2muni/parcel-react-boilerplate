import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Routes from '../routes';
import Theme from '../styles/Theme';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Wrapper>
            <Routes />
          </Wrapper>
        </Router>
      </>
    </ThemeProvider>
  );
};
