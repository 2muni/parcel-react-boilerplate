import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: ${props => props.theme.boxBorder};
  width: 100%;
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  padding: 7px 12px;
`;
const Text = styled.input`
  border: none;
  font-size: ${props => props.size}px;
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
  size = 24,
  icon,
}) => {
  const Icon = icon;
  return (
    <Container>
      <Text
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        size={size}
        type={type}
      />
      <IconButton>
        <Icon />
      </IconButton>
    </Container>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  size: PropTypes.number,
  icon: PropTypes.func,
};

export default Input;
