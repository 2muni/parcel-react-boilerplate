import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Logo from '../components/AnimatedLogo';
import Input from '../components/Input';
import { Magnifier } from '../components/Icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Welcome = styled.h1`
  font-size: ${props => props.theme.emphSize};
  padding-bottom: 2rem;
`;

const Intro = ({ history }) => {
  const search = useInput('');
  const onSubmit = event => {
    event.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    <Wrapper>
      <Logo size={300} />
      <Welcome>Parcel-React Boilerplate</Welcome>
      <form onSubmit={onSubmit}>
        <Input placeholder="Search to github..." Icon={Magnifier} {...search} />
      </form>
    </Wrapper>
  );
};

Intro.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }),
};

export default Intro;
