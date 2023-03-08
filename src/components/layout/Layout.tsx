import LayoutProps from 'types/props/LayoutProps';
import useTheme from 'hooks/useTheme';

import './Layout.css';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { themeType } = useTheme();

  return <div className={`layout ${themeType === 'dark' ? 'dark' : 'light'}`}>{children}</div>;
};

export default Layout;
