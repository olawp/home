import React from 'react';
import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './Routes/Routes';
import theme from './Styles/Theme';

const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
};

export default App;
