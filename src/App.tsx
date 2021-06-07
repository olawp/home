import React from 'react';
import { chakra, ChakraProvider } from '@chakra-ui/react';
import Routes from './Routes/Routes';
import theme from './Styles/theme';

const App: React.FC = () => {
  // Meh solution, will fix later
  const root = document.getElementsByTagName('body')[0];
  root.style.backgroundColor = '#34495e';

  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
};

export default App;
