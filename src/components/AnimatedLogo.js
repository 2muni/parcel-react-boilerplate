import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Logo } from './Icons';

const Animation = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  animation: ${Animation} infinite 20s linear;
  width: 100%;
  text-align: center;
  pointer-events: none;
`;

const AnimatedLogo = ({ size }) => (
  <Container>
    <Logo size={size} />
  </Container>
);

AnimatedLogo.propTypes = {
  size: PropTypes.number,
};

export default AnimatedLogo;
