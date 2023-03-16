import React from 'react';
import {addDecorator} from '@storybook/react'

import { theme as proTheme } from "../theme/src/index";
import { extendTheme, theme as baseTheme, ChakraProvider, CSSReset } from "@chakra-ui/react";

const theme = extendTheme(
    {
      colors: { ...baseTheme.colors, brand: baseTheme.colors.yellow },
    },
    proTheme
  );

export const parameters = {
  chakra: {
    theme,
  },
}

addDecorator(storyFn => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {storyFn()}
  </ChakraProvider>
))
