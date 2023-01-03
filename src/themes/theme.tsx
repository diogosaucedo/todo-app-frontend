import { ThemeProvider } from 'styled-components';

const fontSizes = {
  body: 14,
  bodyLarge: 18,
  bodyExtraLarge: 20,
  displayExtraLarge: 96,
};

const primary = '#2567B4';
const secondary = '#F9B531';

const theme = {
  fontSizes,
  fonts: {
    primary: 'Raleway',
    secondary: 'Roboto',
  },
  colors: {
    primary,
    secondary,
  },
};

type Props = {
  children: React.ReactNode;
};

export type ThemeType = typeof theme;

export const Theme: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
 