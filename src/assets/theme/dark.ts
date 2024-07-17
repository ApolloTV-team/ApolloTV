import { DefaultTheme } from 'styled-components/native';

export const darkTheme: DefaultTheme = {
  base: {
    mainColor: '#7d5fff',
    SecondColor: '#fff',

    bg: '#1f2429',
    navBg: '#141414',
    darkBg: '#0f0f0f',
    offDarkBg: '#212121',
    gold: '#FFDF00',
  },
  typography: {
    fontFamily: 'NunitoSans_10pt-Regular',
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 36,
    '6xl': 40,
    '7xl': 44,
    '8xl': 48,
    '9xl': 52,
  },
  spacing: {
    paddingBottom: '25px',
    paddingTop: '25px',
    paddingRight: '25px',
    paddingLeft: '25px',
  },
  text: {
    primary: '#fff',
    secondary: '#969695',
    offWhite: '#dbdbdb',

    warning: '#f57c00',
    success: '#388e3c',
    confused: '#ab47bc',
    danger: '#eb2f06',
  },
};
