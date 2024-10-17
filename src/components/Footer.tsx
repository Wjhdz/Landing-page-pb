import React from 'react';
import { Row, Col, Typography } from '../tools/desing';
import { companyInfo, colors, socialMedia } from '../variables';

const { Text, Link } = Typography;

const Footer: React.FC = () => {
  return (
    <div style={{ background: colors.primary, padding: '24px 50px' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Text strong style={{ color: colors.white }}>
            {companyInfo.name}
          </Text>
          <br />
          <Text style={{ color: colors.white }}>{companyInfo.address}</Text>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Text strong style={{ color: colors.white }}>
            Contacto
          </Text>
          <br />
          <Text style={{ color: colors.white }}>
            Teléfono: {companyInfo.phone}
          </Text>
          <br />
          <Text style={{ color: colors.white }}>
            Email: {companyInfo.email}
          </Text>
        </Col>
        <Col xs={24} md={8}>
          <Text strong style={{ color: colors.white }}>
            Redes Sociales
          </Text>
          <br />
          {socialMedia.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              style={{ color: colors.white, marginRight: '15px' }}
            >
              <social.icon />
            </Link>
          ))}
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '24px' }}>
        <Col>
          <Text style={{ color: colors.white }}>
            © 2024 {companyInfo.name}. Todos los derechos reservados.
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
