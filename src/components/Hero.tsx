import React from 'react';
import { Typography, Button } from '../tools/desing';
import { companyInfo, colors } from '../variables';

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  return (
    <div
      style={{
        padding: '100px 50px',
        textAlign: 'center',
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Title style={{ color: 'white' }}>{companyInfo.name}</Title>
      <Paragraph style={{ color: 'white', fontSize: '1.2em' }}>
        {companyInfo.slogan}
      </Paragraph>
      <Button
        type="primary"
        size="large"
        style={{
          marginTop: '20px',
          background: colors.secondary,
          borderColor: colors.secondary,
        }}
      >
        Contáctanos
      </Button>
    </div>
  );
};

export default Hero;
