import React from 'react';
import { Row, Col, Card, Typography } from '../tools/design';
import { projects } from '../variables';

const { Title, Paragraph } = Typography;

const Projects: React.FC = () => {
  return (
    <div style={{ padding: '50px', background: '#f0f2f5' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
        Nuestros Proyectos
      </Title>
      <Row gutter={[16, 16]}>
        {projects.map((project, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt={project.title}
                  src={project.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              }
            >
              <Card.Meta
                title={<Title level={4}>{project.title}</Title>}
                description={<Paragraph>{project.description}</Paragraph>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
