import React from 'react';
import { Layout } from '../tools/desing';
import Header from './Header';
import Footer from './Footer';
import { colors } from '../variables';

const { Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

const CustomLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          background: colors.background,
          borderBottom: `2px solid ${colors.primary}`,
          padding: 0,
        }}
      >
        <Header />
      </Layout.Header>
      <Content
        style={{
          minHeight: 'auto',
          background: colors.background,
          color: colors.text,
          padding: '24px',
        }}
      >
        {children}
      </Content>
      <Layout.Footer style={{ background: colors.background, padding: 0 }}>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default CustomLayout;
