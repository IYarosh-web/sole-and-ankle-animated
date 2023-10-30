import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const NavLink = (props) => {
  return (
    <Link href={props.href}>
      <Text>{props.label}</Text>
      <SubText>{props.label}</SubText>
    </Link>
  );
}


const Text = styled.label`
  position: relative;
  transition: 200ms;
  top: 0;
`;

const SubText = styled.label`
  position: relative;
  height: 0;
  transition: 200ms;
  top: 0%;
  font-weight: bold;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }

  &:hover ${Text} {
    top: -100%;
  }
  &:hover ${SubText} {
    top: -100%;
  }
`;


export default NavLink;
