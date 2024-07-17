import NavLink from '@/features/navigation/components/navLink';
import { Container } from '@/features/navigation/styles/global';

const NavigationBar = () => {
  return (
    <Container>
      <NavLink
        name="House"
        href="/"
      />

      <NavLink
        name="Tv"
        href="/tvshows"
      />

      <NavLink
        name="Film"
        href="/movies"
      />

      <NavLink
        name="Settings"
        href="/settings"
      />
    </Container>
  );
};

export default NavigationBar;
