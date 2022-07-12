import { extendTheme } from '@chakra-ui/react';
// import { extendTheme } from '@chakra-ui/core';

const styles = {
  global: (props: any) => ({
    body: {
      color: 'whiteAlpha.900',
      bg: 'linear-gradient(#1e1e2f,#1e1e24)',
    },
  }),
};

const components = {
  List: {
    variants: {
      'with-shadow': {
        bg: 'red.400',
        boxShadow: '0 0 2px 2px #efdfde',
      }
    }
  }
};

const customTheme = extendTheme({
  components,
  styles,
});

export default customTheme;