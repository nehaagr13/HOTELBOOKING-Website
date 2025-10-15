import icons from '@/lib/icons.jsx';

const Icon = ({ icon, ...props }) => {
  const IconComponent = icons[icon];
  if (!IconComponent) return null; // prevents crash if icon name is wrong
  return <IconComponent {...props} />;
};

export default Icon;
