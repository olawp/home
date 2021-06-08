import React from 'react';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';

const MainLayout: FC = ({ children }) => (
  <Box w="100%" padding="0 20px" margin="0 auto">
    {children}
  </Box>
);

export default MainLayout;
