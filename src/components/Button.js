import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  max-width: 100px;
  width: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  color: ${props => props.theme.darkGreyColor};
  font-weight: 600;
  background-color: ${props => props.theme.bgColor};
  justify-content: center;
  align-items: center;
  padding: 5px 7px;
  cursor: pointer;
  span {
    margin-right: 5px;
  }
`;

const Button = ({ text, icon }) => {
  const Icon = icon;
  return (
    <Container>
      <span>{text}</span>
      {icon && <Icon />}
    </Container>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.func,
};

export default Button;
