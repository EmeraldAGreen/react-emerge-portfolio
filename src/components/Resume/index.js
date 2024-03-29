import React from 'react';
import pdf from "../../assets/pdfs/Resume_10_2022_Tech.pdf";
import { Container, Row, Card, ListGroup } from 'react-bootstrap';

function Resume() {
  return (
    <section className="my-5">
        <p>
        Download my <button className="button-download"><a href={pdf} download="Resume_10_2022_Tech.pdf">resume</a> </button>
        </p>
      <div className="my-2 container-center-horizontal">
      <Container>
        <Row className="proficiencies">
          <Card className="py-2">
            <Card.Header>
            <h3>Front-end Proficiencies</h3>
            </Card.Header>
            <Card.Body>
            <ListGroup className="skills">
              <ListGroup.Item>HTML</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item>JavaScript</ListGroup.Item>
              <ListGroup.Item>jQuery</ListGroup.Item>
              <ListGroup.Item>responsive design</ListGroup.Item>
              <ListGroup.Item>React</ListGroup.Item>
              <ListGroup.Item>Bootstrap</ListGroup.Item>
            </ListGroup>
            </Card.Body>
          </Card>
          <Card className="py-2">
            <Card.Header>
            <h3>Back-end Proficiencies</h3>
            </Card.Header>
            <Card.Body>
            <ListGroup className="skills">
              <ListGroup.Item>APIs</ListGroup.Item>
              <ListGroup.Item>Node</ListGroup.Item>
              <ListGroup.Item>Express</ListGroup.Item>
              <ListGroup.Item>MySQL, Sequelize</ListGroup.Item>
              <ListGroup.Item>MongoDB, Mongoose</ListGroup.Item>
              <ListGroup.Item>REST</ListGroup.Item>
              <ListGroup.Item>GraphQL</ListGroup.Item>
            </ListGroup>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      </div>
    </section>
  );
}

export default Resume;
