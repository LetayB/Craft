import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/craft/Counter';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Counter />
    </ChakraProvider>
  );
}

export default App;
