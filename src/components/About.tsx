import React from 'react';
import { Row, Col, Typography, Image } from '../tools/desing';
import { aboutUs } from '../variables';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <div style={{ padding: '50px', background: 'white' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
        {aboutUs.title}
      </Title>
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={12}>
          <Paragraph>{aboutUs.description}</Paragraph>
        </Col>
        <Col xs={24} md={12}>
          <Image
            src={aboutUs.image}
            alt="About Us"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default About;
