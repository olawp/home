import * as React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledH1 = styled.h1`
  text-align: center;
  padding-top: 30%;
  font-size: 4em;
  padding-bottom: 20px;
`;

const StyledLink = styled(Link)``;

const Home: FC = () => {
  return (
    <Box>
      <StyledH1>HOME</StyledH1>
      <Flex justifyContent="center" gridGap="3em" fontSize="2em">
        <StyledLink to="/queue">Queue</StyledLink>
        <StyledLink to="/stack">Stack</StyledLink>
        <StyledLink to="/linkedlist">Linked List</StyledLink>
        <StyledLink to="/binarysearchtree">Binary Search Tree</StyledLink>
      </Flex>
    </Box>
  );
};

export default Home;
