// src/components/Projects.js
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import certificado from '../certificado.png';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'AtividadeSENAC',
    description: 'project_description_academic', 
  },
  {
    title: 'RepositoriosFlutterFall',
    description: 'project_description_flutter', 
    link: 'https://github.com/RepositoriosFlutterFall'
  },
  {
    title: 'RepositoriosFrontEndFall',
    description: 'project_description_frontend',
    link: 'https://github.com/RepositoriosFrontEndFall'
  }
];

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="my-5 py-4">
      <h2>{t('projects')}</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{t(project.description)}</Card.Text> 
                <Button variant="primary" href={project.link} target="_blank">
                  {t('portfolio')}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h3 className="mt-5">{t('certificates')}</h3>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={certificado} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={certificado} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={certificado} />
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Projects;
