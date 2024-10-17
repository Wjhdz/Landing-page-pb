import React, { useState } from 'react';
import {
  Row,
  Col,
  Button,
  Avatar,
  Drawer,
  Typography,
  Anchor,
} from '../tools/desing';
import { MenuOutlined } from '@ant-design/icons';
import { companyInfo, colors } from '../variables';

const { Text } = Typography;

const Header: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { key: 'home', href: '#hero', title: 'Inicio' },
    { key: 'services', href: '#services', title: 'Servicios' },
    { key: 'projects', href: '#projects', title: 'Proyectos' },
    { key: 'about', href: '#about', title: 'Sobre Nosotros' },
  ];

  return (
    <Row align="middle" style={{ padding: '0 50px' }}>
      <Col xs={12} md={6}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src={companyInfo.logo}
            alt="Logo"
            style={{ marginRight: '15px' }}
          />
          <Text strong style={{ color: colors.primary, fontSize: '18px' }}>
            {companyInfo.name}
          </Text>
        </div>
      </Col>
      <Col xs={12} md={0} style={{ textAlign: 'right' }}>
        <Button type="link" onClick={() => setDrawerVisible(true)}>
          <MenuOutlined style={{ color: colors.primary }} />
        </Button>
      </Col>
      <Col xs={0} md={18}>
        <Anchor
          direction="horizontal"
          items={menuItems}
          style={{ background: 'transparent' }}
        />
      </Col>
      <Drawer
        title={companyInfo.name}
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <Anchor items={menuItems} />
      </Drawer>
    </Row>
  );
};

export default Header;
