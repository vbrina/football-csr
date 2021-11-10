import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { ITeam } from '../../components/TeamCard/TeamCard';
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
import { Row, Col, Button } from 'antd';

import './TeamInfo.css';
import { PlayerTable } from '../../components/PlayerTable/PlayerTable';
import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined';
import { useHistory } from 'react-router';
import { scrollToTop } from '../../helpers/scrollToTop';

export const TeamInfo: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [team, setTeam] = useState<ITeam>();

  const history = useHistory();
  const team_key = queryString.parse(window.location.search);

  const urlToFetch = `https://apiv3.apifootball.com/?action=get_teams&team_id=${team_key.team}&APIkey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    setLoading(true);
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((team) => {
        team.map((t: ITeam) => {
          return setTeam(t);
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [urlToFetch]);

  scrollToTop('header');

  return (
    <div className="team-info-root" id="team-info-root">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Row className="team-info-title-root">
            <Col span={24} className="back-button-root">
              <Button
                shape="round"
                type="link"
                size="large"
                icon={<LeftOutlined />}
                onClick={() => history.push('/home')}
              >
                Voltar
              </Button>
            </Col>
            <Col span={3} className="team-info-title-image">
              <img src={team?.team_badge} alt="logo" />
            </Col>
            <Col span={12} className="team-info-title-text">
              <span>{team?.team_name}</span>
              <span>
                Técnico: {team?.coaches.map((coach) => coach.coach_name)}
              </span>
            </Col>
          </Row>
          <Row className="table-row-root">
            <Col span={24}>
              <PlayerTable players={team?.players} />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};
