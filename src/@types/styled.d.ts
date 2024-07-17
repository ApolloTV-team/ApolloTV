import 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    base: {
      mainColor: string;
      SecondColor: string;
      bg: string;
      navBg: string;
      darkBg: string;
      offDarkBg: string;
      gold: string;
    };
    typography: {
      fontFamily: string;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      '2xl': number;
      '3xl': number;
      '4xl': number;
      '5xl': number;
      '6xl': number;
      '7xl': number;
      '8xl': number;
      '9xl': number;
    };
    spacing: {
      paddingBottom: string;
      paddingTop: string;
      paddingRight: string;
      paddingLeft: string;
    };
    text: {
      primary: string;
      secondary: string;
      offWhite: string;
      warning: string;
      success: string;
      confused: string;
      danger: string;
    };
  }
}
