import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
import { TeamCard, ITeam } from '../../components/TeamCard/TeamCard';
import { scrollToTop } from '../../helpers/scrollToTop';

import './Home.css';

export const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [teams, setTeams] = useState<ITeam[]>([]);

  const history = useHistory();

  const urlToFetch = `https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    setLoading(true);
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((teams) => {
        setTeams(teams);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [urlToFetch]);

  scrollToTop('header');

  const generateTeamCard = () => {
    return teams.map((team) => {
      return (
        <TeamCard
          team={team}
          onClick={() => history.push(`/team-info?team=${team.team_key}`)}
        />
      );
    });
  };

  return (
    <div className="home-root">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Row className="title-root">
            <Col span={6} className="title-image">
              <img
                src="https://apiv3.apifootball.com/badges/logo_leagues/302_la-liga.png"
                alt="logo"
              />
            </Col>
            <Col span={12} className="title-text">
              <span>
                Escolha um time para ver as estatísticas dos jogadores
              </span>
            </Col>
          </Row>
          <Row className="card-row-root">{generateTeamCard()}</Row>
        </>
      )}
    </div>
  );
};
