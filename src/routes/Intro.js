import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Logo from '../components/AnimatedLogo';
import Input from '../components/Input';
import { Magnifier } from '../components/Icons';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  padding-bottom: 30vh;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${props => props.theme.darkGreyColor};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Welcome = styled.h1`
  margin-top: 2rem;
  font-size: ${props => props.theme.emphSize};
  color: ${props => props.theme.bgColor};
`;
const DependencyList = styled.ul`
  color: white;
  font-size: 20px;
  margin: 2rem 0;
  list-style-type: disc;
  li {
    margin: 0.5rem 0;
  }
`;
const Intro = ({ history }) => {
  const search = useInput('');
  const onSubmit = event => {
    event.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    <Wrapper>
      <Logo size={250} />
      <Welcome>Parcel-React Boilerplate</Welcome>
      <DependencyList>
        <li>Styled Components</li>
        <li>React Router Dom</li>
        <li>Redux and Redux Saga</li>
        <li>...etc</li>
      </DependencyList>
      <form onSubmit={onSubmit}>
        <Input placeholder="Search to github..." icon={Magnifier} {...search} />
      </form>
    </Wrapper>
  );
};

Intro.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }),
};

export default Intro;
