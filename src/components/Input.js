import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: ${props => props.theme.boxBorder};
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px 15px;
`;
const Text = styled.input`
  border: none;
  font-size: 24px;
  flex: 1;
`;
const IconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = 'text',
  Icon,
}) => (
  <Container>
    <Text
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      type={type}
    />
    <IconButton>
      <Icon />
    </IconButton>
  </Container>
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  Icon: PropTypes.func,
};

export default Input;
