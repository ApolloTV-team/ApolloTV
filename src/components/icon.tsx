import { icons } from 'lucide-react-native';
import { FC } from 'react';
import { ColorValue } from 'react-native';

interface IconProps {
  name: keyof typeof icons;
  color?: ColorValue;
  fill?: ColorValue;
  size?: number;
}

const Icon: FC<IconProps> = ({ name, color, size, fill }) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      color={color}
      size={size}
      fill={fill ?? 'none'}
    />
  );
};

export default Icon;
