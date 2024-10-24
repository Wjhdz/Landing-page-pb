import React from "react";
import { Row, Col, Card, Typography } from "../tools/desing";
import { CodeIcon, LightbulbIcon, ShieldIcon } from "lucide-react";
import { services, colors } from "../variables";

const { Title, Paragraph } = Typography;

const iconMap = {
  CodeIcon: CodeIcon,
  LightbulbIcon: LightbulbIcon,
  ShieldIcon: ShieldIcon,
};

const Services: React.FC = () => {
  return (
    <div style={{ padding: "50px", background: "white" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
        Nuestros Servicios
      </Title>
      <Row gutter={[16, 16]}>
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];
          return (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                style={{ height: "100%" }}
                cover={
                  <IconComponent
                    size={48}
                    color={colors.primary}
                    style={{ margin: "20px auto" }}
                  />
                }
              >
                <Card.Meta
                  title={
                    <Paragraph>
                      <Title level={4}>{service.title}</Title>
                    </Paragraph>
                  }
                  description={<Paragraph>{service.description}</Paragraph>}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Services;
