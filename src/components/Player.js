// src/components/Player.js
import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const Player = ({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  image = "https://via.placeholder.com/150"
}) => {
  const cardStyle = {
    width: '100%',
    margin: '1rem auto',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fdfdfd',
    border: 'none',
    transition: 'transform 0.3s ease',
  };

  const cardImgStyle = {
    height: '300px',
    objectFit: 'cover',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
  };

  const textStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: '#444',
  };

  const badgeStyle = {
    marginRight: '5px',
    backgroundColor: '#343a40',
  };


  return (
    <Card style={cardStyle} className="player-card" onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
      <Card.Img variant="top" src={image} alt={name} style={cardImgStyle} />
      <Card.Body>
        <Card.Title style={titleStyle}>{name}</Card.Title>
        <Card.Text style={textStyle}>
          <Badge pill style={badgeStyle}>Team</Badge> {team} <br />
          <Badge pill style={badgeStyle}>Nationality</Badge> {nationality} <br />
          <Badge pill style={badgeStyle}>Jersey #</Badge> {jerseyNumber} <br />
          <Badge pill style={badgeStyle}>Age</Badge> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
