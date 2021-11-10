import { Col, Row } from 'antd';
import React from 'react';
import { IPlayer } from '../PlayerTable/PlayerTable';

import './TeamCard.css';

export interface ITeam {
  team_key: string;
  team_badge: string;
  team_name: string;
  players: IPlayer[];
  coaches: any[];
}

export interface TeamCardProps {
  onClick: any;
  team: ITeam;
}

export const TeamCard: React.FC<TeamCardProps> = ({ team, onClick }) => {
  return (
    <Col
      span={4}
      className="card-root"
      title={team.team_name}
      onClick={() => onClick()}
    >
      <Row className="row">
        <img src={team.team_badge} alt={team.team_badge} />
      </Row>
      <Row className="row">
        <span className="team-name">{team.team_name}</span>
      </Row>
      <Row className="row">
        <span>Total de jogadores: {team.players.length}</span>
      </Row>
    </Col>
  );
};
