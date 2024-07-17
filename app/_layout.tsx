import { darkTheme } from '@/assets/theme/dark';
import NavigationBar from '@/features/navigation';
import { Container } from '@/styles/global';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { ThemeProvider, useTheme } from 'styled-components/native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
      if (error) {
        console.warn(`Error in loading fonts: ${error}`);
      }
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <InnerApp />
    </ThemeProvider>
  );
}

const InnerApp = () => {
  const theme = useTheme();

  return (
    <Container>
      <NavigationBar />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.base.darkBg,
          },
        }}
      />
    </Container>
  );
};
