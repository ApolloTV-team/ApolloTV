import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from '@/components/icon';
import { Link, usePathname } from 'expo-router';
import { icons } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

interface Props {
  name: keyof typeof icons;
  href: string;
}

const NavLink: FC<Props> = ({ href, name }) => {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <Link
      asChild
      href={href}
    >
      <TouchableOpacity activeOpacity={0.6}>
        <Icon
          name={name}
          color={pathname === href ? 'white' : theme.text.secondary}
          size={24}
        />
      </TouchableOpacity>
    </Link>
  );
};

export default NavLink;
