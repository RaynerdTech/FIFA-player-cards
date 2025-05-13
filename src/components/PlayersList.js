// src/components/PlayersList.js
import React from 'react';
import players from '../players';
import Player from './Player';
import { Container, Row, Col } from 'react-bootstrap';

const PlayersList = () => {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={10} md={6} lg={4} xl={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
