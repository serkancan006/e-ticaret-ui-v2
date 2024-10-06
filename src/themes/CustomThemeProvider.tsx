'use client'

import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/themes/theme'; // Tema yapılandırmasını içe aktar

interface ClientThemeProviderProps {
  children: ReactNode;
}

const CustomThemeProvider: React.FC<ClientThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
